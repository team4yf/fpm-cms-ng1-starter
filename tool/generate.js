const _ = require('lodash');
const fs = require('fs');

const AI_START = 1;
const TABLE_COMMENT = 'test';
const TABLE_NAME = 't_test';

const fields = [
  {
    name: 'name',
    type: 'varchar(200)',
    nn: 'NOT',
    dft: 'NULL',
    comment: '名称',
  }
];
const field_compiled = _.template('\`${ name }\` ${ type } ${ nn } NULL DEFAULT ${ dft } COMMENT \'${ comment }\', ');
const FIELDS = _.reduce( fields, ( r, i ) => {
  return r + field_compiled(i)
}, '');

const SQL_TEMPLATE = `
DROP TABLE IF EXISTS \`${ TABLE_NAME }\`;
CREATE TABLE IF NOT EXISTS \`${ TABLE_NAME }\` (
  \`id\` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  \`delflag\` tinyint(4) NOT NULL DEFAULT '0' COMMENT '删除标示',
  \`createAt\` bigint(20) NOT NULL DEFAULT '0' COMMENT '数据创建时间戳',
  \`updateAt\` bigint(20) NOT NULL DEFAULT '0' COMMENT '数据更新时间戳',
  ${ FIELDS }
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=${ AI_START } DEFAULT CHARSET=utf8 COMMENT='${ TABLE_COMMENT }';
`;
console.log(SQL_TEMPLATE);
// return;
fs.writeFile(`${ TABLE_NAME }.sql`, SQL_TEMPLATE, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
