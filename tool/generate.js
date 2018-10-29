const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const table_metas = _.map(_.remove(process.argv, arg => {
                              return arg.endsWith('.json')
                            }),
                            json_path => {
                              return require(path.join(__dirname, json_path))
                            });

const AI_START = 1;

const generate_one = meta => {
  const { name, comment = '-', fields } = meta;
  const field_compiled = _.template('\`${ name }\` ${ type } ${ nn } NULL ${ dft } COMMENT \'${ comment }\', ');
  const FIELDS = _.reduce( fields, ( r, i ) => {
    const f = Object.assign({ nn: '', dft: '', comment: '-'}, i)
    if(!_.isEmpty(f.dft)){
      f.dft = 'DEFAULT ' + (_.isString(f.dft)? `'${f.dft}'` : f.dft)
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
_.map(sqls, sql => console.log(sql));

// fs.writeFile(`${ TABLE_NAME }.sql`, SQL_TEMPLATE, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
