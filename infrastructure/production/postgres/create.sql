-- Enable PostGIS (includes raster)
CREATE EXTENSION postgis;

-- Enable Topology
CREATE EXTENSION postgis_topology;

create table if not exists users (
	id serial primary key,
	email varchar NOT NULL,
	passwrord varchar NOT NULL,
	created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

create table if not exists devices (
	id serial primary key,
	name varchar NOT NULL,
	serial_number varchar NOT NULL,
	user_id integer NOT NULL,
	created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

create table if not exists device_groups (
--SQL table with id and reference to devices and user id
	id serial primary key,
	user_id int,
	device_id int,
	foreign key(user_id) references users(id),
	foreign key(device_id) references devices(id)
);

create table if not exists trigger_types (
	id serial primary key,
	name varchar NOT NULL,
	type varchar NOT NULL,
	created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

create table if not exists triggers (
	id serial primary key,
	name varchar NOT NULL,
	type int,
	created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
	foreign key(type) references trigger_types(id)
);

create table if not exists devices_triggers (
	device_id int,
	trigger_id int,
	foreign key(device_id) references devices(id),
	foreign key(trigger_id) references triggers(id)
);

