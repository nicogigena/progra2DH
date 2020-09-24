-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-09-2020 a las 22:45:32
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectodh`
--
CREATE DATABASE IF NOT EXISTS `proyectodh` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyectodh`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `texto` text DEFAULT NULL,
  `creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `post_id`, `usuario_id`, `texto`, `creacion`) VALUES
(1, 3, 1, 'Muy buenooo', '0000-00-00 00:00:00'),
(2, 1, 5, 'Me encanta!!', '0000-00-00 00:00:00'),
(3, 10, 1, 'Te extrañoooo', '0000-00-00 00:00:00'),
(4, 9, 2, 'Muy inspirador', '0000-00-00 00:00:00'),
(5, 2, 4, 'Que envidia', '0000-00-00 00:00:00'),
(6, 1, 7, 'Muy buena foto!', '0000-00-00 00:00:00'),
(7, 5, 2, 'Que alegría me transmite este post', '0000-00-00 00:00:00'),
(8, 3, 4, 'Buenisima la foto', '0000-00-00 00:00:00'),
(9, 9, 3, 'Supeeeeer', '0000-00-00 00:00:00'),
(10, 7, 5, 'Estan muy grandes los chicos', '0000-00-00 00:00:00'),
(11, 4, 1, 'Cuando nos vemosssss', '0000-00-00 00:00:00'),
(12, 3, 6, 'Que gracioso', '0000-00-00 00:00:00'),
(13, 9, 6, 'tremendooo', '0000-00-00 00:00:00'),
(14, 3, 3, 'que lindoss', '0000-00-00 00:00:00'),
(15, 4, 5, 'se te ve muy bien', '0000-00-00 00:00:00'),
(16, 8, 2, 'tremenda foto', '0000-00-00 00:00:00'),
(17, 6, 3, 'wow', '0000-00-00 00:00:00'),
(18, 2, 4, 'opino igual', '0000-00-00 00:00:00'),
(19, 1, 5, 'te quieroo', '0000-00-00 00:00:00'),
(20, 8, 1, 'te extraño amigo', '0000-00-00 00:00:00'),
(21, 5, 2, 'que linda familia', '0000-00-00 00:00:00'),
(22, 7, 7, 'que linda energía transmitis con tus posteos', '0000-00-00 00:00:00'),
(23, 2, 7, 'WOOOWWW', '0000-00-00 00:00:00'),
(24, 10, 4, 'no lo supero!!', '0000-00-00 00:00:00'),
(25, 5, 2, 'jajajaj', '0000-00-00 00:00:00'),
(61, 1, 3, 'jajaj tremendo', '0000-00-00 00:00:00'),
(62, 10, 4, 'cuando nos vemoss?', '0000-00-00 00:00:00'),
(63, 5, 5, 'y pedro?? mandale un beso enorme', '0000-00-00 00:00:00'),
(64, 6, 7, 'cuando volves amiga?', '0000-00-00 00:00:00'),
(65, 3, 1, 'tremendo pie', '0000-00-00 00:00:00'),
(66, 10, 5, 'que bueno estuvo tu cumpleaños el otro día!!', '0000-00-00 00:00:00'),
(67, 7, 6, 'Donde andas???', '0000-00-00 00:00:00'),
(68, 8, 2, 'de donde es la foto?', '0000-00-00 00:00:00'),
(69, 3, 3, 'que lindoo', '0000-00-00 00:00:00'),
(70, 6, 1, 'que inspirador, se te ve bien', '0000-00-00 00:00:00'),
(71, 2, 3, 'que lindo recuerdoo', '0000-00-00 00:00:00'),
(72, 4, 7, 'que buenos tiempos', '0000-00-00 00:00:00'),
(73, 9, 2, 'me alegra verte bien', '0000-00-00 00:00:00'),
(74, 9, 2, 'LA ROMPISTE', '0000-00-00 00:00:00'),
(75, 7, 1, 'Me encantó', '0000-00-00 00:00:00'),
(76, 8, 2, 'Que bien la pasamos el otro dia!', '0000-00-00 00:00:00'),
(77, 1, 3, 'JAJAJA', '0000-00-00 00:00:00'),
(78, 4, 4, ':) :) :)', '0000-00-00 00:00:00'),
(79, 6, 1, '<3 <3 <3', '0000-00-00 00:00:00'),
(80, 5, 5, 'Que recuerdos!', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postear`
--

