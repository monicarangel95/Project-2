-- Drops existing database
DROP DATABASE IF EXISTS _db;
-- Creates database
CREATE DATABASE _db;

USE _db;

-- Create *** table
CREATE TABLE tableName 
(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    event VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);