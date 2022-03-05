const express = require('express');
const mongoose = require("mongoose")

const { graphqlHTTP } = require("express-graphql")
const graphQLSchema = require('./src/schema')
const graphQLSResolvers = require('./src/resolvers')

require('dotenv/config')

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLSResolvers,
    graphiql: true
  })
)

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(process.env.DB_URI, options)
.then(() => app.listen(process.env.PORT, () => console.log('http://localhost:' + process.env.PORT)))
.catch((err) => {throw err})
