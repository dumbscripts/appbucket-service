'use strict';

const express = require('express');
const { AppBucket } = require('../models/appbucket-schema');
const mh = require('../../lib/mongoose/mongoose-helpers').MongooseHelpers;

//post - adds an app to the appbucket db
function postApps(req, res) {
    var app = new AppBucket(req.body)
    app.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    })
}

//get - retrieves all the apps
function getApps(req, res) {
    AppBucket.find(req.query)
        .then(apps => {
            res.send(apps)
        }).catch(e => {
            res.send(e);
        })
}

//updates an app based on id
function updateApp(req, res) {
    if (!mh.isValidObjectId(req.params.id)) {
        res.status(400).send(`Not a valid Id - ${req.params.id}`);
    }

    AppBucket.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, item) => {
        if (err) {
            res.status(400).send(err);
        } else if (item == null) {
            res.status(404).send(`Unable to find app with id - 
                ${req.params.id}`);
        } else {
            res.send();
        }
    })
}

//deletes an based on id
function deleteApp(req, res) {
    AppBucket.findByIdAndRemove({ _id: req.params.id }, (err, item) => {
        if (err) {
            res.status(400).send(err);
        }
        else if (item == null) {
            res.status(404).send(`Unable to find app with id - ${req.params.id}`);
        } else {
            res.send();
        }
    })
}

module.exports = { postApps, getApps, updateApp, deleteApp }