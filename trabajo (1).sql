-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-04-2021 a las 16:52:47
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trabajo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Frutas', 'frutas', 1, 0, '2021-04-19 09:56:53', '2021-04-19 09:56:53'),
(2, 'electrodomesticos', 'hornos, heladeras, microondas, tostadoras, maquinas de cafe', 1, 0, '2021-04-19 11:09:46', '2021-04-19 11:09:46'),
(3, 'electro', 'TVs, computadoras, parlantes', 0, 1, '2021-04-19 11:16:12', '2021-04-19 11:18:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `confirmacionCorreo` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 0,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `username`, `pass`, `mail`, `confirmacionCorreo`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'jon2', '7c222fb2927d828af22f592134e8932480637c0d', '', 'fa3c95a1-b1ab-4aee-bb90-4747f3500e07', 1, 0, '2021-04-21 11:28:29', '2021-04-28 09:37:45'),
(2, 'leomessi', '7c222fb2927d828af22f592134e8932480637c0d', '', 'e1b0e1e5-1a1b-4d4c-9af2-4d690ba2c679', 1, 0, '2021-04-21 11:40:38', '2021-04-28 09:38:05'),
(3, 'jon', '7c222fb2927d828af22f592134e8932480637c0d', 'jongibaut@gmail.com', '1e4b6cf2-23ce-4af8-a70c-ae9d47a9cab8', 1, 0, '2021-04-28 10:11:35', '2021-04-28 11:46:19'),
(4, 'jon3', '7c222fb2927d828af22f592134e8932480637c0d', 'jongibaut@gmail.com', 'f1595f8e-183f-4feb-97b7-138460979b24', 0, 0, '2021-04-28 11:21:25', '2021-04-28 11:21:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `id_categoria`, `precio`, `stock`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Manzana', 1, 20, 100, 0, 1, '2021-04-19 09:57:11', '2021-04-19 10:56:41'),
(2, 'Banana', 1, 15, 100, 1, 0, '2021-04-19 10:36:50', '2021-04-19 10:36:50'),
(3, 'Anana', 1, 40, 50, 1, 0, '2021-04-19 10:42:34', '2021-04-21 11:11:40'),
(4, 'frutilla', 1, 30, 50, 1, 0, '2021-04-21 09:19:13', '2021-04-21 09:19:13'),
(5, 'granada', 1, 35, 10, 1, 0, '2021-04-21 10:33:16', '2021-04-21 10:33:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Leo', 'Messi', 1, 0, '2021-04-19 12:03:47', '2021-04-19 12:03:47'),
(2, 'Jon', 'Gibaut', 1, 0, '2021-04-19 12:03:53', '2021-04-19 12:03:53'),
(3, 'Bob', 'Esponja', 1, 0, '2021-04-19 12:03:59', '2021-04-19 12:03:59'),
(4, 'Lebron', 'James', 0, 1, '2021-04-19 12:06:40', '2021-04-19 12:07:13'),
(5, 'Jon', 'gibaut', 1, 0, '2021-04-21 09:57:30', '2021-04-21 09:57:30');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
