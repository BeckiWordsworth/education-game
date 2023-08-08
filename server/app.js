const http = require('http');
const express = require('express');
const app = express()
const { MongoClient} = require('mongodb');
require('dotenv').config()
// const bcrypt = require("bcrypt-nodejs");
// const uuid = require("uuid-v4");

const port = 3001;

// DB Connection
const mongoUri = process.env.ATLAS_URI;
const dbClient = new MongoClient(mongoUri);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })