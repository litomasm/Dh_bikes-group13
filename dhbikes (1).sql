-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-01-2021 a las 00:06:25
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dhbikes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorys`
--

CREATE TABLE `categorys` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'niños', '2021-01-10 17:38:03', '2021-01-10 17:38:03', '2021-01-10 17:38:03'),
(2, 'adultos', '2021-01-10 17:38:28', '2021-01-10 17:38:28', '2021-01-10 17:38:28'),
(3, 'deportes', '2021-01-10 17:38:52', '2021-01-10 17:38:52', '2021-01-10 17:38:52'),
(4, 'accesorios', '2021-01-10 17:39:02', '2021-01-10 17:39:02', '2021-01-10 17:39:02'),
(5, 'seguros', '2021-01-10 17:39:08', '2021-01-10 17:39:08', '2021-01-10 17:39:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `information` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category_id`, `image`, `description`, `information`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Bicicleta roja', '20000', 1, '1610427578108-bici1.jpg', 'Bicicleta roja con ruedas', '', '2021-01-10 17:40:32', '2021-01-10 17:40:32', '2021-01-10 17:40:32'),
(15, 'Bicicleta Randers paseo BKE-300', '45000', 2, '1610427543701-bici2.jpg', 'peso: 15kg, \r\norigen: Argentina, \r\nmaterial: acero, \r\nrodado: 26, \r\nsuspensión: sin suspensión', 'Color disponible: rojo', '2021-01-12 03:24:48', '2021-01-12 03:24:48', '2021-01-12 03:24:48'),
(16, 'Bicicleta Musseta Fantasy R24', '45000', 3, '1610511048784-bici4.jpg', 'peso: 14kg,\r\norigen: Argentina,\r\nmaterial: acero, \r\nrodado: 24, \r\nsuspensión: sin suspensión', 'Color disponible: amarillo', '2021-01-12 03:26:07', '2021-01-12 03:26:07', '2021-01-12 03:26:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `rol` int(10) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`, `avatar`, `rol`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 'Miguel', 'santin', 'alejandro@hotmail.com', '$2a$10$jLktjjhbw5/42QUfSNv4S.yM7lF9EDigREcSLmn5KXzab6cwGLCGK', 'avatar-function now() { [native code] }.jpg', 0, '2021-01-14 00:42:38', '2021-01-14 00:42:38', '2021-01-14 00:42:38'),
(3, 'Miguel', 'santin', 'alejandro@hotmail.com', '$2a$10$STy45PXRv/TJPGt7YmBf0u3BzgKBVPNwqXHXTIob0EckUFi4OWMFq', 'avatar-function now() { [native code] }.jpg', 0, '2021-01-14 00:47:01', '2021-01-14 00:47:01', '2021-01-14 00:47:01'),
(4, 'Miguel', 'santin', 'alejandro@hotmail.com', '$2a$10$ct6KtG.srZ922b/OryIUH.JKQwW0Qo9PeWa6mOIgxm8/Iur.DhH4i', 'avatar-function now() { [native code] }.jpg', 0, '2021-01-14 00:53:04', '2021-01-14 00:53:04', '2021-01-14 00:53:04'),
(5, 'Alejandro', 'San', 'litomasm2008@gmail.com', '$2a$10$TYEuzOCziOSj8AV/G0NoCuH1eXcZfqTl1g8FytgK85.aWsqazYj3q', 'avatar-function now() { [native code] }.jpg', 0, '2021-01-14 00:57:26', '2021-01-14 00:57:26', '2021-01-14 00:57:26'),
(6, 'Emanuel', 'Santin', 'alejandro55@hotmail.com', '$2a$10$X.GpcNSBXQwt2IPBo0qNuOrYQvXdVcpBYyl21uiIHWsu8YNgPQ4se', 'avatar-function now() { [native code] }.jpg', 0, '2021-01-15 00:10:27', '2021-01-15 00:10:27', '2021-01-15 00:10:27');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categorys` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
