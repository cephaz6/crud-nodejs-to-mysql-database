-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2022 at 09:04 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crudnodejs_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `unique_id` varchar(10) NOT NULL DEFAULT 'Nsi2pOSQxy',
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `comments` text NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'ACTIVE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `unique_id`, `firstname`, `lastname`, `email`, `phone`, `comments`, `status`) VALUES
(1, 'zsi2pOSQxy', 'Tindax', 'Technologies', 'info@tindaxtech.com', '07015039823', 'Digital Agency Company, Nigeria', 'ACTIVE'),
(2, 'md32pOSQxy', 'Cephas', 'Oselumese', 'cephas@tindaxtech.com', '08103070639', 'Web development professional', 'ACTIVE'),
(3, 'Yhspo0921z', 'Randy', 'Braitwaite', 'randyb@gmail.com', '2341343423423', 'Randy the funny guy', 'REMOVED\r\n'),
(13, '203sdabsda', 'John ', 'Adam Lewison', 'johnlewi@gmail.com', '1203123233', 'The Story of john lwesoin ', 'ACTIVE'),
(16, 'NsiposSQxy', 'Adam', 'Levine', 'levineadin@sa.com', '1231239923', 'Lorem descriotp  itj aksd', 'ACTIVE'),
(20, 'Nsi2pO11xc', 'Sesan', 'Altims', 'sesanmahoo@gmail.com', '1200239921', 'the boy looked just like him', 'ACTIVE'),
(22, '539ykntofp', 'Moraki', 'Linkerson', 'linkersonmor@outlook.com', '01298323', 'Magnifico', 'DEACTIVATED');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
