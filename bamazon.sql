drop DATABASE if exists bamazon_db;

create database bamazon_db;

use bamazon_db;

create table products (
item_id VARCHAR(30) NOT NULL,
product_name VARCHAR(30) Not Null,
department_name varchar(30) not null,
price INTEGER(10),
stock_quantity INTEGER(10)
);

INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("1" , "Krumpis necklace", "Charm", 15, 10);


INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("2" , "Ravenclaw necklace", "Charm", 15, 3);

INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("3" , "butter beer soap", "soap", 10, 1);

INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("4" , "cat mug", "dishware", 10, 2);


INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("5" , "Colar", "pets", 20, 1);

INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("6" , "coat", "clothing", 150, 2);

INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("7" , "wand", "harry potter", 50, 1);


INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("8" , "Puffys" , "tickets", 60, 10);

INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("9" , "Horcrox", "something evil", 1000, 7);

INSERT into products (item_id, product_name, department_name, price, stock_quantity)
values ("10" , "stickets", "stationery", 5, 100);

