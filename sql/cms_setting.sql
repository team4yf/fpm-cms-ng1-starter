-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： db
-- 生成日期： 2018-11-05 05:34:08
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
-- 表的结构 `cms_setting`
--

CREATE TABLE `cms_setting` (
  `id` bigint(20) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `domain` varchar(255) DEFAULT NULL,
  `langulage` varchar(20) DEFAULT NULL,
  `sitecode` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cms_setting`
--

INSERT INTO `cms_setting` (`id`, `createAt`, `updateAt`, `delflag`, `domain`, `langulage`, `sitecode`, `email`, `phone`) VALUES
(36, 1541142207436, 1541142207436, 0, 'www.4399.com', 'EN', 'subei', '4399@com', '13777777777'),
(37, 1541143038216, 1541143038216, 0, '123.com', '132', '123', '1@com', '13777777777'),
(39, 1541143250162, 1541143250162, 0, '123.com', '123', '123123', '123@q', '18752775741');

--
-- 转储表的索引
--

--
-- 表的索引 `cms_setting`
--
ALTER TABLE `cms_setting`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cms_setting`
--
ALTER TABLE `cms_setting`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
