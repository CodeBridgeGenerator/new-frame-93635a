const { Secframework } = require('./secframework.class');
const createModel = require('../../models/secframework.model');
const hooks = require('./secframework.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/secframework', new Secframework(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('secframework');

  service.hooks(hooks);
};