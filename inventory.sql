-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.42 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for inventory
CREATE DATABASE IF NOT EXISTS `inventory`;
USE `inventory`;

-- Dumping structure for table inventory.barang
CREATE TABLE IF NOT EXISTS `barang` (
  `id_barang` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(32) COLLATE utf8mb4_general_ci NOT NULL,
  `kategori` enum('F','D','S') COLLATE utf8mb4_general_ci NOT NULL,
  `stock` int NOT NULL,
  `harga` int NOT NULL,
  PRIMARY KEY (`id_barang`),
  UNIQUE KEY `nama` (`nama`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 ;

-- Dumping data for table inventory.barang: ~7 rows (approximately)
DELETE FROM `barang`;
INSERT INTO `barang` (`id_barang`, `nama`, `kategori`, `stock`, `harga`) VALUES
	(23, 'Momogi', 'F', 35, 10000),
	(24, 'Permen Mintz', 'F', 24, 10000),
	(26, 'Ale Ale', 'D', 9, 15000),
	(27, 'Teh Gelas', 'D', 10, 15000),
	(29, 'Telur', 'S', 88, 50000),
	(30, 'Minyak Goreng', 'S', 9, 20000),
	(32, 'Bang Bang', 'F', 9, 15000);

-- Dumping structure for table inventory.barang_keluar
CREATE TABLE IF NOT EXISTS `barang_keluar` (
  `id_bk` int NOT NULL AUTO_INCREMENT,
  `id_barang` int NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `harga` int NOT NULL,
  `jumlah` int NOT NULL,
  PRIMARY KEY (`id_bk`),
  KEY `id_barang` (`id_barang`),
  CONSTRAINT `barang_keluar_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 ;

-- Dumping data for table inventory.barang_keluar: ~21 rows (approximately)
DELETE FROM `barang_keluar`;
INSERT INTO `barang_keluar` (`id_bk`, `id_barang`, `tanggal`, `harga`, `jumlah`) VALUES
	(17, 23, '2025-02-27 12:28:34', 10000, 1),
	(18, 24, '2025-02-27 12:28:34', 10000, 1),
	(19, 24, '2025-02-27 12:28:34', 10000, 1),
	(20, 23, '2025-02-27 12:28:34', 10000, 1),
	(21, 24, '2025-02-27 12:28:34', 10000, 1),
	(22, 23, '2025-02-27 12:28:34', 10000, 1),
	(23, 24, '2025-02-27 12:36:17', 10000, 1),
	(24, 23, '2025-02-27 12:36:17', 10000, 1),
	(25, 23, '2025-02-27 12:37:44', 10000, 1),
	(26, 24, '2025-02-27 12:40:10', 10000, 1),
	(33, 29, '2025-02-27 13:04:57', 50000, 1),
	(34, 29, '2025-02-27 13:05:25', 50000, 1),
	(35, 29, '2025-02-27 13:07:50', 50000, 1),
	(36, 29, '2025-02-27 13:08:33', 50000, 1),
	(37, 29, '2025-02-27 13:14:33', 50000, 1),
	(39, 29, '2025-02-28 03:11:25', 50000, 5),
	(40, 32, '2025-07-02 08:16:17', 15000, 1),
	(41, 29, '2025-07-02 12:50:48', 50000, 2),
	(42, 30, '2025-07-02 12:59:01', 20000, 1),
	(43, 26, '2025-07-02 12:59:01', 15000, 1),
	(44, 24, '2025-07-02 12:59:01', 10000, 1);

-- Dumping structure for table inventory.barang_masuk
CREATE TABLE IF NOT EXISTS `barang_masuk` (
  `id_bm` int NOT NULL AUTO_INCREMENT,
  `id_barang` int NOT NULL,
  `stock` int NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_bm`),
  KEY `id_barang` (`id_barang`),
  CONSTRAINT `barang_masuk_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 ;

-- Dumping data for table inventory.barang_masuk: ~11 rows (approximately)
DELETE FROM `barang_masuk`;
INSERT INTO `barang_masuk` (`id_bm`, `id_barang`, `stock`, `tanggal`) VALUES
	(22, 23, 10, '2025-02-26 07:21:00'),
	(23, 24, 10, '2025-02-26 07:22:00'),
	(24, 23, 20, '2025-02-26 11:39:00'),
	(25, 24, 11, '2025-02-26 11:41:00'),
	(26, 24, 9, '2025-02-26 11:41:00'),
	(27, 23, 10, '2025-02-26 11:42:00'),
	(30, 26, 10, '2025-02-27 05:11:00'),
	(31, 27, 10, '2025-02-27 05:11:00'),
	(34, 29, 100, '2025-02-27 05:59:00'),
	(35, 30, 10, '2025-02-27 06:01:00'),
	(38, 32, 10, '2025-02-28 03:10:00');

-- Dumping structure for table inventory.pegawai
CREATE TABLE IF NOT EXISTS `pegawai` (
  `id_pegawai` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(32) COLLATE utf8mb4_general_ci NOT NULL,
  `jabatan` enum('M','A','K') COLLATE utf8mb4_general_ci NOT NULL,
  `hp` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(16) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_pegawai`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `hp` (`hp`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 ;

-- Dumping data for table inventory.pegawai: ~4 rows (approximately)
DELETE FROM `pegawai`;
INSERT INTO `pegawai` (`id_pegawai`, `nama`, `jabatan`, `hp`, `email`, `username`, `password`) VALUES
	(75, 'Manajer', 'M', '1111', 'manajer@gmail.com', 'manajer1234', '$2a$12$HY36bR/ezGvMPBcKrumULe2zlK7Z77dinS5Nh4gUf5r48Vx4XD/tq'),
	(77, 'Admin', 'A', '2222', 'admin@gmail.com', 'admin1234', '$2a$12$kp3OtLtSwTB2N/NWAS25feEsHg4LggKYsFejgv9qrbuEHKXovcsNG'),
	(78, 'Kepala Gudang', 'K', '3333', 'kepalagudang@gmail.com', 'kepalagudang1234', '$2a$12$kQiPBKi3o0PPo4B9ESQiZO6RED18uUTqev1GDpGUfc57zBQFFYkO2'),
	(79, 'Dede Setiawan', 'M', '1212', 'dedesetiawansumbawa1206@gmail.com', 'dedesetiawan', '$2a$12$Lz7zf5MYQrjhGzSdbkYxvu1r8SXBlvjrlOBNsO7sRJr4Q8ACnJ56S');

-- Dumping structure for table inventory.pesanan
CREATE TABLE IF NOT EXISTS `pesanan` (
  `id` varchar(36) CHARACTER SET utf8mb4 NOT NULL,
  `tanggal` datetime NOT NULL DEFAULT (now()),
  `status` enum('Lunas','Gagal','Menunggu') CHARACTER SET utf8mb4 NOT NULL DEFAULT 'Menunggu',
  `barang` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- Dumping data for table inventory.pesanan: ~5 rows (approximately)
DELETE FROM `pesanan`;
INSERT INTO `pesanan` (`id`, `tanggal`, `status`, `barang`) VALUES
	('0197caf7-edc5-7607-8690-4c376a0f9ac5', '2025-07-02 19:48:55', 'Lunas', '[{"nama": "Momogi", "harga": 10000, "jumlah": 2, "id_barang": 23}]'),
	('0197cb06-8a0d-7299-91d9-b535810b6c04', '2025-07-02 20:04:52', 'Lunas', '[{"nama": "Momogi", "harga": 10000, "jumlah": 1, "id_barang": 23}]'),
	('0197cb07-5669-701d-bb8f-26d1f67fc5f8', '2025-07-02 20:05:45', 'Lunas', '[{"nama": "Telur", "harga": 50000, "jumlah": 2, "id_barang": 29}]'),
	('0197cb30-984d-73cd-a88f-3f41a4db4103', '2025-07-02 20:50:49', 'Menunggu', '[{"nama": "Telur", "harga": 50000, "jumlah": 2, "id_barang": 29}]'),
	('0197cb38-1c92-7708-95f7-4a6fcf911335', '2025-07-02 20:59:01', 'Menunggu', '[{"nama": "Minyak Goreng", "harga": 20000, "jumlah": 1, "id_barang": 30}, {"nama": "Ale Ale", "harga": 15000, "jumlah": 1, "id_barang": 26}, {"nama": "Permen Mintz", "harga": 10000, "jumlah": 1, "id_barang": 24}]');

-- Dumping structure for trigger inventory.before_insert_barang_keluar
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
DELIMITER //
CREATE TRIGGER `before_insert_barang_keluar` BEFORE INSERT ON `barang_keluar` FOR EACH ROW BEGIN
  -- Ambil harga terbaru dari tabel barang dan simpan di barang_keluar sebelum insert
  SET NEW.harga = (SELECT harga FROM barang WHERE id_barang = NEW.id_barang);

  -- Pastikan stok cukup sebelum mengurangi
  IF (SELECT stock FROM barang WHERE id_barang = NEW.id_barang) < NEW.jumlah THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Stok tidak cukup!';
  END IF;

  -- Kurangi stok di tabel barang
  UPDATE barang 
  SET stock = stock - NEW.jumlah
  WHERE id_barang = NEW.id_barang;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger inventory.tambah_stock
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
DELIMITER //
CREATE TRIGGER `tambah_stock` AFTER INSERT ON `barang_masuk` FOR EACH ROW UPDATE barang 
SET stock = stock + NEW.stock
WHERE id_barang = NEW.id_barang//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
