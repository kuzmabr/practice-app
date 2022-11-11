require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

app.use(express.json())

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

const dist = path.join(__dirname, '../client/dist');


app.use('/', express.static(dist))
// Logs the time, session_id, method, and url of incoming requests.

// Serves up all static and generated assets in ../client/dist.

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/user', (req, res)=> {
  console.log(req.body);
    db.queryAsync(
        `INSERT INTO user VALUES ('${req.body.formData.firstName}', '${req.body.formData.lastName}', '${req.body.formData.email}', '${req.body.formData.password}', '${req.session_id}')`
  ).then(()=>{res.sendStatus(201)})
});

app.post('/address', (req, res)=> {
  console.log('here is the address body', req.body);
  db.queryAsync(
    `INSERT INTO address VALUES ('${req.body.form2Data.stAddress1}', '${req.body.form2Data.stAddress2}', '${req.body.form2Data.city}', '${req.body.form2Data.state}', '${req.body.form2Data.zipCode}', '${req.session_id}')`
  ).then(()=>{res.sendStatus(201)})
})

app.post('/creditcard', (req, res)=> {
  console.log('here is the address body', req.body);
  db.queryAsync(
    `INSERT INTO creditcard VALUES ('${req.body.f3Data.cNum}', '${req.body.f3Data.expDate}', '${req.body.f3Data.cvv}', '${req.session_id}')`
  ).then(()=>{res.sendStatus(201)})
})

app.get('/user', (req,res)=>{
  db.queryAsync(`SELECT * FROM user where session_id = '${req.session_id}'`
  ).then((userData)=>{res.send(userData)})
})

app.get('/address', (req,res)=>{
  db.queryAsync(`SELECT * FROM address where session_id = '${req.session_id}'`
  ).then((addressData)=>{res.send(addressData)})
})

app.get('/creditcard', (req,res)=>{
  db.queryAsync(`SELECT * FROM creditcard where session_id = '${req.session_id}'`
  ).then((cCardData)=>{res.send(cCardData)})
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
