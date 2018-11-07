DROP TABLE IF EXISTS `cms_category`;
CREATE TABLE IF NOT EXISTS `cms_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(20) DEFAULT '默认名称',
  `parent_id` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
INSERT INTO `cms_category` (`id`, `createAt`, `updateAt`, `delflag`, `name`, `parent_id`) VALUES
(1, 0, 0, 0, '菜单1', 0),
(2, 0, 0, 0, '菜单1', 0),
(3, 0, 0, 0, '菜单2', 1),
(4, 0, 0, 0, '菜单2', 1),
(5, 0, 0, 0, '菜单3', 3),
(6, 0, 0, 0, '菜单3', 3);