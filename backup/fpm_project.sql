Warning: Using a password on the command line interface can be insecure.
-- MySQL dump 10.13  Distrib 5.6.40, for Linux (x86_64)
--
-- Host: localhost    Database: fpm_project
-- ------------------------------------------------------
-- Server version	5.6.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usr_desktop`
--

DROP TABLE IF EXISTS `usr_desktop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usr_desktop` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '工作台ID',
  `name` varchar(50) NOT NULL COMMENT '工作台名称',
  `title` varchar(500) DEFAULT NULL COMMENT '工作台标题',
  `remark` varchar(500) DEFAULT NULL COMMENT '工作台备注',
  `group_id` bigint(11) NOT NULL COMMENT '工作台所属的安全组',
  `sort_index` int(11) DEFAULT '0' COMMENT '工作台索引位置',
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `entry_url` varchar(200) NOT NULL DEFAULT '/',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户工作台';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr_desktop`
--

LOCK TABLES `usr_desktop` WRITE;
/*!40000 ALTER TABLE `usr_desktop` DISABLE KEYS */;
INSERT INTO `usr_desktop` VALUES (1,'Default-Desktop','默认工作台','系统默认工作台',1,1,0,0,0,'/setting/area');
/*!40000 ALTER TABLE `usr_desktop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usr_obs`
--

DROP TABLE IF EXISTS `usr_obs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usr_obs` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '部门id',
  `name` varchar(100) NOT NULL COMMENT '部门名称',
  `pid` bigint(11) NOT NULL DEFAULT '0' COMMENT '上级部门',
  `role_id` bigint(11) DEFAULT NULL COMMENT '部门权限',
  `profile_id` bigint(11) DEFAULT NULL COMMENT '部门配置',
  `desktop_id` bigint(11) DEFAULT NULL COMMENT '部门工作台',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='企业OBS架构';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr_obs`
--

LOCK TABLES `usr_obs` WRITE;
/*!40000 ALTER TABLE `usr_obs` DISABLE KEYS */;
INSERT INTO `usr_obs` VALUES (1,'财务部',0,12,1,1,0,0,0),(2,'副经理',0,8,1,1,0,0,0),(3,'总经理',0,7,1,1,0,0,0),(4,'综合部',0,13,1,1,0,0,0),(5,'信息中心',0,11,1,1,0,0,0),(6,'战略企划部',0,10,1,1,0,0,0),(7,'运营中心',0,9,1,1,0,0,0),(8,'员工',0,6,1,1,0,0,0);
/*!40000 ALTER TABLE `usr_obs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usr_profile`
--

DROP TABLE IF EXISTS `usr_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usr_profile` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `profile` varchar(2000) NOT NULL COMMENT '配置',
  `name` varchar(50) DEFAULT NULL COMMENT '配置名',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr_profile`
--

LOCK TABLES `usr_profile` WRITE;
/*!40000 ALTER TABLE `usr_profile` DISABLE KEYS */;
INSERT INTO `usr_profile` VALUES (1,'{\"dateformat\":\"yyyy-mm-dd\",\"mdl_report\":\"m_user desc\"}','默认系统配置',0,0,0);
/*!40000 ALTER TABLE `usr_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usr_userinfo`
--

DROP TABLE IF EXISTS `usr_userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usr_userinfo` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `password` varchar(50) DEFAULT NULL COMMENT '用户密码',
  `nickname` varchar(100) DEFAULT NULL COMMENT '用户昵称',
  `username` varchar(50) DEFAULT NULL COMMENT '用户帐户',
  `email` varchar(50) DEFAULT NULL COMMENT '用户邮箱',
  `mobile` varchar(20) DEFAULT NULL COMMENT '用户手机',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `dept` bigint(11) DEFAULT NULL COMMENT '用户的部门',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `gender` tinyint(1) NOT NULL DEFAULT '1' COMMENT '员工性别:1-男,0-女',
  `profile_id` bigint(11) NOT NULL DEFAULT '1' COMMENT '用户配置',
  `desktop_id` bigint(11) NOT NULL DEFAULT '1' COMMENT '工作台',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `lastLoginAt` bigint(20) NOT NULL DEFAULT '0',
  `lastLoginIp` varchar(50) NOT NULL DEFAULT '127.0.0.1' COMMENT '用户邮箱',
  `try_fail` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COMMENT='用户信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr_userinfo`
--

LOCK TABLES `usr_userinfo` WRITE;
/*!40000 ALTER TABLE `usr_userinfo` DISABLE KEYS */;
INSERT INTO `usr_userinfo` VALUES (3,'7e4d92b7cbaaf24605090282380654ce','admin','admin','zyh1985200@yahoo.com.cn','18626367704',0,5,1526370965088,1,1,1,1,0,0,'127.0.0.1',0),(6,'7e4d92b7cbaaf24605090282380654ce','夏英伟','xyw','betterxiayw@126.com','13942602228',0,2,1526370965088,1,1,1,1,0,0,'127.0.0.1',0),(14,'7e4d92b7cbaaf24605090282380654ce','陈梦','cm','15251582013@163.com ','15251582013 ',0,8,1526370965088,0,1,1,1,0,0,'127.0.0.1',0),(16,'7e4d92b7cbaaf24605090282380654ce','陈曦','cx','13903351695@163.com ','13903351695 ',0,3,1526370965088,1,1,1,1,0,0,'127.0.0.1',0),(17,'7e4d92b7cbaaf24605090282380654ce','朱寅浩','zyh','18626367704@163.com ','18626367704',0,8,1526370965088,1,1,1,1,0,0,'127.0.0.1',0),(20,'7e4d92b7cbaaf24605090282380654ce','卫美玉','wmy','13621529058@163.com ','13621529058 ',0,1,1526370965088,0,1,1,1,0,0,'127.0.0.1',0),(21,'7e4d92b7cbaaf24605090282380654ce','宋静文','sjw','18661052161@163.com ','15358069523	',0,6,1526370965088,0,1,1,1,0,0,'127.0.0.1',0),(24,'7e4d92b7cbaaf24605090282380654ce','陆学武 ','lxw','18362358588@163.com ','15358068352	',0,7,1526370965088,1,1,1,1,0,0,'127.0.0.1',0),(25,'7e4d92b7cbaaf24605090282380654ce','江  峰 ','jf','13812133386@163.com','13812133386 ',0,8,1526370965088,1,1,1,1,0,0,'127.0.0.1',0),(27,'7e4d92b7cbaaf24605090282380654ce','张恬伟 ','ztw','13584198834@163.com','13584198834 ',0,7,1526370965088,1,1,1,1,0,0,'127.0.0.1',0);
/*!40000 ALTER TABLE `usr_userinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usr_widget`
--

DROP TABLE IF EXISTS `usr_widget`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usr_widget` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '仪表板id',
  `name` varchar(50) NOT NULL COMMENT '仪表板名称',
  `title` varchar(500) DEFAULT NULL COMMENT '仪表板标题',
  `remark` varchar(500) DEFAULT NULL COMMENT '仪表板备注',
  `height` int(11) DEFAULT '150' COMMENT '仪表板的高度',
  `width` int(11) DEFAULT '200' COMMENT '仪表板的宽度',
  `visible` tinyint(1) NOT NULL DEFAULT '1' COMMENT '仪表板的可见性',
  `ds` varchar(500) DEFAULT NULL COMMENT '仪表板的数据源',
  `link` varchar(100) DEFAULT NULL COMMENT '仪表板的链接',
  `desktop_id` int(11) NOT NULL COMMENT '关联的工作台',
  `type` varchar(10) NOT NULL DEFAULT 'default' COMMENT '仪表板类型',
  `delflag` tinyint(1) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户仪表板';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr_widget`
--

LOCK TABLES `usr_widget` WRITE;
/*!40000 ALTER TABLE `usr_widget` DISABLE KEYS */;
INSERT INTO `usr_widget` VALUES (1,'notice','公告栏','oa的公告栏，可由管理员于后台发布后，滚动显示在仪表板上',200,350,1,'c?s=common&o=notice','http://www.baidu.com',1,'notice',0,0,0);
/*!40000 ALTER TABLE `usr_widget` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-30  6:33:44
