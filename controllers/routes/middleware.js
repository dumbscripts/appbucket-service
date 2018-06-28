'use strict';

const jwt = require('jsonwebtoken');

//create dummy user object for now - needs to move to user model
const user = {
    id: 1,
    email: 'mahesh.hadimani@philips.com'
}

function generateToken() {
    return jwt.sign(user, process.env.SECRET, { expiresIn: '4h' });
}

function verifyToken(token, res) {
    return jwt.verify(token, process.env.SECRET);
}

function getTokenFromHeader(req) {
    let bearerHeader = req.headers.authorization;
    if (typeof bearerHeader === 'undefined') {
        return undefined;
    } else {
        return bearerHeader.split(' ')[1];
    }
}

module.exports = { generateToken, verifyToken, getTokenFromHeader }