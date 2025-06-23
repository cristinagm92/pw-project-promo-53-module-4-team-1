USE `defaultdb`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: adalabpromo53team-01-proyectoteam1-03bb.i.aivencloud.com    Database: defaultdb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `idproject` int NOT NULL AUTO_INCREMENT,
  `name` varchar(145) NOT NULL,
  `slogan` varchar(200) NOT NULL,
  `repo` text NOT NULL,
  `demo` text NOT NULL,
  `technologies` varchar(200) NOT NULL,
  `desc` longtext NOT NULL,
  `photo` longtext,
  PRIMARY KEY (`idproject`),
  UNIQUE KEY `idproject_UNIQUE` (`idproject`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'GreenMarket','El futuro del consumo responsable','https://github.com/usuario/greenmarket','https://greenmarket.demo.com','React, Node.js, MongoDB, Tailwind CSS','Marketplace online enfocado en productos ecológicos, con integración de pagos y recomendaciones personalizadas.','https://www.canva.com/design/DAGqsYpCFOE/ED7VkGP92mYkHVIpK1CXBw/view?utm_content=DAGqsYpCFOE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e1867cc57'),(2,'TravelSync','Tu viaje, siempre sincronizado','https://github.com/usuario/travelsync','https://travelsync.demo.com','Next.js, Supabase, Styled Components','Aplicación colaborativa para planear viajes en grupo, compartir itinerarios y coordinar presupuestos.','https://www.canva.com/design/DAGqsVC1kCQ/2O3E6kbLlPQDSLvjVXq6HA/view?utm_content=DAGqsVC1kCQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h20bbdc7360'),(3,'Code4All','Aprende a programar desde cero','https://github.com/usuario/code4all','https://code4all.demo.com','Angular, Node.js, PostgreSQL','Plataforma educativa con cursos interactivos de programación y foros colaborativos.','https://www.canva.com/design/DAGqsTNFz8k/p0QDT3rWvuqrGMIWwmDebQ/view?utm_content=DAGqsTNFz8k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h738b86fcc3'),(4,'WellnessApp','Cuida tu mente y tu cuerpo','https://github.com/usuario/wellnessapp','https://wellnessapp.demo.com','Vue.js, Firebase, Sass','App móvil para el seguimiento de hábitos saludables, ejercicios de meditación y rutinas personalizadas.','https://www.canva.com/design/DAGqsdkuEQA/2Q18Mc2M61whEeRgszkzOQ/view?utm_content=DAGqsdkuEQA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0e8b59224f');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-18 11:15:22
