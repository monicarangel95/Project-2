-- Drops existing database
DROP DATABASE IF EXISTS spotashow_db;
-- Creates database
CREATE DATABASE spotashow_db;

USE spotashow_db;

-- Create *** table
CREATE TABLE event
(
    id INT NOT NULL
    AUTO_INCREMENT,
    artistName VARCHAR
    (100) NOT NULL
    Date VARCHAR
    (100) NOT NULL,
    Venue VARCHAR
    (100) NOT NULL,
    SELECT Time
    PRIMARY KEY
    (id)
);

   