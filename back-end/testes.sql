-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 18-Abr-2022 às 06:32
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sitezin`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `testes`
--

DROP TABLE IF EXISTS `testes`;
CREATE TABLE IF NOT EXISTS `testes` (
  `teste` varchar(40) DEFAULT NULL,
  `cod` varchar(40) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `testes`
--

INSERT INTO `testes` (`teste`, `cod`) VALUES
('batata', '123'),
('1234', '12345'),
('tomate', '4321'),
('gabi', '2'),
('malei', '1'),
('alface', '555'),
('tiro', '222');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
