const mongoose = require('mongoose');

module.exports = function () {
    const db = "mongodb://admin:admin@cluster0-shard-00-00.3tzjp.mongodb.net:27017,cluster0-shard-00-01.3tzjp.mongodb.net:27017,cluster0-shard-00-02.3tzjp.mongodb.net:27017/lipro-db?replicaSet=atlas-jxtdxo-shard-0&ssl=true&authSource=admin";
    mongoose
        .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to mongo Database'))
        .catch(() => console.log('Db not connnected'));
};