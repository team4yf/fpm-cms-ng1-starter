DROP TABLE IF EXISTS `usr_profile`;
CREATE TABLE IF NOT EXISTS `usr_profile` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `profile` varchar(2000) NOT NULL COMMENT '配置',
  `name` varchar(50) DEFAULT NULL COMMENT '配置名',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


INSERT INTO `usr_profile` (`id`, `profile`, `name`, `delflag`, `createAt`, `updateAt`) VALUES
(1, '{\"dateformat\":\"yyyy-mm-dd\",\"mdl_report\":\"m_user desc\"}', '默认系统配置', 0, 0, 0);