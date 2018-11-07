DROP TABLE IF EXISTS `cms_category_third`;
CREATE TABLE  IF NOT EXISTS `cms_category_third` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(20) DEFAULT '三级菜单',
  `second_id` bigint(20) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
INSERT INTO `cms_category_third` (`id`, `createAt`, `updateAt`, `delflag`, `name`, `second_id`) VALUES
(1, 0, 0, 0, '菜单C1', 1),
(2, 0, 0, 0, '菜单C2', 1),
(3, 0, 0, 0, '菜单C3', 2),
(4, 0, 0, 0, '菜单C4', 2);