-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-03-2021 a las 05:33:16
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
-- Base de datos: `dhbikesdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
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
(28, 'BICICLETA OLMO CIRCUS R12 ROSA', '10200', 1, '1612795703570-BICICLETA OLMO CIRCUS R12 ROSA.png', 'Cuadro de aluminio unisex\r\nForma, stem y caño portasilla de aluminio\r\nAsiento con agarre para asistencia de un adulto\r\nRuedas rodado 12\" de goma', 'Código	OLMO060\r\nPeso (Gr.)	6,000.00\r\nAlto (Cm.)	45.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	75.00\r\nMarca	OLMO\r\nRodado	RODADO 12\r\nMaterial	ALUMINIO\r\nColor	ROSA\r\nPrecio	$ 10.199,99', '2021-02-08 14:48:23', '2021-02-08 14:48:23', '2021-02-08 14:48:23'),
(29, 'BICICLETA HALLEY ASTERIX R12 NENA LILA', '15080', 1, '1612796251128-BICICLETA HALLEY ASTERIX R12 NENA LILA.png', 'Cuadro de paseo Rodado 12\" Dama\r\nCámaras valvula de auto vulcanizadas\r\nLlantas de aluminio\r\nFrenos con herradura\r\nIncluye estabilizadores', 'Código	BIC030\r\nPeso (Gr.)	5,000.00\r\nAlto (Cm.)	40.00\r\nAncho (Cm.)	10.00\r\nLargo (Cm.)	75.00\r\nMarca	HALLEY\r\nRodado	RODADO 12\r\nMaterial	ACERO\r\nColor	LILA\r\nPrecio	$ 15.079,57', '2021-02-08 14:57:31', '2021-02-08 14:57:31', '2021-02-08 14:57:31'),
(30, 'BICICLETA OLMO COSMO PETS R12', '17700', 1, '1612796528364-BICICLETA OLMO COSMO PETS R12.png', 'Material del cuadro: Acero\r\nHorquilla: Rígida\r\nFrenos: V-Brake\r\nRodado: 12\"\r\nCubrecadena\r\nAsiento agarre para asistencia de un adulto\r\nEstabilizadores \r\nLlantas de aluminio\r\nRayos de acero\r\nCamaras valvula de auto', 'Código	PP-0197\r\nPeso (Gr.)	10,000.00\r\nAlto (Cm.)	45.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	75.00\r\nRodado	RODADO 12\r\nMaterial	ACERO\r\nPrecio	$ 17.700,00', '2021-02-08 15:02:08', '2021-02-08 15:02:08', '2021-02-08 15:02:08'),
(31, 'BICICLETA NITRO DAMA FULL R12 ROSA', '18300', 1, '1612796671584-BICICLETA NITRO DAMA FULL R12 ROSA.png', 'Cuadro de paseo Rodado 12\" Dama\r\nPortaequipaje soldado al cuadro\r\nCubrecadena y guardabarros al tono\r\nCámaras valvula de auto vulcanizadas\r\nLlantas de aluminio\r\nFrenos V-Brake de aluminio\r\nCubiertas con banda negra\r\nAsiento blanco\r\nCanasto plastico\r\nIncluye estabilizadores\r\nCalcomanias varias: BARBIE, VIOLETA, MINIONS, PRINCESA SOFIA, MINNIE Y MAS!', 'Código	BIC040\r\nPeso (Gr.)	6,000.00\r\nAlto (Cm.)	45.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	75.00\r\nMarca	NITRO\r\nRodado	RODADO 12\r\nMaterial	ACERO\r\nColor	ROSA\r\nPrecio	$ 18.294,26', '2021-02-08 15:04:31', '2021-02-08 15:04:31', '2021-02-08 15:04:31'),
(32, 'BICICLETA SBK FAT RECREO R12', '18860', 1, '1612796851127-BICICLETA SBK FAT RECREO R12.png', 'CUADRO ACERO 12” HI-TEN HORQUILLA RIGIDA\r\nCHAINWHEEL ACERO 28T X 127MM BB SETS RUEDAS\r\nLLANTAS DE ALUMINIO 12” X 3,0 X 14G X 36H CUBIERTAS\r\n12” X 3,0 NEGRO MAZAS F/R ACERO 36H FRENOS\r\nF/R BRAKE CADENA ½ X 1/8 70MM FREEWHEEL 16T\r\nMANUBRIO, STEM Y PORTASILLA DE ACERO ACCESORIOS\r\nGUARDABARROS, CUBRECADENA, RUEDAS ESTABILIZADORAS', 'Código	PP-097\r\nPeso (Gr.)	5,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	100.00\r\nPrecio	$ 18.860,16', '2021-02-08 15:07:31', '2021-02-08 15:07:31', '2021-02-08 15:07:31'),
(33, 'BICICLETA NITRO JUNIOR BOY RODADO 16', '2104500', 1, '1612797052103-BICICLETA NITRO JUNIOR BOY RODADO 16.png', 'BICICLETA NITRO JUNIOR BOY RODADO 16\r\nCOLOR : AZUL/NEGRO ', 'Código	PP-5670\r\nPeso (Gr.)	10,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 16\r\nMaterial	ACERO\r\nPrecio	$ 21.045,00', '2021-02-08 15:10:52', '2021-02-08 15:10:52', '2021-02-08 15:10:52'),
(34, 'BICICLETA NITRO JUNIOR BOY RODADO 16 VN', '21045', 1, '1612797265023-BICICLETA NITRO JUNIOR BOY RODADO 16 v2.png', 'BICICLETA NITRO JUNIOR BOY RODADO 16 VN\r\nCOLOR : VERDE/NEGRO\r\n ', 'Código	PP-5670\r\nPeso (Gr.)	10,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 16\r\nMaterial	ACERO\r\nPrecio	$ 21.045,00', '2021-02-08 15:14:25', '2021-02-08 15:14:25', '2021-02-08 15:14:25'),
(35, 'BICICLETA NITRO JUNIOR BOY RODADO 16 RN', '21045', 1, '1612797394409-BICICLETA NITRO JUNIOR BOY RODADO 16 V3.png', 'BICICLETA NITRO JUNIOR BOY RODADO 16\r\nCOLOR : ROJO/NEGRO\r\n ', '\r\nCódigo	PP-5670\r\nPeso (Gr.)	10,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 16\r\nMaterial	ACERO\r\nPrecio	$ 21.045,00', '2021-02-08 15:16:34', '2021-02-08 15:16:34', '2021-02-08 15:16:34'),
(36, 'BICICLETA TOPMEGA PRINCESS R16 ROSA', '27060', 1, '1612797535539-BICICLETA TOPMEGA PRINCESS R16 ROSA.png', 'CUADRO Acero\r\nFRENO V-Brake Del / Tras\r\nRUEDA Con llanta aluminio\r\nGUARDABARROS Metal\r\nCUBRE CADENA Metal con motivo\r\nMANUBRIO Con flecos decorativos\r\nPUÑOS TPR color 22 X 85 mm\r\nCANASTO Plástico tejido con flores\r\nPORTA MUÑECA Plástico con motivos\r\nENGRANAJE Freestyle cromado 28 dientes\r\n*Imagen ilustrativa. Puede modificarse sin previo aviso', 'Código	CUB601\r\nPeso (Gr.)	10,000.00\r\nAlto (Cm.)	80.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nMarca	TOPMEGA\r\nRodado	RODADO 16\r\nMaterial	ACERO\r\nColor	ROSA\r\nPrecio	$ 27.060,00', '2021-02-08 15:18:55', '2021-02-08 15:18:55', '2021-02-08 15:18:55'),
(37, 'BICICLETA TOPMEGA PRINCESS R20 BLANCO/ROSADO', '29274', 1, '1612797695519-BICICLETA TOPMEGA PRINCESS R20 BLANCO-ROSADO.png', 'ASIENTO: Tapizado con agarradera 200X135 mm\r\nCUADRO Acero\r\nFRENO V-Brake Del / Tras\r\nRUEDA Con llanta aluminio\r\nGUARDABARROSMetal\r\nCUBRE CADENA Metal con motivo\r\nMANUBRIO Con flecos decorativos\r\nPUÑOS TPR color 22 X 85 mm\r\nCANASTO Plástico tejido con flores\r\nPORTA MUÑECA Plástico con motivos\r\nENGRANAJEFreestyle cromado 28 dientes', '\r\nCódigo	BIC619\r\nPeso (Gr.)	10,000.00\r\nAlto (Cm.)	80.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nMarca	CUBE\r\nColor	BLANCO/ROSA\r\nPrecio	$ 29.274,00', '2021-02-08 15:21:35', '2021-02-08 15:21:35', '2021-02-08 15:21:35'),
(38, 'BICICLETA SBK FAT HUNTER R20', '43470', 1, '1612797876921-BICICLETA SBK FAT HUNTER R20.png', 'Cuadro de aluminio\r\nHorquilla rigida\r\nFrenos a disco mecanico aluminio\r\nManubrio recto de acero\r\nStem aluminio\r\nAsiento vinilo negro\r\nPortasilla de acero\r\nPlatopalanca 3/32\"X32TX152MM\r\nCadena KMC6\r\nLlantas de aluminio simple pared\r\nCubiertas Wanda King 20x4.00\r\nCámaras valvula de auto\r\nCambio Shimano RD-TZ50 GSD Tourney\r\nShifters Shimano 7v SL TX30\r\nPiñon 14-28T\r\nPedales con reflectores\r\nCubrecadenas de acero y guardabarros', 'Código	PP-982\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 20\r\nMaterial	ALUMINIO\r\nPrecio	$ 43.470,00', '2021-02-08 15:24:36', '2021-02-08 15:24:36', '2021-02-08 15:24:36'),
(39, 'BICICLETA OLMO CAMINO C05', '65000', 2, '1612798090311-BICICLETA OLMO CAMINO C05.png', '• Rodado 28\r\n• Cuadro de aluminio\r\n• Talle 18\"\r\n• Horquilla rigida\r\n• Cambio Shimano TZ-500, 6 velocidades\r\n• Frenos V-Brake', 'Código	PP-874\r\nPeso (Gr.)	20,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 28\r\nMaterial	ALUMINIO\r\nPrecio	$ 64.999,00', '2021-02-08 15:28:10', '2021-02-08 15:28:10', '2021-02-08 15:28:10'),
(40, 'BICICLETA GIANT LIV ALIGHT 3 (2021)', '67116', 2, '1612798214104-BICICLETA GIANT LIV ALIGHT 3 (2021).png', 'PEDALEAR PARA TRABAJAR, ENCONTRARTE CON AMIGOS PARA TOMAR UN CAFÉ O MEJORAR TU FORMA EN LA BICICLETA. ALIGHT SE ADAPTA A UN ESTILO DE VIDA SALUDABLE Y DIVERTIDO.\r\n\r\nCon su diseño liviano y su posición vertical de manubrio plano, esta bicicleta premium hace que sea fácil pedalear para trabajar, recorrer la ciudad y salir a los caminos rurales. Agregue un portaequipajes y alforjas para una exploración más extensa los fines de semana o una mayor capacidad de carga en la ciudad. Los acabados modernos mantienen el estilo a la vanguardia de cada viaje. La geometría y el tamaño específicos para mujeres le dan a Alight una calidad de conducción estable y segura. Y gracias a las punteras integradas, es fácil de personalizar con portabultos y guardabarros.\r\n\r\nCuadro Aluminio grado ALUXX\r\nHorquilla Acero de alta resistencia\r\nManubrioGiant Sport flat, 25,4\r\nStem Giant Sport\r\nPortasillaGiant Sport, 27.2\r\nAsiento Liv Sport Comfort\r\nPedales Urban fitness\r\nShifters Shimano EF41\r\nDescarrilador Shimano Tourney\r\nCambio Trasero Shimano Tourney\r\nFrenos Tektro linear pull\r\nManijas de Freno Shimano EF41\r\nPiñón Shimano TZ50, 7 Velocidades, 14x34\r\nCadena KMC Z7\r\nPlato - Palanca Forjado en aluminio, 28/38/48\r\nCaja PedaleraCartucho\r\nLlantas Doble Pared, Alumino\r\nMazas Aluminio, 32H\r\nRayos Acero Inoxidable, 14g\r\nCubiertasGiant S-X3, Protección contra pinchazo, 700x38c', 'Código	PP-9940\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	80.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 28\r\nMaterial	ALUMINIO\r\nPrecio	$ 67.116,00', '2021-02-08 15:30:14', '2021-02-08 15:30:14', '2021-02-08 15:30:14'),
(41, 'BICICLETA PHILCO PASEO TOSCANA 7V', '79940', 2, '1612798449544-BICICLETA PHILCO PASEO TOSCANA 7V.png', 'Bicicleta Plegable\r\nRodado 20\r\nMaterial de cuadro aluminio\r\nTalle: unico\r\n6 Velocidades Shimano\r\nFreno tipo v-brake\r\nLlantas de aluminio\r\nColor gris\r\nManijas de cambio Shimano', 'Código	BIC386\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nMarca	PHILCO\r\nRodado	RODADO 20\r\nMaterial	ALUMINIO\r\nPrecio	$ 79.940,00', '2021-02-08 15:34:09', '2021-02-08 15:34:09', '2021-02-08 15:34:09'),
(42, 'BICICLETA TRINX FREE 1.0', '90450', 2, '1612798572839-BICICLETA TRINX FREE 1.0.png', '3 x 7 velocidades\r\nFrenos V-Brake\r\nTransmisión Shimano Tourney\r\nCuadro TRINX Tempo 1.0 Aluminio 6061\r\nHorquilla Acero Hi-ten 700C\r\nDescarrilador SHIMANO Tourney FD-TY510\r\nPata de Cambios SHIMANO Tourney RD-TX300, SIS Index\r\nShifters SHIMANO 3x7 vel\r\nCassette FREEWHEEL 7 vel,14-28T\r\nMazas QR (cierres rápidos)\r\nCadena KMC 7 vel\r\nFrenos Aluminio V-Brake Winzip\r\nLlantas Trinx 700c de aluminio doble pared, con pista de frenado\r\nCubiertas Kenda 700 x 32C\r\nTriplato TRINX Aluminio 50-34T, largo 170mm, con cubreplato\r\nAsiento TRINX SR SPORT ergonómico\r\nManubrio Flat TRINX Aluminio\r\nUso: Urbano/ Paseo/ Híbrida\r\nDiseñada en Italia\r\nPeso: 13 kg', 'Código	PP-653\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 28\r\nMaterial	ALUMINIO\r\nPrecio	$ 90.450,00', '2021-02-08 15:36:12', '2021-02-08 15:36:12', '2021-02-08 15:36:12'),
(43, 'BICICLETA TRINX FREE 1.0 NBA', '90450', 2, '1612798740365-BICICLETA TRINX FREE 1.0 V2.png', '3 x 7 velocidades\r\nFrenos V-Brake\r\nTransmisión Shimano Tourney\r\nCuadro TRINX Tempo 1.0 Aluminio 6061\r\nHorquilla Acero Hi-ten 700C\r\nDescarrilador SHIMANO Tourney FD-TY510\r\nPata de Cambios SHIMANO Tourney RD-TX300, SIS Index\r\nShifters SHIMANO 3x7 vel\r\nCassette FREEWHEEL 7 vel,14-28T\r\nMazas QR (cierres rápidos)\r\nCadena KMC 7 vel\r\nFrenos Aluminio V-Brake Winzip\r\nLlantas Trinx 700c de aluminio doble pared, con pista de frenado\r\nCubiertas Kenda 700 x 32C\r\nTriplato TRINX Aluminio 50-34T, largo 170mm, con cubreplato\r\nAsiento TRINX SR SPORT ergonómico\r\nManubrio Flat TRINX Aluminio\r\nUso: Urbano/ Paseo/ Híbrida\r\nDiseñada en Italia\r\nPeso: 13 kg', 'Código	PP-653\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 28\r\nMaterial	ALUMINIO\r\nPrecio	$ 90.450,00', '2021-02-08 15:39:00', '2021-02-08 15:39:00', '2021-02-08 15:39:00'),
(44, 'BICICLETA TRINX FREE 1.0 ANN', '89100', 2, '1612798895099-BICICLETA TRINX FREE 1.0 V3.png', '3 x 7 velocidades\r\nFrenos V-Brake\r\nTransmisión Shimano Tourney\r\nCuadro TRINX Tempo 1.0 Aluminio 6061\r\nHorquilla Acero Hi-ten 700C\r\nDescarrilador SHIMANO Tourney FD-TY510\r\nPata de Cambios SHIMANO Tourney RD-TX300, SIS Index\r\nShifters SHIMANO 3x7 vel\r\nCassette FREEWHEEL 7 vel,14-28T\r\nMazas QR (cierres rápidos)\r\nCadena KMC 7 vel\r\nFrenos Aluminio V-Brake Winzip\r\nLlantas Trinx 700c de aluminio doble pared, con pista de frenado\r\nCubiertas Kenda 700 x 32C\r\nTriplato TRINX Aluminio 50-34T, largo 170mm, con cubreplato\r\nAsiento TRINX SR SPORT ergonómico\r\nManubrio Flat TRINX Aluminio\r\nUso: Urbano/ Paseo/ Híbrida\r\nDiseñada en Italia\r\nPeso: 13 kg', 'Código	PP-653\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 28\r\nMaterial	ALUMINIO\r\nPrecio	$ 90.450,00', '2021-02-08 15:41:35', '2021-02-08 15:41:35', '2021-02-08 15:41:35'),
(45, 'BICICLETA TRINX FREE 2.0', '95985', 2, '1612799021725-BICICLETA TRINX FREE 2.0.png', 'Marca: Trinx\r\nModelo: Free 2.0\r\nRodado: 28\r\nEdad: Adulto\r\nTipo: Paseo\r\nVelocidades: 24\r\nGenero: Unisex\r\nTipo de freno: Aluminio Disco Mecanico\r\nMaterial de cuadro: Aluminio\r\nHorquilla: Aluminio 700c\r\nComponentes: Shimano Tourney Tx\r\nRuedas: Trinx 700C Doble Pared\r\nAsiento: Sr Sport\r\nCubiertas: Cst Recourse\r\nPalancas: Prowheel 28/38/48 T* 170L', 'Código	PP-89855\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 28\r\nMaterial	ALUMINIO\r\nPrecio	$ 95.985,00', '2021-02-08 15:43:41', '2021-02-08 15:43:41', '2021-02-08 15:43:41'),
(46, 'BICICLETA TRINX FREE 2.0 NBA', '95985', 2, '1612799127420-BICICLETA TRINX FREE 2.0 V2.png', 'Marca: Trinx\r\nModelo: Free 2.0\r\nRodado: 28\r\nEdad: Adulto\r\nTipo: Paseo\r\nVelocidades: 24\r\nGenero: Unisex\r\nTipo de freno: Aluminio Disco Mecanico\r\nMaterial de cuadro: Aluminio\r\nHorquilla: Aluminio 700c\r\nComponentes: Shimano Tourney Tx\r\nRuedas: Trinx 700C Doble Pared\r\nAsiento: Sr Sport\r\nCubiertas: Cst Recourse\r\nPalancas: Prowheel 28/38/48 T* 170L', 'Código	PP-89855\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 28\r\nMaterial	ALUMINIO\r\nPrecio	$ 95.985,00', '2021-02-08 15:45:27', '2021-02-08 15:45:27', '2021-02-08 15:45:27'),
(47, 'BICICLETA BATTLE 270H 27.5 HIDRAULICO G/N TALLE 18', '88999', 3, '1612886673530-BICICLETA BATTLE 270H 27.5 HIDRAULICO GRIS-NARANJA TALLE 18.png', 'Tipo de Bicicleta Mountain Bike\r\nMaterial de Cuadro Aluminio\r\nPlato / Palanca SHIMANO TOURNEY TY\r\nDescarrilador Trasero SHIMANO ALTUS\r\nShifter SHIMANO ACERA\r\nVelocidades 27\r\nSistema de Frenos Disco hidraúlico\r\nTipo de Llantas Con aros de aluminio, doble pared reforzados', 'Código	BIC088\r\nPeso (Gr.)	150,000.00\r\nAlto (Cm.)	80.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nMarca	BATTLE\r\nRodado	RODADO 27.5\r\nMaterial	ALUMINIO\r\nColor	GRIS/NARANJA\r\nOpcionales	18.00\r\nPrecio	$ 88.999,00', '2021-02-08 15:49:09', '2021-02-08 15:49:09', '2021-02-08 15:49:09'),
(48, 'BICICLETA RALEIGH MOJAVE 7.0 R27.5 ROJO MATE TALLE 19', '150800', 3, '1612799482986-BICICLETA RALEIGH MOJAVE 7.0 R27.5 ROJO MATE TALLE 19.png', 'CUADRO: ALUMINIO 6061 T6 Multibutted 27.5\r\nHORQUILLA: SUNTOUR XCM-LO 32 REGULABLE 27.5 C/ BLOQUEO\r\nEQUIPAMIENTO: SHIMANO DEORE 20 VEL –\r\nPLATO: SHIMANO DEORE 617\r\nSHIFTER: SL-M610 10 VEL\r\nPIÑÓN: CS-HG50 10V 11/36 –\r\nRUEDAS: SHIMANO MT 15 DOBLE PARED\r\nFRENOS: DISCO HIDRAULICO SHIMANO DEORE 615\r\nCUBIERTAS: INOVA 29 X 210\r\nPEDALES: XERAMA ALUMINIO\r\nPERIFERICOS: RALEIGH ALUMINIO\r\nDIRECCIÓN: INTEGRADO NECO', 'Código	RAL004\r\nPeso (Gr.)	150,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nMarca	RALEIGH\r\nRodado	RODADO 29\r\nMaterial	ALUMINIO\r\nColor	ROJO\r\nOpcionales	19.00\r\nPrecio	$ 150.800,00', '2021-02-08 15:51:23', '2021-02-08 15:51:23', '2021-02-08 15:51:23'),
(49, 'BICICLETA TEKNIAL TARPAN 100ER (2021)', '61600', 3, '1612799610415-BICICLETA TEKNIAL TARPAN 100ER (2021).png', 'CUADRO – 29? ALUMINIO 6061 MTB\r\nHORQUILLA – TEKNIAL MD-711X-D-29\r\nSHIFTER – SHIMANO ST – EF51 21S\r\nDESCARRILADOR – SHIMANO TOURNEY\r\nCAMBIO – SHIMANO TOURNEY\r\nCADENA – KMC Z73\r\nMAZA DELANTERA – ACERO 32H\r\nMAZA TRASERA – ACERO 32H\r\nLLANTA – ALUMINIO DOBLE PARED 32H\r\nCUBIERTA – 29**2.125\r\nSTEAM – TEKNIAL MD-HS078 ALUMINIO\r\nMANUBRIO – TEKNIAL MD-HB023 ACERO 680MM\r\nFRENOS – DISCO MECÁNICO\r\nASIENTO – TEKNIAL\r\nCAÑO DE ASIENTO – ACERO 27.2’300MM', 'Código	PP-5616\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 29\r\nMaterial	ALUMINIO\r\nPrecio	$ 61.600,00', '2021-02-08 15:53:30', '2021-02-08 15:53:30', '2021-02-08 15:53:30'),
(50, 'BICICLETA TEKNIAL TARPAN 100ER (2021) NN', '61600', 3, '1612799813725-BICICLETA TEKNIAL TARPAN 100ER (2021) V2.png', 'CUADRO – 29? ALUMINIO 6061 MTB\r\nHORQUILLA – TEKNIAL MD-711X-D-29\r\nSHIFTER – SHIMANO ST – EF51 21S\r\nDESCARRILADOR – SHIMANO TOURNEY\r\nCAMBIO – SHIMANO TOURNEY\r\nCADENA – KMC Z73\r\nMAZA DELANTERA – ACERO 32H\r\nMAZA TRASERA – ACERO 32H\r\nLLANTA – ALUMINIO DOBLE PARED 32H\r\nCUBIERTA – 29**2.125\r\nSTEAM – TEKNIAL MD-HS078 ALUMINIO\r\nMANUBRIO – TEKNIAL MD-HB023 ACERO 680MM\r\nFRENOS – DISCO MECÁNICO\r\nASIENTO – TEKNIAL\r\nCAÑO DE ASIENTO – ACERO 27.2’300MM', 'Código	PP-5616\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 29\r\nMaterial	ALUMINIO\r\nPrecio	$ 61.600,00', '2021-02-08 15:56:53', '2021-02-08 15:56:53', '2021-02-08 15:56:53'),
(51, 'BICICLETA MOTOMEL MAXAM 390 29\"', '80080', 3, '1612886804177-BICICLETA MOTOMEL MAXAM 390 29.png', 'Cuadro29? Aluminio 6061 MTB\r\nHorquillaSR Suntour XCT\r\nShifterShimano ST – EF51 24S\r\nDescarriladorShimano ALTUS\r\nCambioShimano ALTUS\r\nPlatoShimano FC-TY301 24/34/42T\r\nCaja PedaleraFeimin FP-B902\r\nPiñónShimano CS-HG200-8 12-32T\r\nCadenaKMC Z72\r\nPedalesFeimin FP-917\r\nMaza delanteraJoytech Aluminio QR 32H\r\nMaza traseraJoytech Aluminio QR 32H\r\nLlantaAluminio doble pared 32H\r\nCubiertaInnova 29?2.1\r\nStemMotomel MD-HS127 de Aluminio\r\nManubrioMotomel MD-HB023 Aluminio 680mm\r\nFrenosTektro M280 Disco Mecánico\r\nAsientoMotomel\r\nCaño de asientoAluminio C/Abrazadera 30.9*300MM', 'Código	PP-9870\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nRodado	RODADO 29\r\nMaterial	ALUMINIO\r\nPrecio	$ 80.080,00', '2021-02-08 16:04:45', '2021-02-08 16:04:45', '2021-02-08 16:04:45'),
(52, 'BICICLETA VOLTA AVIAN 29ER AZUL/NARANJA TALLE M', '153914', 3, '1612886830633-BICICLETA VOLTA AVIAN 29ER AZUL-NARANJA TALLE M .png', 'Ágil, rígida y agresiva para aventurarse en el mundo del MTB extremo,\r\n\r\nCon prestaciones de gama alta en un cuadro de aluminio pulido con cables internos y con sistema de cambios de 18 velocidades, frenos a disco hidráulico y con el sistema de bloqueo de suspensión remota podrás disfrutar del MTB más avanzado.\r\nRodado: 29? \r\nHorquilla: SR Suntour XCM C/ Bloqueo Remoto\r\nEngranaje: SHIMANO MT210-2 36-22T Hollowtech\r\nCassette: Corona 11-34T HG200-9 \r\nCambio: SHIMANO Alivio M4000 27 VEL.\r\nDescarrilador: SHIMANO Altus M2020 \r\nManijas de cambio: SHIMANO Alivio M4010\r\nManijas de freno: Shimano MT200\r\nManubrio: 31.8×720 Aluminio\r\nAsiento: mtb VOLTA\r\nLlanta: Doble pared 29x19x21\r\nMaza: Casette 36A eje pasante aluminio\r\nCubiertas: Maxxis Pace 29×2.10\r\nPeso: 14kg', 'Código	CAN038\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nMarca	VOLTA\r\nRodado	RODADO 29\r\nMaterial	ALUMINIO\r\nColor	AZUL/NARANJA\r\nOpcionales	M\r\nPrecio	$ 153.914,00', '2021-02-08 16:07:19', '2021-02-08 16:07:19', '2021-02-08 16:07:19'),
(53, 'BOLSO PROFILE E-PACK SMALL (PFEPACK1S)', '2200', 4, '1612800840641-BOLSO PROFILE E-PACK SMALL (PFEPACK1S).png', 'Bolso porta objeto PROFILE DESIGN\r\nMarca: Profile design\r\nColocación en stem y tubo superior\r\nColor:negro', '\r\nCódigo	BOL024\r\nPeso (Gr.)	500.00\r\nAlto (Cm.)	10.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	30.00\r\nMarca	PROFILE\r\nColor	NEGRO\r\nPrecio	$ 2.200,05', '2021-02-08 16:14:00', '2021-02-08 16:14:00', '2021-02-08 16:14:00'),
(54, 'INFLADOR DE MANO GIYO GP-04T', '1340', 4, '1612800948505-INFLADOR DE MANO GIYO GP-04T.png', 'Modelo: GP-04T\r\nTipo de válvula: válvula americana y presta\r\nLiviano\r\nMaterial: fibra de nylon, con dos tonos en el mango', 'Código	INF098\r\nPeso (Gr.)	1,000.00\r\nAlto (Cm.)	10.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	30.00\r\nMarca	GIYO\r\nColor	NEGRO\r\nPrecio	$ 1.340,00', '2021-02-08 16:15:48', '2021-02-08 16:15:48', '2021-02-08 16:15:48'),
(55, 'INFLADOR DE MANO BETO RH-004 ALUMINIO', '3136', 4, '1612801060016-INFLADOR DE MANO BETO RH-004 ALUMINIO.png', 'Inflador telescópico de Aluminio CNC. \r\nCabezal reversible para Schrader / Presta \r\nMaximo 160 PSI.\r\nIncluye Soporte con correa de velcro. \r\nColor: Plata', 'Código	INF087\r\nPeso (Gr.)	500.00\r\nAlto (Cm.)	10.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	30.00\r\nMarca	BETO\r\nPrecio	$ 3.136,43', '2021-02-08 16:17:40', '2021-02-08 16:17:40', '2021-02-08 16:17:40'),
(56, 'LUZ DELANTERA Q-LITE QL-201', '1072', 4, '1612801257566-LUZ DELANTERA Q-LITE QL-201.png', '3 Led\r\n4 funciones\r\n2 pilas AAA (no incluídas)\r\n80 horas de uso\r\nVisibilidad : 500 metros', 'Código	LUC040\r\nPeso (Gr.)	500.00\r\nAlto (Cm.)	10.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	30.00\r\nMarca	Q-LITE\r\nPrecio	$ 1.072,00', '2021-02-08 16:20:57', '2021-02-08 16:20:57', '2021-02-08 16:20:57'),
(57, 'LUZ DELANTERA Q-LITE QL-255', '1629', 4, '1612801354805-LUZ DELANTERA Q-LITE QL-255.png', 'Modelo: Farol delantero QL-255\r\nTipo de Luz: 3 Led\r\nAlimentación: 3 pilas AAA\r\nTipo agarre: a la forma\r\nFunciones: 2 fija/flash', '\r\nCódigo	LUC020\r\nPeso (Gr.)	500.00\r\nAlto (Cm.)	10.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	30.00\r\nMarca	Q-LITE\r\nPrecio	$ 1.629,31', '2021-02-08 16:22:34', '2021-02-08 16:22:34', '2021-02-08 16:22:34'),
(58, 'BICICLETA VOLTA AVIAN 29ER AZUL/NARANJA TALLE M', '153914', 3, '1612903443528-1612886830633-BICICLETA VOLTA AVIAN 29ER AZUL-NARANJA TALLE M .png', 'Ágil, rígida y agresiva para aventurarse en el mundo del MTB extremo,\r\n\r\nCon prestaciones de gama alta en un cuadro de aluminio pulido con cables internos y con sistema de cambios de 18 velocidades, frenos a disco hidráulico y con el sistema de bloqueo de suspensión remota podrás disfrutar del MTB más avanzado.\r\nRodado: 29? \r\nHorquilla: SR Suntour XCM C/ Bloqueo Remoto\r\nEngranaje: SHIMANO MT210-2 36-22T Hollowtech\r\nCassette: Corona 11-34T HG200-9 \r\nCambio: SHIMANO Alivio M4000 27 VEL.\r\nDescarrilador: SHIMANO Altus M2020 \r\nManijas de cambio: SHIMANO Alivio M4010\r\nManijas de freno: Shimano MT200\r\nManubrio: 31.8×720 Aluminio\r\nAsiento: mtb VOLTA\r\nLlanta: Doble pared 29x19x21\r\nMaza: Casette 36A eje pasante aluminio\r\nCubiertas: Maxxis Pace 29×2.10\r\nPeso: 14kg', 'Código	CAN038\r\nPeso (Gr.)	15,000.00\r\nAlto (Cm.)	85.00\r\nAncho (Cm.)	25.00\r\nLargo (Cm.)	150.00\r\nMarca	VOLTA\r\nRodado	RODADO 29\r\nMaterial	ALUMINIO\r\nColor	AZUL/NARANJA\r\nOpcionales	M\r\nPrecio	$ 153.914,00', '2021-02-09 20:44:03', '2021-02-09 20:44:03', '2021-02-09 20:44:03');

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
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`, `avatar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Miguel', 'sanchez', 'litomasm2006@hotmail.com', '$2a$10$Qbfs5HRcYj0JVsa63OYSg.Kxj18aKm0kwvNPpOV3JYZ8tqtMo2w.y', 'avatar-bici4.jpg.jpg', '2021-01-31 14:00:49', '2021-01-31 14:00:49', '2021-01-31 14:00:49'),
(104, 'Diego', 'Sabater', 'diego@digitalhouse.com', '$2a$05$eVbBKns.M2Yq6RVm9o4i.uNG8ZemohzSG2yrbAEV2tMLGRvC0UgpK', 'avatar-transformers_last_knight_vadernews.jpg_148167077.jpg.jpg', '2021-02-07 14:56:07', '2021-02-07 14:56:07', '2021-02-07 14:56:07');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
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
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
