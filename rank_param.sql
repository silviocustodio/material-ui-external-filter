-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 13, 2018 at 02:23 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wint`
--

-- --------------------------------------------------------

--
-- Table structure for table `rank_param`
--

DROP TABLE IF EXISTS `rank_param`;
CREATE TABLE IF NOT EXISTS `rank_param` (
  `ts_netw_st` varchar(50) DEFAULT NULL,
  `ts_netw_end` varchar(50) DEFAULT NULL,
  `IPv6` varchar(30) DEFAULT NULL,
  `IPv6_parent` varchar(30) DEFAULT NULL,
  `score_link` float DEFAULT NULL,
  `hops_score` float DEFAULT NULL,
  `rank_score` float DEFAULT NULL,
  `signal_avg_score` float DEFAULT NULL,
  `signal_var_score` float DEFAULT NULL,
  `noacks_score` float DEFAULT NULL,
  `latency_score` float DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rank_param`
--

INSERT INTO `rank_param` (`ts_netw_st`, `ts_netw_end`, `IPv6`, `IPv6_parent`, `score_link`, `hops_score`, `rank_score`, `signal_avg_score`, `signal_var_score`, `noacks_score`, `latency_score`) VALUES
('2018-03-15 01:00:01', '2018-03-15 01:00:18', 'fe80::0102:0304:0506:0002', 'fe80::0102:0304:0506:0001', 8.1, 10, 10, 9.93, 0, 10, 8.66),
('2018-03-15 01:00:01', '2018-03-15 01:00:18', 'fe80::0102:0304:0506:0003', 'fe80::0102:0304:0506:0001', 6.93, 10, 10, 0.08, 2.89, 10, 8.64),
('2018-03-15 01:00:01', '2018-03-15 01:00:18', 'fe80::0102:0304:0506:0004', 'fe80::0102:0304:0506:0002', 7.74, 8.7, 10, 10, 0, 10, 7.76),
('2018-03-15 01:00:01', '2018-03-15 01:00:18', 'fe80::0102:0304:0506:0002', 'fe80::0102:0304:0506:0001', 7.72, 10, 10, 9.93, 0, 10, 8.66),
('2018-03-15 01:00:01', '2018-03-15 01:00:18', 'fe80::0102:0304:0506:0003', 'fe80::0102:0304:0506:0001', 6.32, 10, 10, 0.08, 2.89, 10, 8.64),
('2018-03-15 01:00:01', '2018-03-15 01:00:18', 'fe80::0102:0304:0506:0004', 'fe80::0102:0304:0506:0002', 7.55, 8.7, 10, 10, 0, 10, 7.76);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
