-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 22/04/2022 às 11:28
-- Versão do servidor: 10.4.24-MariaDB
-- Versão do PHP: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Banco de dados: `joguinho2`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `players`
--

CREATE TABLE `players` (
  `secretWord` varchar(14) DEFAULT NULL,
  `wordPass` varchar(30) NOT NULL,
  `gameAttempts` int(11) DEFAULT NULL,
  `userContent` varchar(620) DEFAULT NULL,
  `showWord` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `players`
--

INSERT INTO `players` (`secretWord`, `wordPass`, `gameAttempts`, `userContent`, `showWord`) VALUES
('CARRO', 'CODIGA', 3, 'Quero ver se esse conteúdo está mesmo escondido hein!', 1),
('PORRA', 'CODIGB', 3, 'sem conteúdo para voce', 0),
('JULHO', 'LOLO', 6, 'kjlkmkjlkkjhkljkljklhkkljkl', 0),
('POLTRONA', 'MOOD', 9, 'mood de um setup de valor', 1),
('PALHACO', 'PALHA', 4, 'testando', 1),
('RS', 'POLLY', 3, 'olha sóoooooooooooooooooooooo', 0),
('CARALHINHO', 'RSRS', 9, 'como tu adivinhou isso manoooooooooooooooooo', 1),
('CAMPONES', 'SOMPASS', 8, 'leme c', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`wordPass`);
COMMIT;
