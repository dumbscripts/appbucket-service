'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {theHTTPLog, log4js, morgan} = require('./lib/logger/logger');
const appRouter = require('./api/app');

const app = express();
const logger = log4js.getLogger('server');

const PORT = 3000;
const HOST_NAME = 'localhost';
const DATABASE_NAME = 'AppBucket';

mongoose.connect(`mongodb://${HOST_NAME}/${DATABASE_NAME}`);

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
