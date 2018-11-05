DROP TABLE IF EXISTS `cms_datameta_edit`;
CREATE TABLE IF NOT EXISTS `cms_datameta_edit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `title` varchar(20) DEFAULT NULL,
  `columnName` varchar(20) DEFAULT NULL,
  `formType` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `datameta_id` bigint(20) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
INSERT INTO `cms_datameta_edit` (`id`, `createAt`, `updateAt`, `delflag`, `title`, `columnName`, `formType`, `type`, `datameta_id`) VALUES
(1, 0, 0, 0, 'SKU', 'sku', 'Text', 'Numric', 1),
(2, 0, 0, 0, 'STORE', 'store', 'Html', 'Numric', 2),
(3, 0, 0, 0, 'PRICE', 'price', 'Image', 'Numric', 3),
(4, 0, 0, 0, 'a123', 'a123', 'a123', 'a123', 1),
(5, 0, 0, 0, 'b123', 'b123', 'b123', 'b123', 2),
(6, 0, 1541388939961, 0, 'c123', 'c123', 'c123', '123', 3);