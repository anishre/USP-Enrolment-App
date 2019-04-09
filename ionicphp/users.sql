CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(25) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `DOB` date DEFAULT NULL,
  `gender` varchar(255) NULL,
  `citizenship` varchar(255) NULL,
  `campus` varchar(255) NULL,
  `program_name` varchar(255) NULL,
  `year_joined` year(4) NOT NULL NULL,
  `major_type` varchar(255) NULL,
  `major_one` varchar(255) NULL,
  `major_two` varchar(255) NULL,
  `minor_one` varchar(255) NULL,
  `minor_two` varchar(255) NULL,
  `status` enum('Available','Hold') NOT NULL,
  PRIMARY KEY (id)
); 