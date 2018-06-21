
'use strict';

const express = require('express');
const {AppBucket} = require('../controllers/models/appbucket-schema');
const mh = require('../lib/mongoose/mongoose-helpers').MongooseHelpers;
const appbucketRouter = require('../controllers/routes/appbucket-route')


var appRouter = express.Router();

appRouter.route('/create')
.post(function(req, res) { appbucketRouter.postApps(req, res) } );

appRouter.route('/retrieve')
.get(function(req, res) { appbucketRouter.getApps(req, res)} );

appRouter.route('/update/:id')
.put(function(req, res) { appbucketRouter.updateApp(req, res) });

appRouter.route('/delete/:id')
.delete(function(req, res) { appbucketRouter.deleteApp(req, res) });

module.exports = appRouter;