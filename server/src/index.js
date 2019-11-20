'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('./cors');
const routes = require('./routes');

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/cheese-log', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`DB Connection Error:" ${err.message}`);
  });
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

cors(app);
// routes(app);

app.listen(port);
console.log('Log Server Running on port ' + port);
