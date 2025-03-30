CREATE DATABASE dbApiCarros;

USE dbApiCarros;

create table carros
(
	codigo int primary key auto_increment,
    modelo varchar(30),
    placa varchar(7)
);

insert into carros (modelo,placa) values ('fusca Azul','DDD0000');
insert into carros (modelo, placa) values ('honda fit', 'GJG3566');
select * from carros