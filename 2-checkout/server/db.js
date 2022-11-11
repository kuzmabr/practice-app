const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS user (firstName VARCHAR(30),lastName VARCHAR(30),email_id VARCHAR(50),password VARCHAR(50),session_id VARCHAR(50) UNIQUE,PRIMARY KEY (session_id))"
      )
  )
  .catch((err) => console.log(err));

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS address (stAddress1 VARCHAR (30),stAddress2 VARCHAR (10),city VARCHAR (50),state VARCHAR (50),zipCode INT NOT NULL,session_id VARCHAR(50) UNIQUE,PRIMARY KEY (session_id))"
      )
  )
  .catch((err) => console.log(err));

  db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS creditcard (cNum INT NOT NULL,cvv INT NOT NULL,billZip INT NOT NULL,session_id VARCHAR(50) UNIQUE,PRIMARY KEY (session_id))"
      )
  )
  .catch((err) => console.log(err));


module.exports = db;

