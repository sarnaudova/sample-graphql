const express = require('express');
const graphqlHttp = require('express-graphql')
const graphqlEditor = require('graphql-playground-middleware-express').default;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const {catch404, errorHandler} = require('../libs/errorHandling');
const mongo = require('../libs/connector');
const schema = require('../graphql/schema');




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/graphql', graphqlHttp({
  schema,
  pretty:true,
  context: {
    mongo
  },
  graphiql : true
}));

app.use('/playground', graphqlEditor({
  endpoint: '/graphql'
}));

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

// test queries
// http://localhost:3500/graphql?query=query{
//   restaurants{
//     name
//   }
// }

module.exports = app;
