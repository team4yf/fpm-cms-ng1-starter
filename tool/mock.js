const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const tables = _.remove(process.argv, arg => {
  return arg.endsWith('.json')
});

const mocks = _.map(tables, json_path => {
  const table = path.basename(json_path, '.json');
  return { table: table, rows: require(path.join(process.cwd(), json_path)) }
});

const sqls = _.map(mocks, mock => {
  const { table, rows} = mock;
  if( rows.length < 1){
    return;
  }
  const keys = _.keys(rows[0]);
  const keys_str = keys.join(',');
  const values = _.map(rows, row => {
    return '(' + _.map(_.values(row), v => _.isString(v)? `'${v}'`: v).join(',') + ')'
  });
  const values_str = values.join(',\n');
  const sql =
`INSERT INTO ${ table }
( ${ keys_str } )
VALUES
${ values_str }
`
  return sql;
})
_.map(sqls, sql => console.log(sql));


