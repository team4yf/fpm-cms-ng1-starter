DROP TABLE IF EXISTS `usr_userinfo`;
CREATE TABLE IF NOT EXISTS `usr_userinfo` (
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
  `profile_id` bigint(11) NOT NULL DEFAULT 1 COMMENT '用户配置',
  `desktop_id` bigint(11) NOT NULL DEFAULT 1 COMMENT '工作台',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  `lastLoginAt` bigint(20) NOT NULL DEFAULT '0',
  `lastLoginIp` varchar(50) NOT NULL DEFAULT '127.0.0.1' COMMENT '用户邮箱',
  `try_fail` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COMMENT='用户信息';

INSERT INTO `usr_userinfo` (`id`, `password`, `nickname`, `username`, `email`, `mobile`, `delflag`, `dept`, `createAt`, `gender`, `profile_id`, `desktop_id`, `updateAt`) VALUES
(3, '7e4d92b7cbaaf24605090282380654ce', 'admin', 'admin', 'zyh1985200@yahoo.com.cn', '18626367704', 0, 5, 1526370965088, 1, 1, 1, 0),
(6, '7e4d92b7cbaaf24605090282380654ce', '夏英伟', 'xyw', 'betterxiayw@126.com', '13942602228', 0, 2, 1526370965088, 1, 1, 1, 0),
(14, '7e4d92b7cbaaf24605090282380654ce', '陈梦', 'cm', '15251582013@163.com ', '15251582013 ', 0, 8, 1526370965088, 0, 1, 1, 0),
(16, '7e4d92b7cbaaf24605090282380654ce', '陈曦', 'cx', '13903351695@163.com ', '13903351695 ', 0, 3, 1526370965088, 1, 1, 1, 0),
(17, '7e4d92b7cbaaf24605090282380654ce', '朱寅浩', 'zyh', '18626367704@163.com ', '18626367704', 0, 8, 1526370965088, 1, 1, 1, 0),
(20, '7e4d92b7cbaaf24605090282380654ce', '卫美玉', 'wmy', '13621529058@163.com ', '13621529058 ', 0, 1, 1526370965088, 0, 1, 1, 0),
(21, '7e4d92b7cbaaf24605090282380654ce', '宋静文', 'sjw', '18661052161@163.com ', '15358069523	', 0, 6, 1526370965088, 0, 1, 1, 0),
(24, '7e4d92b7cbaaf24605090282380654ce', '陆学武 ', 'lxw', '18362358588@163.com ', '15358068352	', 0, 7, 1526370965088, 1, 1, 1, 0),
(25, '7e4d92b7cbaaf24605090282380654ce', '江  峰 ', 'jf', '13812133386@163.com', '13812133386 ', 0, 8, 1526370965088, 1, 1, 1, 0),
(27, '7e4d92b7cbaaf24605090282380654ce', '张恬伟 ', 'ztw', '13584198834@163.com', '13584198834 ', 0, 7, 1526370965088, 1, 1, 1, 0);