'use strict';

var env = process.env.NODE_ENV || 'development';

if ((env === "development") || (env == "test")) {
    let config = require("../config.json");

    process.env.DATABASE_NAME = config["DATABASE_NAME"];
    process.env.SECRET = config["SECRET"];

    Object.keys(config["ENV"][env]).forEach((key) => {
        process.env[key] = config["ENV"][env][key];
    });

}