const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // Request Handlers
  // Watch for incoming requests of method GET
  // to the route http://localhost:3050/api
  app.get('/api', DriversController.greeting);

  // no parens on DriversController.create since we do not want to instantly Run it
  // we want to pass the reference
  app.post('/api/drivers', DriversController.create);
  // put to edit/update
  app.put('/api/drivers/:id', DriversController.edit);

  app.delete('/api/drivers/:id', DriversController.delete);

  // geo
  app.get('/api/drivers', DriversController.index);
}
