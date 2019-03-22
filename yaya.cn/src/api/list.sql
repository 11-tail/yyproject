/*
Navicat MySQL Data Transfer

Source Server         : fyw1812
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : list

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-03-22 16:40:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for listdata
-- ----------------------------
DROP TABLE IF EXISTS `listdata`;
CREATE TABLE `listdata` (
  `id` int(8) NOT NULL,
  `images` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(8) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listdata
-- ----------------------------
INSERT INTO `listdata` VALUES ('1', 'list1-1.jpg', '小米9 全网通版 深空灰 8GB+128GB  【新品热销】全球首批量产骁龙855，索尼4800万超广角微距三摄，全球首款20W无线闪充,第5代极速屏下指纹解锁！', '2399');
INSERT INTO `listdata` VALUES ('2', 'list1-2.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '4567');
INSERT INTO `listdata` VALUES ('3', 'list1-3.jpg', 'Apple iPhone XR 全网通版 黑色 64GB  【全网热销】A12仿生！无线充电！官网最高直降1200！', '3212');
INSERT INTO `listdata` VALUES ('4', 'list1-4.jpg', '华为 Mate 20 全网通版 翡冷翠 6GB+128GB  【火热销售】购机享旧换新补贴！珍珠屏！海思麒麟980！专享免息分期！', '6755');
INSERT INTO `listdata` VALUES ('5', 'list1-5.jpg', 'Apple iPhone XR 全网通版 黑色 64GB  【全网热销】A12仿生！无线充电！官网最高直降1200！', '3256');
INSERT INTO `listdata` VALUES ('6', 'list1-6.jpg', '华为 Mate 20 全网通版 翡冷翠 6GB+128GB  【火热销售】购机享旧换新补贴！珍珠屏！海思麒麟980！专享免息分期！', '8542');
INSERT INTO `listdata` VALUES ('7', 'list1-7.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '2345');
INSERT INTO `listdata` VALUES ('8', 'list1-8.jpg', '小米9 全网通版 深空灰 8GB+128GB  【新品热销】全球首批量产骁龙855，索尼4800万超广角微距三摄，全球首款20W无线闪充,第5代极速屏下指纹解锁！', '4823');
INSERT INTO `listdata` VALUES ('9', 'list1-9.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '4783');
INSERT INTO `listdata` VALUES ('10', 'list1-10.jpg', '小米9 全网通版 深空灰 8GB+128GB  【新品热销】全球首批量产骁龙855，索尼4800万超广角微距三摄，全球首款20W无线闪充,第5代极速屏下指纹解锁！', '5793');
INSERT INTO `listdata` VALUES ('11', 'list1-11.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '7433');
INSERT INTO `listdata` VALUES ('12', 'list1-12.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '2123');
INSERT INTO `listdata` VALUES ('13', 'list1-13.jpg', '小米9 全网通版 深空灰 8GB+128GB  【新品热销】全球首批量产骁龙855，索尼4800万超广角微距三摄，全球首款20W无线闪充,第5代极速屏下指纹解锁！', '4683');
INSERT INTO `listdata` VALUES ('14', 'list1-14.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '2345');
INSERT INTO `listdata` VALUES ('15', 'list1-15.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '1577');
INSERT INTO `listdata` VALUES ('16', 'list1-16.jpg', '小米9 全网通版 深空灰 8GB+128GB  【新品热销】全球首批量产骁龙855，索尼4800万超广角微距三摄，全球首款20W无线闪充,第6代极速屏下指纹解锁！', '7432');
INSERT INTO `listdata` VALUES ('17', 'list1-17.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '7824');
INSERT INTO `listdata` VALUES ('18', 'list1-18.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '3652');
INSERT INTO `listdata` VALUES ('19', 'list1-19.jpg', '小米9 全网通版 深空灰 8GB+128GB  【新品热销】全球首批量产骁龙855，索尼4800万超广角微距三摄，全球首款20W无线闪充,第7代极速屏下指纹解锁！', '3245');
INSERT INTO `listdata` VALUES ('20', 'list1-20.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '7343');
INSERT INTO `listdata` VALUES ('21', 'list1-21.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '217');
INSERT INTO `listdata` VALUES ('22', 'list1-22.jpg', '小米9 全网通版 深空灰 8GB+128GB  【新品热销】全球首批量产骁龙855，索尼4800万超广角微距三摄，全球首款20W无线闪充,第8代极速屏下指纹解锁！', '3712');
INSERT INTO `listdata` VALUES ('23', 'list1-23.jpg', '三星 Galaxy S10 全网通版 皓玉白 8GB+128GB  【新品上市】3D超声波屏下指纹超感官全视屏,骁龙855,双卡双待,超清4K拍摄!', '1268');
SET FOREIGN_KEY_CHECKS=1;
