require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
const mongoDB = "mongodb://localhost/glossary";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));


const TermSchema = new Schema({
  term: { type: String, required: true, unique: true},
  definition: { type: String, required: true}
});

var termFind = () => {
  return new Promise(function (resolve, reject) {
    if (err) {
      console.log(err);
    } else {
      resolve (termmodels.find());
    }
  })
}


module.exports.termFind = termFind;
module.exports = mongoose.model("TermModel", TermSchema);


// module.exports.newTerm = newTerm;
