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
correo varchar(30),
telefono varchar(15),
empresa varchar(30)
)

CREATE TABLE cotizacion(
id int primary key AUTO_INCREMENT,
nombreCliente varchar(15),
apellidoCliente varchar(15),
empresaCliente varchar(30),
correoCliene varchar(30),
telefonoCliente varchar(30),
contenido text(140)
)

CREATE TABLE boleta(
id int primary key AUTO_INCREMENT,
idEmpleado int,
salario decimal(10),
afp decimal(10),
renta decimal(10),
isss decimal(10),
descuentos decimal(10),
totalNeto decimal(10),
FOREIGN KEY (idEmpleado) REFERENCES usuario(id)
)

CREATE TABLE inventario(
id int primary key AUTO_INCREMENT,
nombre varchar(30),
cantidad int(10),
modelo varchar(20),
precio decimal(10)
)

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
flush privileges