-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2025 at 04:12 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` int(11) NOT NULL,
  `nama` varchar(32) NOT NULL,
  `kategori` enum('F','D','S') NOT NULL,
  `stock` int(11) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `nama`, `kategori`, `stock`, `harga`) VALUES
(23, 'Momogi', 'F', 35, 10000),
(24, 'Permen Mintz', 'F', 25, 10000),
(26, 'Ale Ale', 'D', 10, 15000),
(27, 'Teh Gelas', 'D', 10, 15000),
(29, 'Telur', 'S', 90, 50000),
(30, 'Minyak Goreng', 'S', 10, 20000),
(32, 'Bang Bang', 'F', 10, 15000);

-- --------------------------------------------------------

--
-- Table structure for table `barang_keluar`
--

CREATE TABLE `barang_keluar` (
  `id_bk` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `harga` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang_keluar`
--

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
(39, 29, '2025-02-28 03:11:25', 50000, 5);

--
-- Triggers `barang_keluar`
--
DELIMITER $$
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
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `barang_masuk`
--

CREATE TABLE `barang_masuk` (
  `id_bm` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang_masuk`
--

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

--
-- Triggers `barang_masuk`
--
DELIMITER $$
CREATE TRIGGER `tambah_stock` AFTER INSERT ON `barang_masuk` FOR EACH ROW UPDATE barang 
SET stock = stock + NEW.stock
WHERE id_barang = NEW.id_barang
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `id_pegawai` int(11) NOT NULL,
  `nama` varchar(32) NOT NULL,
  `jabatan` enum('M','A','K') NOT NULL,
  `hp` varchar(16) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`id_pegawai`, `nama`, `jabatan`, `hp`, `email`, `username`, `password`) VALUES
(75, 'Manajer', 'M', '1111', 'manajer@gmail.com', 'manajer1234', '$2a$12$HY36bR/ezGvMPBcKrumULe2zlK7Z77dinS5Nh4gUf5r48Vx4XD/tq'),
(77, 'Admin', 'A', '2222', 'admin@gmail.com', 'admin1234', '$2a$12$kp3OtLtSwTB2N/NWAS25feEsHg4LggKYsFejgv9qrbuEHKXovcsNG'),
(78, 'Kepala Gudang', 'K', '3333', 'kepalagudang@gmail.com', 'kepalagudang1234', '$2a$12$kQiPBKi3o0PPo4B9ESQiZO6RED18uUTqev1GDpGUfc57zBQFFYkO2'),
(79, 'Dede Setiawan', 'M', '1212', 'dedesetiawansumbawa1206@gmail.com', 'dedesetiawan', '$2a$12$Lz7zf5MYQrjhGzSdbkYxvu1r8SXBlvjrlOBNsO7sRJr4Q8ACnJ56S');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`),
  ADD UNIQUE KEY `nama` (`nama`);

--
-- Indexes for table `barang_keluar`
--
ALTER TABLE `barang_keluar`
  ADD PRIMARY KEY (`id_bk`),
  ADD KEY `id_barang` (`id_barang`);

--
-- Indexes for table `barang_masuk`
--
ALTER TABLE `barang_masuk`
  ADD PRIMARY KEY (`id_bm`),
  ADD KEY `id_barang` (`id_barang`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id_pegawai`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `hp` (`hp`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `barang_keluar`
--
ALTER TABLE `barang_keluar`
  MODIFY `id_bk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `barang_masuk`
--
ALTER TABLE `barang_masuk`
  MODIFY `id_bm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `pegawai`
--
ALTER TABLE `pegawai`
  MODIFY `id_pegawai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang_keluar`
--
ALTER TABLE `barang_keluar`
  ADD CONSTRAINT `barang_keluar_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `barang_masuk`
--
ALTER TABLE `barang_masuk`
  ADD CONSTRAINT `barang_masuk_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
