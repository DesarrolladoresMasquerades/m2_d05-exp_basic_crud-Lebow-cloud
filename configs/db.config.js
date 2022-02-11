const mongoose = require('mongoose');
require("dotenv/config")

mongoose
  .connect(`mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PWD}@cluster0.ezbcm.mongodb.net/Library?authSource=admin&replicaSet=atlas-uwz0p3-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`)
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
