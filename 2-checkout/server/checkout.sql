CREATE DATABASE checkout;

USE checkout;


CREATE TABLE user (
firstName VARCHAR(30),
lastName VARCHAR(30),
email_id VARCHAR(50),
password VARCHAR(50),
session_id VARCHAR(50),
PRIMARY KEY (session_id)
);

CREATE TABLE address (
  stAddress1 VARCHAR (30),
  stAddress2 VARCHAR (10),
  city VARCHAR (50),
  state VARCHAR (50),
  zipCode INT NOT NULL,
  session_id VARCHAR(50),
  PRIMARY KEY (session_id)
);

CREATE TABLE creditcard (
  cNum INT NOT NULL,
  cvv INT NOT NULL,
  billZip INT NOT NULL,
  PRIMARY KEY (cNum),
  session_id VARCHAR(50),
  PRIMARY KEY (session_id)
);

