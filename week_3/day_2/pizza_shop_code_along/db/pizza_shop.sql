DROP TABLE pizza_orders;
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
id serial4 primary key,
name VARCHAR(255)
);


CREATE TABLE pizza_orders (
id serial4 primary key,
topping varchar(255),
quantity int2,
customer_id int4 references customers(id)
);


