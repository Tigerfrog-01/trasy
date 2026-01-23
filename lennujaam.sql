-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Loomise aeg: Jaan 23, 2026 kell 11:29 EL
-- Serveri versioon: 10.4.32-MariaDB
-- PHP versioon: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Andmebaas: `lennujaam`
--

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `lennujaaminfo`
--

CREATE TABLE `lennujaaminfo` (
  `id` int(11) NOT NULL,
  `lennu_nr` int(11) DEFAULT 0,
  `kohtade_arv` int(11) DEFAULT 0,
  `reisjate_arv` int(11) DEFAULT 0,
  `ots` varchar(100) NOT NULL,
  `siht` varchar(100) NOT NULL,
  `valjumisaeg` datetime DEFAULT NULL,
  `lopetatud` tinyint(1) DEFAULT 0,
  `kestvus` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_estonian_ci;

--
-- Andmete tõmmistamine tabelile `lennujaaminfo`
--

INSERT INTO `lennujaaminfo` (`id`, `lennu_nr`, `kohtade_arv`, `reisjate_arv`, `ots`, `siht`, `valjumisaeg`, `lopetatud`, `kestvus`) VALUES
(1, 1, 50, 50, 'Tallinn', 'Krakow', '2026-01-23 11:46:31', 0, 2);

--
-- Indeksid tõmmistatud tabelitele
--

--
-- Indeksid tabelile `lennujaaminfo`
--
ALTER TABLE `lennujaaminfo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT tõmmistatud tabelitele
--

--
-- AUTO_INCREMENT tabelile `lennujaaminfo`
--
ALTER TABLE `lennujaaminfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
