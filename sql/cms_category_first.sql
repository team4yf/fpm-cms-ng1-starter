DROP TABLE IF EXISTS `cms_category_first`;
CREATE TABLE IF NOT EXISTS `cms_category_first` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(20) DEFAULT '一级菜单',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
INSERT INTO `cms_category_first` (`id`, `createAt`, `updateAt`, `delflag`, `name`) VALUES
(1, 0, 0, 0, '菜单A1'),
(2, 0, 0, 0, '菜单A2');