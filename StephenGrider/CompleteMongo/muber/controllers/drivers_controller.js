const Driver = require('../models/Driver');

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there'});
  },

  index(req, res, next) {
    // pull lng and lat from req.query
    // http://google.com?lng=80&lat=20
    const { lng, lat } = req.query;

    // maxDistance is in meters
    // use parseFloat to prevent error
    // text: '{"error":"\'near\' field must be point"}',
    Driver.geoNear(
      { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
      { spherical: true, maxDistance: 200000 }
    )
      .then(drivers => res.send(drivers))
      .catch(next);
  },

  create(req, res, next) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next)
  },

  edit(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: id }))
      .then(driver => res.send(driver))
      .catch(next);
  },
  delete(req, res, next) {
    const driverId = req.params.id;

    Driver.findByIdAndRemove({ _id: driverId })
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
};


// es5 way
/*
greeting: function(req, res) {

}
*/
