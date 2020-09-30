const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
// const config = require('config');

isUser = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(403).send('Forbidden 403');
    try {
        jwt.verify(token, 'jwtPrivateKey');
        next();
    } catch (e) {
        res.status(400).send('invalid User Token');
    }
};

exports.isUser = isUser;