const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The express app', () => {
    it('handles a GET request to /api', (done) => {
      // request call from supertest library
      request(app)
        .get('/api')
        .end((err,response) => {
          assert(response.body.hi === 'there');
          done();
        });
    });
});
