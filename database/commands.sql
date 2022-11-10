CREATE DATABASE miranda;

USE miranda;

CREATE TABLE photos(
  id INT AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255)
);

CREATE TABLE facilities(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE rooms (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    number VARCHAR(255),
    bed_type VARCHAR(255),
    status VARCHAR(255),
    rate INT,
    description VARCHAR(255),
    offer BOOLEAN,
    discount INT,
    name VARCHAR(255)
);

CREATE TABLE bookings (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    room_id INT,
    guest VARCHAR(255),
    order_date DATE NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    special_request varchar(500),
    room_type VARCHAR(255),
    status TINYINT,
    FOREIGN KEY (room_id) REFERENCES rooms(id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    contact VARCHAR(255),
    photo_id INT,
    work_position VARCHAR(255),
    start_date DATE NOT NULL,
    status BOOLEAN,
    password VARCHAR(255),
    job_desk VARCHAR(255),
    FOREIGN KEY (photo_id) REFERENCES photos(id)
);

CREATE TABLE contact (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    date DATE NOT NULL,
    phone VARCHAR(255),
    subject VARCHAR(255),
    comment varchar(500),
    archive BOOLEAN
);

CREATE TABLE bookings_rooms(
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT,
    booking_id INT,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);

CREATE TABLE rooms_photos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT,
    photo_id INT,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    FOREIGN KEY (photo_id) REFERENCES photos(id)
);

CREATE TABLE rooms_facilities(
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT,
    facility_id INT,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    FOREIGN KEY (facility_id) REFERENCES facilities(id)
);

//crear un usuario
CREATE USER 'user_miranda'@'localhost' IDENTIFIED BY 'MIFXT+6mtd4yHPCs';

//dar permisos a un usuario
GRANT PRIVILEGE ON miranda.* TO 'user_miranda'@'localhost';
GRANT ALL PRIVILEGES ON miranda . * TO 'user_miranda'@'localhost';
FLUSH PRIVILEGES;

//para ver usuarios
SELECT User, Host FROM mysql.user;

//para ver permisos de un usuario
SHOW GRANTS FOR 'user_miranda'@'localhost';