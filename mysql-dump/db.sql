-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 20, 2023 at 06:14 PM
-- Server version: 8.0.32
-- PHP Version: 7.4.3-4ubuntu2.18

use 'expressmvc';

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expressmvc`
--

-- --------------------------------------------------------

--
-- Table structure for table `genders`
--

CREATE TABLE `genders` (
  `id` int NOT NULL,
  `gender` char(6) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `genders`
--

INSERT INTO `genders` (`id`, `gender`, `created_at`, `updated_at`) VALUES
(1, 'Female', '2023-02-07 22:03:07', '2023-02-07 22:03:07'),
(2, 'Male', '2023-02-07 22:03:07', '2023-02-07 22:03:07');

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `id` int NOT NULL,
  `sport_name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`id`, `sport_name`, `created_at`, `updated_at`) VALUES
(1, 'Basketball', '2023-02-07 22:32:53', '2023-02-07 22:32:53'),
(2, 'Volleyball', '2023-02-07 22:32:53', '2023-02-07 22:32:53'),
(3, 'Baseball', '2023-02-07 22:32:53', '2023-02-07 22:32:53'),
(4, 'Soccer', '2023-02-07 22:32:53', '2023-02-07 22:32:53'),
(5, 'Football', '2023-02-07 22:32:53', '2023-02-07 22:32:53');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `email`, `password`, `first_name`, `last_name`, `created_at`, `updated_at`) VALUES
(1, 'mj@codingdojo.com', '$2a$10$zR.sHwYD9SHv7b9U7VmS6.AOn3stZ4GXzn27RAs6YQ.rsyaLb8sie', 'Michael', 'Jordan', '2023-03-14 18:06:27', '2023-03-14 18:06:27'),
(2, 'paul@gmail.com', '$2a$10$zR.sHwYD9SHv7b9U7VmS6.AOn3stZ4GXzn27RAs6YQ.rsyaLb8sie', 'Paul Abib', 'Camano', '2023-03-14 18:06:27', '2023-03-14 18:06:27'),
(6, 'trx@mail.com', '$2a$10$7JwE4mI5qV/vcFoJsL4qJOlaG9OH1mA988ZJDQD9Le7vMUvAZijla', 'Trexchy', 'Camano', '2023-03-14 21:36:09', '2023-03-14 21:36:09'),
(7, 'lcordial@village88.com', '$2a$10$5i6XFVjKUTxpkE/knV/fTeG5wFR8sXTHlg9FpolF84e7BL7VjUetu', 'Lenard', 'Cordial', '2023-03-14 21:47:29', '2023-03-14 21:47:29'),
(8, 'kigcasan@village88.com', '$2a$10$q1TUiRlG3yY/zuJYBE/kH.6hwTR9G6FYBevwvFAteHnoLYEVGjT3.', 'Karen', 'Igcasan', '2023-03-15 09:01:47', '2023-03-15 09:01:47'),
(9, 'mae05@gmail.com', '$2a$10$u.5QFd37NBkrvwb1vD6kle8cADcTx.G/IN4vbl7HaCS1I8Qjjej/K', 'Trexchy Mae', 'Camano', '2023-03-16 10:21:35', '2023-03-16 10:21:35'),
(10, 'mc@gmail.com', '$2a$10$5NurLdhCbGaoRqe0.PYAeuOtaVoVXIaHxJIOTvpSNv7jAPcLKTMoi', 'Mae', 'Camano', '2023-03-16 12:59:48', '2023-03-16 12:59:48'),
(11, 'mae055@mail.com', '$2a$10$Y16pF0.SXG0592mfuQ6Qie2sXzPxe3OnhmazorQ7/KTw005qvKEx.', 'Mae', 'Cam', '2023-03-16 19:30:55', '2023-03-16 19:30:55'),
(12, 'mark16@gmail.com', '$2a$10$oRMo7A6qNcu4DeZ6.XzWzOzP1TKKLIosMJLIj9bcPKinh.A9eGvD2', 'Mark', 'Camano', '2023-03-16 12:28:32', '2023-03-16 12:28:32'),
(13, 'tantan@gmail.com', '$2a$10$4MYlkGJ4cuiry0zbtTdlZefKmoCd/Jf0tGCrFl4JVmQ9HU5.JggoW', 'Tantan', 'Camano', '2023-03-16 12:42:32', '2023-03-16 12:42:32'),
(14, 'paul@yahoo.com', '$2a$10$x0yMHpESLtA7PpeObGjTE.MiJ40qdsgs.D6Rr.FpqoNIa.Kn33/B.', 'Paul', 'Camano', '2023-03-16 14:45:16', '2023-03-16 14:45:16'),
(15, 'paul@mail.com', '$2a$10$YCkfvjF7T.lS74QgTXZb3.FNO3eaLpiuUuohxCFLjQMU0JOgQiZDm', 'Paul', 'Camano', '2023-03-17 15:49:55', '2023-03-17 15:49:55'),
(16, 'paul@m.cc', '$2a$10$XZS6qlqWGtByrhKi.5lv2edqElRNH5rj.6E8eHFriSzr9vA6DjCfy', 'paulaebib', 'camano', '2023-03-17 15:55:51', '2023-03-17 15:55:51'),
(17, 'paul3@m.cc', '$2a$10$KIGflIRvtRJ/Dt/LBxWSyuq1b5xh1towvNj2kzM/fVZuZoiupmoIa', 'Paul3', 'Camano', '2023-03-17 16:01:50', '2023-03-17 16:01:50'),
(18, 'paul4@m.cc', '$2a$10$Hhfo63PNiz3YYL7GNCIDAuvGzU/EN4Cj3XnnKDcDwxIuAZYW5VaBi', 'paul4', 'camanoo', '2023-03-17 16:04:32', '2023-03-17 16:04:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `picture` varchar(1000) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `sport_id` int NOT NULL,
  `gender_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `picture`, `created_at`, `updated_at`, `sport_id`, `gender_id`) VALUES
(1, 'Johnny', 'Abarrientos', 'http://farm9.staticflickr.com/8108/8633353507_c3fe171261_o.jpg', '2023-02-07 23:56:16', '2023-02-07 23:56:16', 1, 2),
(2, 'Freddie', 'Abuda', 'http://1.bp.blogspot.com/-95RgHIg8TDw/TzZ2rZNLP1I/AAAAAAAAAjU/Vc-HqO_hLJM/s640/DSC07636+-+Copy.JPG', '2023-02-07 23:56:16', '2023-02-07 23:56:16', 1, 2),
(3, 'Calvin', 'Abueva', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/PBA_-_Calvin_Abueva_-_Magnolia_Hotshots_-_2021.jpg', '2023-02-07 23:56:16', '2023-02-07 23:56:16', 1, 2),
(4, 'Alvin', 'Abundo', 'https://www.xwhos.com/photo/whois_alvin_abundo_profile_1432260.webp', '2023-02-07 23:56:16', '2023-02-07 23:56:16', 1, 2),
(5, 'Raymond', 'Almazan', 'https://dashboard.pba.ph/assets/players/Almazan.jpg', '2023-02-07 23:56:16', '2023-02-07 23:56:16', 1, 2),
(6, 'Gelo', 'Alolino', 'https://dashboard.pba.ph/assets/players/ter-Alolino2021.png', '2023-02-07 23:56:16', '2023-02-07 23:56:16', 1, 2),
(7, 'Alyssa', 'Valdez', 'https://upload.wikimedia.org/wikipedia/commons/6/61/ALYSSA_VALDEZ_PBB_KUMUNITY_10.png', '2023-02-08 00:33:27', '2023-02-08 00:33:27', 2, 1),
(8, 'Ara', 'Galang', 'https://3.bp.blogspot.com/-D41yA2bupQM/VrC-HnZaqTI/AAAAAAAAD48/-2plPJ5CoKk/s640/2.jpg', '2023-02-08 00:33:27', '2023-02-08 00:33:27', 2, 1),
(9, 'Tatan', 'Pantone', 'https://smorgasbordpinoy.files.wordpress.com/2017/04/1486622_10152891114189271_4602077979297687053_n.jpg', '2023-02-08 00:33:27', '2023-02-08 00:33:27', 2, 1),
(10, 'Angeli', 'Tabaquero', 'https://volleybox.net/media/upload/players/15333471185UMr8.png', '2023-02-08 00:33:27', '2023-02-08 00:33:27', 2, 1),
(11, 'Honus', 'Wagner', 'https://cdn.britannica.com/90/8790-004-7DF5BD20/Honus-Wagner.jpg?w=600&q=60', '2023-02-08 00:41:23', '2023-02-08 00:41:23', 3, 2),
(12, 'Stan', 'Musial', 'https://cdn.britannica.com/58/173158-050-722570F9/Baseball-legend-Stan-the-Man-Musial.jpg?w=600&q=60', '2023-02-08 00:41:23', '2023-02-08 00:41:23', 3, 2),
(13, 'Ty', 'Cobb', 'https://cdn.britannica.com/99/12799-004-5E3BEDBC/Ty-Cobb.jpg?w=600&q=60', '2023-02-08 00:41:23', '2023-02-08 00:41:23', 3, 2),
(14, 'Hank', 'Aaron', 'https://cdn.britannica.com/83/5283-050-20357D2B/Hank-Aaron.jpg?w=600&q=60', '2023-02-08 00:41:23', '2023-02-08 00:41:23', 3, 2),
(15, 'Diego', 'Maradona', 'https://www.scottfujita.com/wp-content/uploads/2021/06/top-10-soccer-players-of-all-time_scottfujita.jpg', '2023-02-08 00:46:53', '2023-02-08 00:46:53', 4, 2),
(16, 'Johan', 'Cruyff', 'https://www.scottfujita.com/wp-content/uploads/2021/06/top-10-soccer-players-of-all-time_scottfujita_2.jpg', '2023-02-08 00:46:53', '2023-02-08 00:46:53', 4, 2),
(17, 'Mia', 'Hamm', 'https://i.guim.co.uk/img/media/b2f02680e1e64f0fb03763f3cc79a9a92835cfc3/0_0_2048_1513/master/2048.jpg?width=620&quality=85&dpr=1&s=none', '2023-02-08 00:46:53', '2023-02-08 00:46:53', 4, 1),
(18, 'Michelle', 'Akers', 'https://i.guim.co.uk/img/media/bfb10f505184652cd092ac6e22685193fa4c0ab3/0_0_2901_1972/master/2901.jpg?width=620&quality=85&dpr=1&s=none', '2023-02-08 00:46:53', '2023-02-08 00:46:53', 4, 1),
(19, 'Cristiano', 'Ronaldo', 'https://media.guim.co.uk/7c08567cb882324c62fbe21efb9f597901c09015/0_146_3500_2101/500.jpg', '2023-02-08 00:50:57', '2023-02-08 00:50:57', 5, 2),
(20, 'Lionel', 'Messi', 'https://media.guim.co.uk/f8ba3e13caceff1db8e8d619b31b5740b32a9d56/0_211_3668_2201/500.jpg', '2023-02-08 00:50:57', '2023-02-08 00:50:57', 5, 2),
(21, 'Alexia', 'Putellas', 'https://media.guim.co.uk/50ce74d7583dd115ea2afb87ecf6c3ab91974151/1190_665_3802_2281/500.jpg', '2023-02-08 00:50:57', '2023-02-08 00:50:57', 5, 1),
(22, 'Beth', 'Mead', 'https://media.guim.co.uk/67a14a85d3203814d686c826ce67c251ba66898a/0_161_2933_1760/500.jpg', '2023-02-08 00:50:57', '2023-02-08 00:50:57', 5, 1),
(23, 'Sam', 'Kerr', 'https://media.guim.co.uk/a608cd1af4517e7f1e6646a97c06ecea65c6896f/294_114_2828_1697/500.jpg', '2023-02-08 00:52:05', '2023-02-08 00:52:05', 5, 1),
(24, 'Lena', 'Oberdorf', 'https://media.guim.co.uk/aa6377169ab26b398c8c67420138dea198e92c25/0_288_4270_2560/500.jpg', '2023-02-08 00:52:05', '2023-02-08 00:52:05', 5, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `fk_users_sports_idx` (`sport_id`),
  ADD KEY `fk_users_genders` (`gender_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_genders` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_users_sports` FOREIGN KEY (`sport_id`) REFERENCES `sports` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
