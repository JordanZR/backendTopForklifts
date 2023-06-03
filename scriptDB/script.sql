CREATE DATABASE topForkLifts
use topForkLifts

CREATE TABLE usuario(
id int primary key AUTO_INCREMENT,
nombre varchar(15),
apellido varchar(15),
correo varchar(30),
password_ varchar(20),
tipo varchar(15)
)

CREATE TABLE cliente(
id int primary key AUTO_INCREMENT,
nombre varchar(15),
apellido varchar(15),
correo varchar(60),
telefono varchar(15),
empresa varchar(45)
)


CREATE TABLE cotizacion(
id int primary key AUTO_INCREMENT,
idCliente int,
nombreCliente varchar(15),
apellidoCliente varchar(15),
empresaCliente varchar(45),
correoCliente varchar(60),
telefonoCliente varchar(30),
contenido text(140),
status_ varchar(15) default'pendiente',
FOREIGN KEY(idCliente) REFERENCES cliente(id)
)


CREATE TABLE boleta(
id int primary key AUTO_INCREMENT,
idEmpleado int,
salario double,
afp double,
renta double,
isss double,
descuentos double,
totalNeto double,
FOREIGN KEY (idEmpleado) REFERENCES usuario(id)
)

CREATE TABLE inventario(
id int primary key AUTO_INCREMENT,
nombre varchar(30),
cantidad int(10),
modelo varchar(20),
precio double
)
ALTER TABLE inventario ADD trabajador_cambio_id INT FOREIGN KEY trabajador_cambio_id REFERENCES usuario(id)


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
flush privileges
