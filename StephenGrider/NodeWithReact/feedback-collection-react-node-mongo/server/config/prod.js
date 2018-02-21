// prod.js - production keys here

// Client ID
// 953922525320-892ace84mdp21sem3ngfndl52f3r9jkc.apps.googleusercontent.com
// Client Secret
// ETDl2cp6TLQoYpcEmLOUJuT6


// these keys should be different but using this just for the example
// they are setup in the prod environment (example - heroku: you can setup config vars there)
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
}
