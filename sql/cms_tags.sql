DROP TABLE IF EXISTS `cms_tags`;
CREATE TABLE IF NOT EXISTS `cms_tags` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `tagName` varchar(20) DEFAULT '标签名' COMMENT '标签名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
INSERT INTO `cms_tags` (`id`, `createAt`, `updateAt`, `delflag`, `tagName`) VALUES
(1, 0, 1541482821172, 1, 'M'),
(2, 0, 1541472495095, 0, 'L'),
(3, 0, 1541472491860, 0, 'K'),
(4, 0, 1541472489713, 0, 'J'),
(5, 0, 1541472486581, 0, 'I'),
(6, 0, 1541472483835, 0, 'H'),
(7, 0, 1541472481086, 0, 'G'),
(8, 0, 1541472466927, 0, 'F'),
(9, 0, 1541472465076, 0, 'E'),
(10, 0, 1541472463427, 0, 'D'),
(11, 0, 1541472460554, 0, 'C'),
(12, 0, 1541472458170, 0, 'B'),
(16, 1541483525965, 1541484547590, 0, 'A');