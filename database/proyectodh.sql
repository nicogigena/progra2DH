-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2020 a las 01:02:08
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
USE `proyectodh2`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `texto` text DEFAULT NULL,
  `creacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `post_id`, `usuario_id`, `texto`, `creacion`) VALUES
(1, 3, 1, 'Muy buenooo', '2020-11-15 23:05:55'),
(2, 1, 5, 'Me encanta!!', '2020-11-15 23:05:55'),
(3, 10, 1, 'Te extrañoooo', '2020-11-15 23:05:55'),
(4, 9, 2, 'Muy inspirador', '2020-11-15 23:05:55'),
(5, 2, 4, 'Que envidia', '2020-11-15 23:05:55'),
(6, 1, 7, 'Muy buena foto!', '2020-11-15 23:05:55'),
(7, 7, 2, 'Que alegría me transmite este post', '2020-11-15 23:05:55'),
(8, 3, 4, 'Buenisima la foto', '2020-11-15 23:05:55'),
(9, 8, 3, 'Supeeeeer', '2020-11-15 23:05:55'),
(10, 9, 5, 'Estan muy grandes los chicos', '2020-11-15 23:05:55'),
(11, 4, 1, 'Cuando nos vemosssss', '2020-11-15 23:05:55'),
(12, 3, 6, 'Que gracioso', '2020-11-15 23:05:55'),
(13, 9, 6, 'tremendooo', '2020-11-15 23:05:55'),
(14, 3, 3, 'que lindoss', '2020-11-15 23:05:55'),
(15, 4, 5, 'se te ve muy bien', '2020-11-15 23:05:55'),
(16, 8, 2, 'tremenda foto', '2020-11-15 23:05:55'),
(17, 6, 3, 'wow', '2020-11-15 23:05:55'),
(18, 2, 4, 'opino igual', '2020-11-15 23:05:55'),
(19, 1, 5, 'te quieroo', '2020-11-15 23:05:55'),
(20, 12, 1, 'te extraño amigo', '2020-11-15 23:05:55'),
(21, 9, 2, 'que linda familia', '2020-11-15 23:05:55'),
(22, 7, 7, 'que linda energía transmitis con tus posteos', '2020-11-15 23:05:55'),
(23, 2, 7, 'WOOOWWW', '2020-11-15 23:05:55'),
(24, 10, 4, 'no lo supero!!', '2020-11-15 23:05:55'),
(25, 1, 2, 'jajajaj', '2020-11-15 23:05:55'),
(61, 1, 3, 'jajaj tremendo', '2020-11-15 23:05:55'),
(62, 10, 4, 'cuando nos vemoss?', '2020-11-15 23:05:55'),
(63, 5, 5, 'y pedro?? mandale un beso enorme', '2020-11-15 23:05:55'),
(64, 6, 7, 'cuando volves amiga?', '2020-11-15 23:05:55'),
(65, 3, 1, 'tremendo pie', '2020-11-15 23:05:55'),
(66, 10, 5, 'que bueno estuvo tu cumpleaños el otro día!!', '2020-11-15 23:05:55'),
(67, 7, 6, 'Donde andas???', '2020-11-15 23:05:55'),
(68, 8, 2, 'de donde es la foto?', '2020-11-15 23:05:55'),
(69, 3, 3, 'que lindoo', '2020-11-15 23:05:55'),
(70, 6, 1, 'que inspirador, se te ve bien', '2020-11-15 23:05:55'),
(71, 2, 3, 'que lindo recuerdoo', '2020-11-15 23:05:55'),
(72, 4, 7, 'que buenos tiempos', '2020-11-15 23:05:55'),
(73, 9, 2, 'me alegra verte bien', '2020-11-15 23:05:55'),
(74, 10, 2, 'LA ROMPISTE', '2020-11-15 23:05:55'),
(75, 7, 1, 'Me encantó', '2020-11-15 23:05:55'),
(76, 12, 2, 'Que bien la pasamos el otro dia!', '2020-11-15 23:05:55'),
(77, 1, 3, 'JAJAJA', '2020-11-15 23:05:55'),
(78, 4, 4, ':) :) :)', '2020-11-15 23:05:55'),
(79, 6, 1, '<3 <3 <3', '2020-11-15 23:05:55'),
(80, 5, 5, 'Que recuerdos!', '2020-11-15 23:05:55'),
(82, 11, 28, 'Ojala pudiera dibujar asi!!!', '2020-11-15 23:05:55'),
(83, 11, 4, 'que lindo!!!', '2020-11-15 23:05:55'),
(86, 11, 6, 'me encanto!!', '2020-11-15 23:05:55'),
(87, 12, 8, 'Que tentador se ve eso', '2020-11-15 23:05:55'),
(88, 12, 7, 'Guardame un poco!', '2020-11-15 23:05:55'),
(89, 5, 28, 'Que bien que estas!!!', '2020-11-15 23:05:55'),
(90, 6, 31, '1234', '2020-11-15 23:05:55'),
(91, 14, 31, 'Sisi', '2020-11-15 23:05:55'),
(92, 6, 34, '22333', '2020-11-15 23:05:55'),
(93, 11, 32, 'sdss', '2020-11-15 23:05:55'),
(98, 6, 28, '332', '2020-11-15 23:05:55'),
(99, 6, 28, 'fsaa', '2020-11-15 23:05:55'),
(100, 6, 28, 'xaa', '2020-11-15 23:05:55'),
(101, 6, 28, 'ci', '2020-11-15 23:05:55'),
(102, 14, 36, 'hola', '2020-11-15 23:05:55'),
(103, 14, 36, 'hola', '2020-11-16 02:17:37'),
(104, 14, 36, 'hola', '2020-11-16 02:17:37'),
(105, 14, 36, 'Hola x2', '2020-11-16 02:17:40'),
(116, 14, 36, '9', '2020-11-16 19:16:32'),
(117, 14, 36, '13', '2020-11-16 19:16:35'),
(118, 14, 36, '1', '2020-11-16 19:16:37'),
(119, 14, 36, '1', '2020-11-16 19:16:44'),
(120, 14, 36, '5555555555', '2020-11-16 19:16:48'),
(121, 14, 36, 'dsada', '2020-11-16 19:17:46'),
(122, 14, 36, '231', '2020-11-16 19:19:06'),
(123, 14, 36, '321', '2020-11-16 19:19:07'),
(124, 14, 36, 'dsa', '2020-11-16 19:19:19'),
(125, 14, 36, 'dsadsa', '2020-11-16 19:19:22'),
(126, 13, 36, 'dsa', '2020-11-16 19:21:00'),
(127, 13, 36, 'dsa', '2020-11-16 19:21:02'),
(128, 13, 36, 'dsa', '2020-11-16 19:21:04'),
(129, 13, 36, 'das', '2020-11-16 19:21:05'),
(130, 13, 36, 'das', '2020-11-16 19:21:06'),
(131, 13, 36, 'dsa', '2020-11-16 19:21:09'),
(132, 13, 36, 'dddd', '2020-11-16 19:21:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postear`
--

