'use strict';

const mongoose = require('mongoose');

module.exports.MongooseHelpers = {

    isValidObjectId: function(objectId) {
        return mongoose.Types.ObjectId.isValid(objectId);
    }

}