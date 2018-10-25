DROP TABLE IF EXISTS `usr_obs`;
CREATE TABLE IF NOT EXISTS `usr_obs` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '部门id',
  `name` varchar(100) NOT NULL COMMENT '部门名称',
  `pid` bigint(11) NOT NULL DEFAULT '0' COMMENT '上级部门',
  `role_id` bigint(11) DEFAULT NULL COMMENT '部门权限',
  `profile_id` bigint(11) DEFAULT NULL COMMENT '部门配置',
  `desktop_id` bigint(11) DEFAULT NULL COMMENT '部门工作台',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='企业OBS架构';

INSERT INTO `usr_obs` (`id`, `name`, `pid`, `role_id`, `profile_id`, `desktop_id`, `delflag`, `createAt`, `updateAt`) VALUES
(1, '财务部', 0, 12, 1, 1, 0, 0, 0),
(2, '副经理', 0, 8, 1, 1, 0, 0, 0),
(3, '总经理', 0, 7, 1, 1, 0, 0, 0),
(4, '综合部', 0, 13, 1, 1, 0, 0, 0),
(5, '信息中心', 0, 11, 1, 1, 0, 0, 0),
(6, '战略企划部', 0, 10, 1, 1, 0, 0, 0),
(7, '运营中心', 0, 9, 1, 1, 0, 0, 0),
(8, '员工', 0, 6, 1, 1, 0, 0, 0);