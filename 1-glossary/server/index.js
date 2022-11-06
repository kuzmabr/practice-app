require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const TermModel = require("./db.js");
const {termFind} = require("./db.js");
const mongoDB = "mongodb://localhost/glossary";

const mongoose = require("mongoose");
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

app.use(express.json());

const dist = path.join(__dirname, '../dist');



app.use(express.static(dist))


app.get('/terms', (req, res) => {
  TermModel.find()
    .then((data) => {res.send(data)});
});

app.post('/terms', (req, res) => {
  console.log('inside app.post');
  var termObj = req.body.termDef;
  let newTerm = (data) => {
    console.log('running')

    const nextTerm = new TermModel({ term: data.term, definition: data.definition });

    nextTerm.save((err) => {
      if (err) return console.log(err);
      else {
        console.log('mongo saved the term');
        res.sendStatus(200);
      }
    });

  }

  newTerm(termObj);

})


app.post('/delete', (req, res) => {

  var termName = req.body.dataObj.term;
  TermModel.deleteOne({term: termName})
    .then(function(){
      console.log("Data deleted");
    }).catch(function(error){
      console.log(error);
    })  .then(()=>{res.sendStatus(202)});
})


app.put('/update', (req, res) => {
  var dataObj = req.body.termDef;
  console.log(dataObj);
  TermModel.deleteOne({term: dataObj.term})
    .then(() =>{

      let newTerm = () => {
        console.log('running')

        const nextTerm = new TermModel({ term: dataObj.term, definition: dataObj.definition });

        nextTerm.save((err) => {
          if (err) return console.log(err);
          else {
            console.log('mongo saved the term');
            res.sendStatus(200);
          }
        });

      }

      newTerm(dataObj);

   });
});

app.post('/searchTerm', (req, res) => {
  var searchTerm = req.body.definition
  TermModel.find({definition: new RegExp('^'+searchTerm+'$', "i")})
  .then((data) => {res.send(data)});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})