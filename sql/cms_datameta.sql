-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： db
-- 生成日期： 2018-11-05 05:34:21
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
-- 表的结构 `cms_datameta`
--

CREATE TABLE `cms_datameta` (
  `id` bigint(20) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `data` varchar(20) DEFAULT NULL,
  `manage` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cms_datameta`
--

INSERT INTO `cms_datameta` (`id`, `createAt`, `updateAt`, `delflag`, `data`, `manage`) VALUES
(1, 0, 0, 0, 'Post', 'Click Me'),
(2, 0, 0, 0, 'Page', 'Click Me'),
(3, 0, 0, 0, 'Comment', 'Click Me');

--
-- 转储表的索引
--

--
-- 表的索引 `cms_datameta`
--
ALTER TABLE `cms_datameta`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cms_datameta`
--
ALTER TABLE `cms_datameta`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
