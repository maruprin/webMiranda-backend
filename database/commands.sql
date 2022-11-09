CREATE DATABASE mirandadb;

USE mirandadb;

CREATE TABLE rooms (
    id INT NOT NULL AUTO_INCREMENT,
    number VARCHAR(255),
    facilities VARCHAR(255),
    bed_type VARCHAR(255),
    status VARCHAR(255),
    rate INT,
    description VARCHAR(255),
    offer INT,
    discount INT, 
    name VARCHAR(255),
    PRIMARY KEY (id)
); 

CREATE TABLE bookings (
    id INT NOT NULL AUTO_INCREMENT,
    room_id INT,
    guest VARCHAR(255),
    order_date DATE NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    special_request varchar(500),
    room_type VARCHAR(255),
    status TINYINT,
    PRIMARY KEY (id),
    FOREIGN KEY (room_id) REFERENCES rooms(id)
); 

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    contact VARCHAR(255),
    photo VARCHAR(255),
    work_position VARCHAR(255),
    start_date DATE NOT NULL,
    status BOOLEAN,
    password VARCHAR(255),
    job_desk VARCHAR(255),
    PRIMARY KEY (id)
); 

CREATE TABLE contact (
    id INT NOT NULL AUTO_INCREMENT,
    customer VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    date DATE NOT NULL,
    phone VARCHAR(255),
    subject VARCHAR(255),
    comment varchar(500),
    archive BOOLEAN,
    PRIMARY KEY (id)
); 