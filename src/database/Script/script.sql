CREATE DATABASE horarioscefet;
USE horarioscefet;

CREATE TABLE `pauta` (
	`id_pauta` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`pauta` VARCHAR(255) NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME
) COMMENT = 'Tabela que armazena as Tags das noticias';

CREATE TABLE `noticia` (
	`id_noticia` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`titulo` VARCHAR(255) NOT NULL,
	`subtitulo` TEXT,
	`texto` TEXT NOT NULL,
	`imagem` TEXT,
	`link_fonte` TEXT,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME
) COMMENT = 'Tabela que armazena as informações das notícias publicadas';

CREATE TABLE `pauta_noticia` (
	`id_pauta` INT NOT NULL,
    `id_noticia` INT NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME,
    PRIMARY KEY (`id_pauta`, `id_noticia`),
    FOREIGN KEY (`id_pauta`) REFERENCES `pauta` (`id_pauta`),
    FOREIGN KEY (`id_noticia`) REFERENCES `noticia` (`id_noticia`)
) COMMENT = 'Tabela de relação entre uma notícia e o assunto que ela está relacionada';

CREATE TABLE `usuario` (
	`id_usuario` SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`nome` VARCHAR(255) NOT NULL,
	`senha` VARCHAR(15) NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME
) COMMENT = 'Tabela que armazena as informações de usuarios';

CREATE TABLE `sala` (
	`id_sala` SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`sala` VARCHAR(5) NOT NULL,
	`pavilhao` VARCHAR(1) NOT NULL,
	`andar` ENUM('T', '1', '2') NOT NULL,
	`acessivel` BOOL NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME
) COMMENT = 'Tabela que armazena as informações das salas';

CREATE TABLE `professor` (
	`id_professor` SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME
) COMMENT = 'Tabela que armazena as informações dos professores';

CREATE TABLE `area` (
	`id_area` SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`area` VARCHAR(255) NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME
) COMMENT = 'Tabela que armazena as áreas disciplinares';

CREATE TABLE `disciplina` (
	`id_disciplina` SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL,
	`carga_horaria` INT NOT NULL,
	`credito` INT NOT NULL,
	`optativa` TINYINT(1) NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME
) COMMENT = 'Tabela que armazena as informações das disciplinas';

CREATE TABLE `area_disciplinar` (
	`id_area` SMALLINT NOT NULL,
    `id_disciplina` SMALLINT NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME,
    PRIMARY KEY (`id_area`, `id_disciplina`),
    FOREIGN KEY (`id_area`) REFERENCES `area` (`id_area`),
    FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id_disciplina`)
) COMMENT = 'Tabela para vincular uma disciplina a uma área disciplinar';

CREATE TABLE `ementa` (
	`id_ementa` SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`descricao` TEXT NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME,
	`id_disciplina` SMALLINT NOT NULL,
	FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id_disciplina`)
) COMMENT = 'Tabela que armazena as ementas das disciplinas';

CREATE TABLE `grade` (
	`id_grade` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`anoletivo` SMALLINT NOT NULL,
	`semestre` TINYINT NOT NULL,
    `periodo` TINYINT NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME
) COMMENT = 'Tabela que armazena as grades';

CREATE TABLE `aula` (
	`id_aula` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`horario_inicio` TIME NOT NULL,
	`horario_fim` TIME NOT NULL,
	`dia` ENUM('Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo') NOT NULL,
	`createdat` DATETIME NOT NULL,
	`updatedat` DATETIME NOT NULL,
	`deletedat` DATETIME,
	`id_grade` INT NOT NULL,
	`id_disciplina` SMALLINT NOT NULL,
	`id_professor` SMALLINT NOT NULL,
	`id_sala` SMALLINT NOT NULL,
	FOREIGN KEY (`id_grade`) REFERENCES `grade` (`id_grade`),
    FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id_disciplina`),
    FOREIGN KEY (`id_professor`) REFERENCES `professor` (`id_professor`),
    FOREIGN KEY (`id_sala`) REFERENCES `sala` (`id_sala`)
) COMMENT = 'Tabela que armazena as associações entre grade e professor';


