DROP TABLE IF EXISTS `problems`;
CREATE TABLE IF NOT EXISTS `problems` (
  `id_problem` int NOT NULL AUTO_INCREMENT,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `type_problem` int NOT NULL,
  `photo` varchar(255) NOT NULL,
  `creator` int NOT NULL,
  `state` int NOT NULL DEFAULT '1',
  `date_creation` datetime NOT NULL,
  `date_update` datetime NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id_problem`),
  KEY `fk_user_problem` (`creator`),
  KEY `fk_probem_type` (`type_problem`),
  KEY `fk_problem_state` (`state`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `problem_type`;
CREATE TABLE IF NOT EXISTS `problem_type` (
  `id_type` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `states`;
CREATE TABLE IF NOT EXISTS `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `states` (`id`, `name`) VALUES
(1, 'Déclaré'),
(2, 'En cours'),
(3, 'Résolu');

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `problems`
  ADD CONSTRAINT `fk_probem_type` FOREIGN KEY (`type_problem`) REFERENCES `problem_type` (`id_type`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_problem_state` FOREIGN KEY (`state`) REFERENCES `states` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_user_problem` FOREIGN KEY (`creator`) REFERENCES `users` (`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;

DROP VIEW IF EXISTS view_problem;
CREATE VIEW `view_problem`
 AS SELECT p.`id_problem`, p.`latitude`,p.`longitude`, p.`type_problem`, p.`photo`, p.`state`, p.`date_creation`, p.`date_update`, p.`message`,u.firstname,u.lastname,s.name as stateName,pt.name as problemName FROM `problems`p INNER JOIN users u 
ON u.id_user=p.creator
INNER JOIN states s ON
p.state=s.id
INNER JOIN problem_type pt ON
pt.id_type=p.type_problem;