'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const api = require('./api');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  })
);

if (config.MODE === 'development') {
  app.use(morgan('dev'));
}

app.use('/api', api);

app.use('/__static__', express.static(path.join(__dirname, config.STATIC_DIR)));

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, config.STATIC_DIR, 'index.html'));
});

/* eslint-disable */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).end();
});

app.listen(config.PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `listening at http://localhost:${config.PORT} (${config.MODE} mode)`
    );
  }
});
