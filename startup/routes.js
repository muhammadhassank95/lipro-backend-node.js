const defaultPage = require('../routes/index');
const accessRights = require('../routes/accessRights');
const activity = require('../routes/activity');
const auth = require('../routes/auth');


module.exports = function (app) {
    app.use('/', defaultPage),

        app.use('/api/accessRight', accessRights),
        app.use('/api/activity', activity),
        app.use('/api/auth', auth)
};