-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： db
-- 生成日期： 2018-11-05 05:34:16
-- 服务器版本： 5.6.42
-- PHP 版本： 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `fpm_project`
--

-- --------------------------------------------------------

--
-- 表的结构 `cms_datameta_edit`
--

CREATE TABLE `cms_datameta_edit` (
  `id` bigint(20) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `title` varchar(20) DEFAULT NULL,
  `columnName` varchar(20) DEFAULT NULL,
  `formType` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `datameta_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cms_datameta_edit`
--

INSERT INTO `cms_datameta_edit` (`id`, `createAt`, `updateAt`, `delflag`, `title`, `columnName`, `formType`, `type`, `datameta_id`) VALUES
(1, 0, 0, 0, 'SKU', 'sku', 'Text', 'Numric', 1),
(2, 0, 0, 0, 'STORE', 'store', 'Html', 'Numric', 2),
(3, 0, 0, 0, 'PRICE', 'price', 'Image', 'Numric', 3),
(4, 0, 0, 0, 'a123', 'a123', 'a123', 'a123', 1),
(5, 0, 0, 0, 'b123', 'b123', 'b123', 'b123', 2),
(6, 0, 1541388939961, 0, 'c123', 'c123', 'c123', '123', 3);

--
-- 转储表的索引
--

--
-- 表的索引 `cms_datameta_edit`
--
ALTER TABLE `cms_datameta_edit`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cms_datameta_edit`
--
ALTER TABLE `cms_datameta_edit`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
