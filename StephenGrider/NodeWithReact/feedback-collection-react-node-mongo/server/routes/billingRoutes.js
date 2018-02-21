const keys = require('../config/keys');

const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // make sure the user is authenticated - brute way to do it
    // swapped out for adding requireLogin as the second argument
    // if (!req.user) {
    //   return res.status(401).send({ error: 'You must login!'});
    // }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // get a reference to the current user model
    req.user.credits += 5;
    // now save it
    const user = await req.user.save();
    // respond to request with the user
    res.send(user);

  });
};


// module.exports = app => {
//   app.post('/api/stripe', (req, res) => {
//     stripe.charges.create({
//       amount: 500,
//       currency: 'usd',
//       description: '$5 for 5 credits',
//       source: req.body.id
//     })
//   });
// };



/*
Example
Console log of req.body

[0] { id: 'tok_1AzoDdKcjB94etA8zSQ4urkW',
[0]   object: 'token',
[0]   card:
[0]    { id: 'card_1AzoDdKcjB94etA8zYdZJKZI',
[0]      object: 'card',
[0]      address_city: null,
[0]      address_country: null,
[0]      address_line1: null,
[0]      address_line1_check: null,
[0]      address_line2: null,
[0]      address_state: null,
[0]      address_zip: null,
[0]      address_zip_check: null,
[0]      brand: 'Visa',
[0]      country: 'US',
[0]      cvc_check: 'pass',
[0]      dynamic_last4: null,
[0]      exp_month: 10,
[0]      exp_year: 2020,
[0]      funding: 'credit',
[0]      last4: '4242',
[0]      metadata: {},
[0]      name: 'fdfas@fasfsaf.com',
[0]      tokenization_method: null },
[0]   client_ip: '74.12.175.222',
[0]   created: 1504883793,
[0]   email: 'fdfas@fasfsaf.com',
[0]   livemode: false,
[0]   type: 'card',
[0]   used: false }
*/
