DROP TABLE IF EXISTS `cms_category_second`;
CREATE TABLE IF NOT EXISTS `cms_category_second` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(20) DEFAULT '二级菜单',
  `first_id` bigint(20) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
INSERT INTO `cms_category_second` (`id`, `createAt`, `updateAt`, `delflag`, `name`, `first_id`) VALUES
(1, 0, 0, 0, '菜单B1', 1),
(2, 0, 0, 0, '菜单B2', 1);