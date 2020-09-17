const defaultPage = require('../routes/index');

module.exports = function (app) {
    app.use('/', defaultPage);
}