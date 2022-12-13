/*necessário a unaccent*/

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE EXTENSION unaccent

CREATE DATABASE IF NOT EXISTS products_mangement;

\c products_mangement;

CREATE TABLE IF NOT EXISTS categories(
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS products(
	id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	price DECIMAL(8,2) NOT NULL,
	category_id INTEGER,
	CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(id)
);