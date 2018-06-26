'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {theHTTPLog, log4js, morgan} = require('./lib/logger/logger');
const appRouter = require('./api/app');
const config = require('./config/config');

const app = express();
const logger = log4js.getLogger('server');

const PORT = process.env.PORT;
const DATABASE_NAME = process.env.DATABASE_NAME;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(`${MONGODB_URI}/${DATABASE_NAME}`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(theHTTPLog);
app.use('/pdp/api/', appRouter);

app.listen(PORT, () => {
  logger.info(`listening on port ${PORT}..`)
});
