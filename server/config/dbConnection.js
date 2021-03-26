const mongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const URL = process.env.MONGO_URI;

let state = {
  db: null,
};

 module.exports.connect = () => {
  const dbName = "vncDb";
  mongoClient.connect(URL, { useUnifiedTopology: true }, (err, data) => {
    if (err) throw err;
    console.log(`Database connected 🦊 `);
    state.db = data.db(dbName);
  });
};
 
 module.exports.get = () => state.db;
