-- MySQL dump 10.13  Distrib 5.6.35, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: visata
-- ------------------------------------------------------
-- Server version	5.6.35-1+deb.sury.org~trusty+0.1

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
-- Table structure for table `visata`
--

DROP TABLE IF EXISTS `visata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visata` (
  `name` varchar(50) DEFAULT NULL,
  `thickness` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `thick_real` int(11) DEFAULT NULL,
  `width_real` int(11) DEFAULT NULL,
  `length_real` int(11) DEFAULT NULL,
  `size_m3` int(11) DEFAULT NULL,
  `push_price` int(11) DEFAULT NULL,
  `deffect_procent` int(11) DEFAULT NULL,
  `deffect_cost` int(11) DEFAULT NULL,
  `logistic` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visata`
--

LOCK TABLES `visata` WRITE;
/*!40000 ALTER TABLE `visata` DISABLE KEYS */;
INSERT INTO `visata` VALUES ('97x97x4000 | brusas',97,97,4000,91,91,4000,27,125,0,0,500,1),('75x75x4000 | brusas',75,75,4000,70,70,4000,27,125,0,0,500,2),('16x100x4000 | lentele',16,100,4000,14,95,4000,27,130,0,0,500,3),('19x100x4000 | lentele',19,100,4000,17,95,4000,27,95,0,0,450,4),('25x100x4000 | lentele',25,100,4000,22,95,4000,27,95,0,0,450,5);
/*!40000 ALTER TABLE `visata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-13 16:44:39
