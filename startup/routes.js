const defaultPage = require('../routes/index');
const accessRights = require('../routes/accessRights');
const activity = require('../routes/activity');
const archive = require('../routes/archive');
const branch = require('../routes/branch');
const consultantCost = require('../routes/consultantCost');
const classification = require('../routes/classification');
const consultantFunction = require('../routes/consultantFunction');
const contactPerson = require('../routes/contactPerson');
const country = require('../routes/country');
const customer = require('../routes/customer');
const invoice = require('../routes/invoice');
const invoicePosition = require('../routes/invoicePosition');
const lead = require('../routes/lead');
const leadplan = require('../routes/leadplan');
const offer = require('../routes/offer');
const planMonth = require('../routes/planMonth');
const project = require('../routes/project');
const projectFunction = require('../routes/projectFunction');
const projectConsultant = require('../routes/projectConsultant');
const projectTime = require('../routes/projectTime');
const projectYear = require('../routes/projectYear');
const publicHoliday = require('../routes/publicHoliday');
const system = require('../routes/system');
const theme = require('../routes/theme');
const userCategory = require('../routes/userCategory');
const auth = require('../routes/auth');


module.exports = function (app) {
    app.use('/', defaultPage),

        app.use('/api/accessRight', accessRights),
        app.use('/api/activity', activity),
        app.use('/api/archive', archive),
        app.use('/api/branch', branch),
        app.use('/api/consultantCost', consultantCost),
        app.use('/api/contactPerson', contactPerson),
        app.use('/api/consultantFunction', consultantFunction),
        app.use('/api/classification', classification),
        app.use('/api/country', country),
        app.use('/api/customer', customer),
        app.use('/api/invoice', invoice),
        app.use('/api/invoicePosition', invoicePosition),
        app.use('/api/lead', lead),
        app.use('/api/offer', offer),
        app.use('/api/leadplan', leadplan),
        app.use('/api/project', project),
        app.use('/api/projectConsultant', projectConsultant),
        app.use('/api/projectFunction', projectFunction),
        app.use('/api/projectTime', projectTime),
        app.use('/api/projectYear', projectYear),
        app.use('/api/publicHoliday', publicHoliday),
        app.use('/api/system', system),
        app.use('/api/theme', theme),
        app.use('/api/userCategory', userCategory),
        app.use('/api/auth', auth)
};