CREATE TABLE `postear` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `url` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `ubicacion` varchar(45) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `postear`
--

INSERT INTO `postear` (`id`, `usuario_id`, `url`, `descripcion`, `creacion`, `ubicacion`, `updated_at`) VALUES
(1, 1, 'https://data.whicdn.com/images/348979016/original.jpg', 'Vivir de las apariencias te hace esclavo de los demás.', '2020-09-30 09:00:00', 'Recoleta', '2020-11-15 10:16:57'),
(2, 6, 'https://data.whicdn.com/images/349315386/original.jpg', 'Los obstáculos en la vida nos hacen madurar, los éxitos nos hacen reflexionar, y los fracasos nos hacen crecer.', '2020-08-17 19:00:00', 'Florianopolis', '2020-11-15 10:16:57'),
(3, 5, 'https://data.whicdn.com/images/341368238/original.jpg', '¿Tomas algo para ser feliz? Sí, decisiones.', '2020-02-10 15:30:00', 'Cape Town', '2020-11-15 10:16:57'),
(4, 3, 'https://i.pinimg.com/564x/ec/3f/71/ec3f710205fc1fd37253d8d350a8513e.jpg', 'La felicidad es como la gripe: un estado que se transmite, se contagia y se propaga.', '2020-02-28 15:30:00', 'California', '2020-11-15 10:16:57'),
(5, 2, 'https://data.whicdn.com/images/350239092/original.jpg', 'No le llames sueño, llámalo plan', '2020-04-21 11:10:00', 'Four Seasons Hotel', '2020-11-15 10:16:57'),
(6, 3, 'https://data.whicdn.com/images/350233690/original.jpg', 'Si no deseas mucho, hasta las cosas pequeñas te parecerán grandes.', '2020-10-21 11:11:00', 'CABA', '2020-11-15 10:16:57'),
(7, 7, 'https://data.whicdn.com/images/350241223/original.jpg', 'Los amigos son la familia que tú eliges.', '2020-08-01 19:30:00', 'La Cumbre', '2020-11-15 10:16:57'),
(8, 4, 'https://data.whicdn.com/images/214087137/original.jpg', 'Una amiga es la persona que sabe todo de ti y aun así le gustas.', '2019-07-01 19:30:00', 'San Carlos de Bariloche', '2020-11-15 10:16:57'),
(9, 3, 'https://data.whicdn.com/images/349585404/original.jpg', 'Disfrutando en familia', '2019-10-12 16:30:00', 'En Casa', '2020-11-15 10:16:57'),
(10, 5, 'https://data.whicdn.com/images/350238176/original.jpg', 'Sé sincero con el mundo (y contigo mismo), entrega tu corazón a quien sepa apreciarlo y vive cada día como si fuese el último.', '2016-10-30 16:30:00', 'En el Paraíso', '2020-11-15 10:16:57'),
(11, 8, 'https://data.whicdn.com/images/321478132/original.png', 'Un poco de lo que hago en mi tiempo libre', '2020-08-01 19:30:00', 'San Isidro', '2020-11-15 10:16:57'),
(12, 28, 'https://data.whicdn.com/images/350377432/original.jpg', 'Haciendo lo que más me gusta', '2019-09-12 17:30:00', 'Rosario, Santa Fé', '2020-11-15 10:16:57'),
(13, 31, 'https://imagenes.elpais.com/resizer/4njp39U-ES9Z3t2Mt0pIp7a-5xY=/768x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/YZTI72Q5CG7RMKSUHCLFKTNQSU.jpg', 'Calle 13', '2020-11-12 21:40:36', 'CABA     ', '2020-11-15 10:16:57'),
(14, 31, 'https://elpais.com/cultura/imagenes/2020/02/28/ruta_norteamericana/1582915799_640199_1582918034_noticia_fotograma.jpg', 'Residente cantando, me encanta', '2020-11-12 21:59:06', 'CUBA', '2020-11-15 10:16:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `pregunta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`) VALUES
(2, '¿Donde nació tu madre?'),
(3, '¿Donde terminaste tus estudios primarios?'),
(4, '¿En qué ciudad se conocieron tus padres?'),
(5, '¿Nombre de tu primer mascota?'),
(6, '¿Nombre de tu primo menor?'),
(1, '¿Patente de tu primer vehículo?');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(45) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `nacimiento` datetime NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `cp` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `fotoPerfil` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `seguidos` int(11) NOT NULL,
  `seguidores` int(11) NOT NULL,
  `posts` int(11) NOT NULL,
  `pregunta_id` int(11) NOT NULL,
  `pregunta_res` varchar(255) DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contraseña`, `nacimiento`, `direccion`, `ciudad`, `cp`, `nombre`, `apellido`, `fotoPerfil`, `created_at`, `seguidos`, `seguidores`, `posts`, `pregunta_id`, `pregunta_res`, `updated_at`) VALUES
(1, 'marianosuarez@gmail.com', 'perrito23', '1990-03-23 00:00:00', 'Amenabar 2342', 'CABA', 1426, 'Mariano', 'Suarez', 'https://data.whicdn.com/images/350376362/original.jpg', NULL, 23, 2345, 20, 1, NULL, '2020-11-15 10:15:39'),
(2, 'pablorodriguez@hotmail.com', 'pablo2003', '2003-10-15 00:00:00', 'Corrientes 932 1A', 'CABA', 1423, 'Pablo', 'Rodriguez', 'https://data.whicdn.com/images/40650929/original.jpg', NULL, 690, 678, 6, 1, NULL, '2020-11-15 10:15:39'),
(3, 'virginialopez@gmail.com', 'estrellita10', '1970-01-12 00:00:00', 'Peron 992', 'Azul', 1993, 'Virginia', 'Lopez', 'https://data.whicdn.com/images/350088764/original.png', NULL, 1234, 789, 9, 1, NULL, '2020-11-15 10:15:39'),
(4, 'camilagmansilla@gmail.com', 'cocalight', '1999-04-09 00:00:00', 'Illia 123', 'Rosario', 2332, 'Camila', 'Mansilla', 'https://data.whicdn.com/avatars/39612274/profile.png?t=1601832770', NULL, 2345, 6789, 23, 1, NULL, '2020-11-15 10:15:39'),
(5, 'florenciagonzalez@yahoo.com.ar', 'corona', '1989-07-10 00:00:00', '9 de Julio 1999', 'Salta', 932, 'Florencia', 'Gonzalez', 'https://data.whicdn.com/images/313692118/original.jpg', NULL, 456, 45, 104, 1, NULL, '2020-11-15 10:15:39'),
(6, 'nicozabaleta@gmail.com', 'gatito10', '2009-10-10 00:00:00', 'Av. Gascon 554', 'Montevideo', 9992, 'Nicolas', 'Zabaleta', 'https://data.whicdn.com/images/196402173/original.jpg', NULL, 234, 1234, 8, 1, NULL, '2020-11-15 10:15:39'),
(7, 'miafules@gmail.com', 'playa123', '1971-01-01 00:00:00', 'Av. Cordoba 232 2C', 'Corrientes', 892, 'Mia', 'Fules', 'https://data.whicdn.com/images/132995564/original.jpg', NULL, 67, 5678, 256, 1, NULL, '2020-11-15 10:15:39'),
(8, 'luisa@gmail.com', 'nutella2020', '2001-03-04 00:00:00', 'Av. Libertador 1847', 'CABA', 1010, 'Luisa', 'Carranza', 'https://data.whicdn.com/images/288144525/original.jpg', NULL, 456, 7090, 98, 1, NULL, '2020-11-15 10:15:39'),
(28, 'luis@gmail.com', 'luisito', '1989-07-10 00:00:00', 'Av. Santa Fe 1243', 'CABA', 952, 'Luis', 'Peralta', 'https://data.whicdn.com/images/322495069/original.jpg', '2020-11-09 15:39:49', 567, 6549, 687, 1, NULL, '2020-11-15 10:15:39'),
(29, 'jazmincavanagh@hotmail.com', '$2a$10$5KhEbpEm2eF.ZfiwH.oUf.uFIfSex8Ll.rcISQ3niQ3bQnAe4fwMG', '2020-11-13 00:00:00', 'alto peru 1108', 'san isidro', 1643, 'lula', 'salas', '', '2020-11-10 15:06:26', 0, 0, 0, 1, NULL, '2020-11-15 10:15:39'),
(31, 'nicogigena99@gmail.com', '$2a$10$5slvqb1pifhlk3EOSqzcY.HbIwqfvQi1NXa7WlWIO1My3hT464e2S', '2020-11-05 00:00:00', '1426', 'CABA', 1426, 'Nicolas', 'Gigena', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Gates_June_2015.png', '2020-11-12 00:40:01', 0, 0, 0, 2, 'Salta', '2020-11-15 10:15:39'),
(32, 'nicogigena991@gmail.com', '$2a$10$QWKgkfP38qZrtF9Tk7ra7uEbuQViySrwqMbevJlE00OE3bdZBq72G', '2020-11-13 00:00:00', '1426', 'CABA', 1426, 'Nicolas', 'Gigena', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Gates_June_2015.png', '2020-11-12 01:39:44', 0, 0, 0, 5, 'Mario', '2020-11-15 10:15:39'),
(34, '123456@gmail.com', '$2a$10$hxQJe9K5omZi6aS35yeNTemksTuqu8hvfahTWz.60LD9SkPtccc7y', '2020-11-25 00:00:00', 'Virrey Arredondo 2462', 'CABA', 1426, 'Nicolas', 'Gigena', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Gates_June_2015.png', '2020-11-12 23:29:45', 0, 0, 0, 5, '$2a$10$o62gJhRA7CBzXYy.aAylP.dnnz91yn6NFYP.z5sB3lT9FPnHMXJey', '2020-11-15 10:15:39'),
(36, '1234@gmail.com', '$2a$10$4FuDvSEOJjSZ/0IPDzzcK.fNPm1ckIvpq28LTuNgAyPxCWmaGbDKO', '2020-11-19 00:00:00', '1425', 'CABA', 1234, 'Nicolas', 'Gigena', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Gates_June_2015.png', '2020-11-13 16:29:34', 0, 0, 0, 3, '$2a$10$EqgdhG3DNVXsxSklvinIJO10dC/Kl0fJ.KuVabK/1fnBx4pQkvq9C', '2020-11-16 20:38:02'),
(37, 'nicogigena9912@gmail.com', '$2a$10$Fwvazr0RfrZPjcjrojXO3ugFQfdY9Ms1RAdjhL4CxRyw7uDhhBhlm', '2020-11-11 00:00:00', '1426', 'CABA', 1426, 'Nicolas', 'Gigena', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Gates_June_2015.png', '2020-11-16 02:14:24', 0, 0, 0, 2, '$2a$10$nDYYMUOIjrl/V7VlDPSDKOV/0DpkZ697jPR/1GY/B89AGJg3S4LWi', '2020-11-16 02:14:24');

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
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pregunta` (`pregunta`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `pregunta_ibfk_1` (`pregunta_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT de la tabla `postear`
--
ALTER TABLE `postear`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

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
  ADD CONSTRAINT `postear_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`pregunta_id`) REFERENCES `preguntas` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`pregunta_id`) REFERENCES `preguntas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
