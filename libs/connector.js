const { MongoClient }= require('mongodb');
const connectionURL = "mongodb://localhost:27017/";

module.exports = MongoClient.connect(connectionURL)
  .then((dbo) => {
    console.log('Mongodb instance started!');
    return dbo.db('restaurantsdb');
  })
  .catch((err) => {
    if (err) {
      console.error('Found problem with mongodb connector: ', err);
      throw err;
    }
  });