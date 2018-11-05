DROP TABLE IF EXISTS `cms_datameta`;
CREATE TABLE IF NOT EXISTS `cms_datameta` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `data` varchar(20) DEFAULT NULL,
  `manage` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
INSERT INTO `cms_datameta` (`id`, `createAt`, `updateAt`, `delflag`, `data`, `manage`) VALUES
(1, 0, 0, 0, 'Post', 'Click Me'),
(2, 0, 0, 0, 'Page', 'Click Me'),
(3, 0, 0, 0, 'Comment', 'Click Me');