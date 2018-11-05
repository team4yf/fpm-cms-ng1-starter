DROP TABLE IF EXISTS `cms_setting`;
CREATE TABLE IF NOT EXISTS `cms_setting` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `domain` varchar(255) DEFAULT NULL,
  `language` varchar(20) DEFAULT NULL,
  `sitecode` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
INSERT INTO `cms_setting` (`id`, `createAt`, `updateAt`, `delflag`, `domain`, `language`, `sitecode`, `email`, `phone`) VALUES
(1, 1541142207436, 1541142207436, 0, 'www.4399.com', 'EN', 'subei', '4399@com', '13777777777'),
(2, 1541143038216, 1541143038216, 0, '123.com', '132', '123', '1@com', '13777777777'),
(3, 1541143250162, 1541143250162, 0, '123.com', '123', '123123', '123@q', '18752775741');