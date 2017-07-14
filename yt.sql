/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yt

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-14 17:23:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ytuser
-- ----------------------------
DROP TABLE IF EXISTS `ytuser`;
CREATE TABLE `ytuser` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `callPhone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ytuser
-- ----------------------------
INSERT INTO `ytuser` VALUES ('5', 'ewre3rew', '43543543543', '2017-07-13 19:18:28');
INSERT INTO `ytuser` VALUES ('4', '324343', '433243545', '2017-07-13 19:18:22');
INSERT INTO `ytuser` VALUES ('6', '', 'e10adc3949ba59abbe56e057f20f883e', '2017-07-13 19:37:23');
INSERT INTO `ytuser` VALUES ('7', '', 'e10adc3949ba59abbe56e057f20f883e', '2017-07-13 19:40:44');
INSERT INTO `ytuser` VALUES ('8', '', 'e10adc3949ba59abbe56e057f20f883e', '2017-07-13 19:41:14');
INSERT INTO `ytuser` VALUES ('9', '12345', '15de21c670ae7c3f6f3f1f37029303c9', '2017-07-13 19:42:39');
INSERT INTO `ytuser` VALUES ('10', '12345', '14ecf21ce54e9df3abbc5493d5050a27', '2017-07-13 19:43:04');
INSERT INTO `ytuser` VALUES ('11', '123451', '4297f44b13955235245b2497399d7a93', '2017-07-13 19:57:08');
INSERT INTO `ytuser` VALUES ('12', '13413323030', '7fa8282ad93047a4d6fe6111c93b308a', '2017-07-13 20:05:39');
INSERT INTO `ytuser` VALUES ('13', '2432432', 'b0baee9d279d34fa1dfd71aadb908c3f', '2017-07-13 20:15:15');
INSERT INTO `ytuser` VALUES ('14', '214322', '3c9857798a0f7d6128d3c292102b5730', '2017-07-13 20:21:32');
INSERT INTO `ytuser` VALUES ('15', '12343214', '202cb962ac59075b964b07152d234b70', '2017-07-13 20:22:02');
INSERT INTO `ytuser` VALUES ('16', 'ewrewrewr', 'd41d8cd98f00b204e9800998ecf8427e', '2017-07-13 20:24:08');
INSERT INTO `ytuser` VALUES ('17', '13025131637', '5737c6ec2e0716f3d8a7a5c4e0de0d9a', '2017-07-13 20:29:47');
INSERT INTO `ytuser` VALUES ('18', '12321432432', 'd41d8cd98f00b204e9800998ecf8427e', '2017-07-14 15:34:18');
SET FOREIGN_KEY_CHECKS=1;