CREATE TABLE `postear` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `url` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `postear`
--

INSERT INTO `postear` (`id`, `usuario_id`, `url`, `descripcion`, `creacion`) VALUES
(1, 1, 'https://data.whicdn.com/images/348979016/original.jpg', 'Vivir de las apariencias te hace esclavo de los demás.', '2020-09-30 09:00:00'),
(2, 6, 'https://data.whicdn.com/images/348980736/original.jpg', 'Los obstáculos en la vida nos hacen madurar, los éxitos nos hacen reflexionar, y los fracasos nos hacen crecer.', '2020-08-17 19:00:00'),
(3, 5, 'https://data.whicdn.com/images/151740065/original.png', '¿Tomas algo para ser feliz? Sí, decisiones.', '2020-02-10 15:30:00'),
(4, 2, 'https://i.pinimg.com/564x/ec/3f/71/ec3f710205fc1fd37253d8d350a8513e.jpg', 'La felicidad es como la gripe: un estado que se transmite, se contagia y se propaga.', '2020-02-28 15:30:00'),
(5, 2, 'https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/08/07/Recortada/img_mbigas_20200807-113356_im', 'No le llames sueño, llámalo plan', '2020-04-21 11:10:00'),
(6, 3, 'https://www.euroresidentes.com/empresa/exito-empresarial/wp-content/uploads/sites/15/2013/04/ser-pro', 'Si no deseas mucho, hasta las cosas pequeñas te parecerán grandes.', '2020-12-21 11:11:00'),
(7, 7, 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/12/25/Recortada/img_ellopart_20181224-120211_', 'Los amigos son la familia que tú eliges.', '2020-08-01 19:30:00'),
(8, 2, 'https://www.esan.edu.pe/apuntes-empresariales/2016/06/28/empresafamiliar_principal.jpg', 'Una amiga es la persona que sabe todo de ti y aun así le gustas.', '2019-07-01 19:30:00'),
(9, 3, 'https://i.pinimg.com/originals/ce/bb/70/cebb70f0abad0515a8f3fbd963a40251.jpg', 'Disfrutando en familia', '2019-10-12 16:30:00'),
(10, 5, 'https://www.dw.com/image/54990745_302.jpg', 'Sé sincero con el mundo (y contigo mismo), entrega tu corazón a quien sepa apreciarlo y vive cada día como si fuese el último.', '2016-11-30 16:30:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `nacimiento` datetime NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `cp` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contraseña`, `nacimiento`, `direccion`, `ciudad`, `cp`, `nombre`, `apellido`) VALUES
(1, 'marianosuarez@gmail.com', 'perrito23', '1990-03-23 00:00:00', 'Amenabar 2342', 'CABA', 1426, 'Mariano', 'Suarez'),
(2, 'pablorodriguez@hotmail.com', 'pablo2003', '2003-10-15 00:00:00', 'Corrientes 932 1A', 'CABA', 1423, 'Pablo', 'Rodriguez'),
(3, 'virginialopez@gmail.com', 'estrellita10', '1970-01-12 00:00:00', 'Peron 992', 'Azul', 1993, 'Virginia', 'Lopez'),
(4, 'camilagmansilla@gmail.com', 'cocalight', '1999-04-09 00:00:00', 'Illia 123', 'Rosario', 2332, 'Camila', 'Mansilla'),
(5, 'florenciagonzalez@yahoo.com.ar', 'corona', '1989-07-10 00:00:00', '9 de Julio 1999', 'Salta', 932, 'Florencia', 'Gonzalez'),
(6, 'nicozabaleta@gmail.com', 'gatito10', '2009-10-10 00:00:00', 'Av. Gascon 554', 'Montevideo', 9992, 'Nicolas', 'Zabaleta'),
(7, 'miafules@gmail.com', 'playa123', '1971-01-01 00:00:00', 'Av. Cordoba 232 2C', 'Corrientes', 892, 'Mia', 'Fules');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `postear`
--
ALTER TABLE `postear`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `postear`
--
ALTER TABLE `postear`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `postear` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `postear`
--
ALTER TABLE `postear`
  ADD CONSTRAINT `postear_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
