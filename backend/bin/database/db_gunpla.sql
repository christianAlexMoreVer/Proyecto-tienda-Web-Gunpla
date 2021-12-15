USE master
DROP DATABASE db_gunpla
CREATE DATABASE db_gunpla
Use db_gunpla

create table Maqueta(
idMaqueta INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
precio INT NOT NULL,
escala VARCHAR (5) NOT NULL,
tipoGrado VARCHAR (20) NOT NULL,
breveIntro VARCHAR (99),
descripcion VARCHAR (800),
imgFileName VARCHAR (255) 
)

create table Usuario(
idUsuario INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
nombre VARCHAR(20) NOT NULL,
apellidos VARCHAR(50) NOT NULL,
contrasena VARCHAR (1000) NOT NULL,
correoElectronico VARCHAR (320) NOT NULL UNIQUE,
imgUser VARCHAR (255),
admin BIT DEFAULT 0
)

create table Pedido(
idPedido INT IDENTITY(1,1),
idUsuarioPedido INT NOT NULL,
idMaqueta INT NOT NULL,
PRIMARY KEY (idPedido),
FOREIGN KEY (idUsuarioPedido) REFERENCES Usuario(idUsuario) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (idMaqueta) REFERENCES Maqueta(idMaqueta) ON UPDATE CASCADE ON DELETE CASCADE
)

insert into Maqueta (nombre, precio, escala, tipoGrado, breveIntro, descripcion, imgFileName)
values('High mobility type Zaku II Char', 43, '1/144', 'Real Grade', 'El mecha del conocido char Aznable que tambine lo llamaban el cometa rojo','descripcion','ZakuIIChar_1.jpg')

insert into Maqueta (nombre, precio, escala, tipoGrado, breveIntro, descripcion, imgFileName)
values('Zaku II', 50, '1/144', 'Real Grade', 'El mecha de fabricación en standar para el gobierno de Zeon', 'descripcion', 'ZakuII_2.jpg')

insert into Maqueta (nombre, precio, escala, tipoGrado, breveIntro, descripcion, imgFileName)
values('RX-78-2 Gundam', 60, '1/144', 'Real Grade', 'El primer Gundam que existio y que piloto nuestro piloto más querido Amuro Ray', 'descripcion', 'RX-78-2_3.jpg')

insert into Usuario (nombre, apellidos, contrasena, correoElectronico, imgUser, admin)
values('Christian', 'Moreno', '$2a$10$kh3OxQ6YO.Mmo0n0U2avPeCUI7YcX8s0X0dK5AtHu6K.tXclLto1u', 'correo@gmail.com','Default.png',1)

insert into Pedido (idUsuarioPedido, idMaqueta)
values(1, 1)