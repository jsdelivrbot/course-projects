const assert = require('assert');
const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Driver = mongoose.model('driver');


describe('Drivers controller', () => {
  // Get a count of the drivers (async so returns a promise)
  // After the post, take another count and if the count + 1 === new count
  // Then the post was a success
  it('Post to /api/drivers creates a new driver', (done) => {
    Driver.count().then(count => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          Driver.count().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });

  it('Put to /api/drivers/id can update a record', done => {
    const driver = new Driver({ email: 'test@test.com', driving: false });

    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`)
        .send({ driving: true })
        .end(() => {
          Driver.findOne({ email: 'test@test.com' })
            .then(driver => {
              assert(driver.driving === true);
              done();
            });
        });
    });
  });

  it('DELETE to /api/drivers/id can delete a driver', done => {
    // make new driver -- save them -- fetch -- assert not found
    const driver = new Driver({ email: 'test@test.com' });

    driver.save().then(() => {
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        .end(() => {
          Driver.findOne({ email: 'test@test.com' })
            .then((driver) => {
              assert(driver === null);
              done();
            });
        });
    });
  });

  it('GET to /api/drivers find drivers in a location', done => {
    // create 2 drivers with different lng and lat
    // make sure right one is returned
    const seattleDriver = new Driver({
      email: 'seatlle@test.com',
      geometry: { type: 'Point', coordinates: [-122.4759902, 47.6147628]}
    });
    const miamiDriver = new Driver({
      email: 'miami@test.com',
      geometry: { type: 'Point', coordinates: [-80.253, 25.791]}
    });
    // save both drivers to DB
    Promise.all([seattleDriver.save(), miamiDriver.save() ])
      .then(() => {
        request(app)
          .get('/api/drivers?lng=-80&lat=25')
          .end((err, response) => {
            //console.log(response);
            assert(response.body.length === 1);
            assert(response.body[0].obj.email === 'miami@test.com');
            done();
          });
      });
  });
});
