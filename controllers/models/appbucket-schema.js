
'use strict';

const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

//schema definition
var appBucketSchema = new SCHEMA({
    application: { type: String, required: true, unique: true, trim: true },  
    os: { type: String, required: true, unique: false, trim: true },
    recipe: { type: String, required: false, unique: false, default: null, trim: true },
    dockerfile: { type: String, required: false, unique: false, default: null, trim: true },
  });

//validations
appBucketSchema.path('application').required(true, 'application field cannot be empty or null');
appBucketSchema.path('os').required(true, 'os field cannot be empty or null');

//create model
var AppBucket = MONGOOSE.model('AppBucket', appBucketSchema);

module.exports = {
  AppBucket
}
