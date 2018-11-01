const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const { transation } = require('./executer.js');

const table_metas = _.map(_.remove(process.argv, arg => {
                              return arg.endsWith('.json')
                            }),
                            json_path => {
                              return require(path.join(process.cwd(), json_path))
                            });

const AI_START = 1;

const generate_one = meta => {
  const { name, comment = '-', fields } = meta;
  const field_compiled = _.template('\`${ name }\` ${ type } ${ nn } NULL ${ dft } COMMENT \'${ comment }\', ');
  const FIELDS = _.reduce( fields, ( r, i ) => {
    const f = Object.assign({ nn: true, type: 'string', dft: '', comment: '-'}, i)
    if(!_.isEmpty(f.dft)){
      f.dft = 'DEFAULT ' + (_.isString(f.dft)? `'${f.dft}'` : f.dft)
    }
    f.nn = f.nn ? '' : 'NOT';
    switch(f.type){
      case 'string':
        f.type = 'varchar(200)';
        break;
      case 'text':
        f.type = 'varchar(1000)';
        break;
      case 'longText':
        f.type = 'text';
        break;
      case 'int':
        f.type = 'int';
        break;
      case 'bool':
        f.type = 'tinyint(1)';
        break;
      case 'bigint':
        f.type = 'bigint';
        break;
      case 'timestamp':
        f.type = 'bigint';
        break;
    }
    return r + '  ' + field_compiled(f) + '\n'
  }, '');
  const SQL_TEMPLATE = `
DROP TABLE IF EXISTS \`${ name }\`;
CREATE TABLE IF NOT EXISTS \`${ name }\` (
  \`id\` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  \`delflag\` tinyint(4) NOT NULL DEFAULT '0' COMMENT '删除标示',
  \`createAt\` bigint(20) NOT NULL DEFAULT '0' COMMENT '数据创建时间戳',
  \`updateAt\` bigint(20) NOT NULL DEFAULT '0' COMMENT '数据更新时间戳',
${ FIELDS }  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=${ AI_START } DEFAULT CHARSET=utf8 COMMENT='${ comment }';
  `;
  return SQL_TEMPLATE;
}
const sqls = _.map(table_metas, meta => {
  return generate_one(meta);
})

const doSql = _sqls =>{
  transation().then( atom => {
    const command = Promise.promisify(atom.command);
    const commands = [];
    _.map(_sqls, sql => {
      sql = sql.replace(/\n/g, '');
      sql = sql.split(';');
      _.remove(sql, (n) => { return _.trim(n) == ''})
      _.map(sql, s => {
        commands.push(command( { sql: s }));
      })
    })
    Promise.all(commands)
      .then( results => {
        // console.log(results);
        atom.commit(() => {
          console.log('ok');
        });
      })
      .catch(err => {
        console.error(err);
        atom.rollback();
      })
  })
}

doSql(sqls);
