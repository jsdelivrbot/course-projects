const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url'); // native from node

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

// requireLogin make sure the user is authenticated
// can have as many arguments as you want as long as there is an eventual res send
module.exports = app => {

  // get all of the surveys created by a user -- use requireLogin to make sure they are authed
  app.get('/api/surveys', requireLogin, async (req, res) => {
    // returns a quer object from mongoose --  Survey.find({ _user: req.user.id })
    const surverys = await Survey.find({ _user: req.user.id })
      .select({ recipients: false });
    res.send(surveys);
  });



  // once user clicks on yes or no in email
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });


  app.post('/api/surveys/webhooks', (req, res) => {
    // pull off survey id and choice
    const p = new Path('/api/surveys/:surveyId/:choice');

    // using lodash chain helper
    _.chain(req.body)
      // map over list of events (the events are in req.body)
      .map(({ email, url }) => {
          // get the path from the url
          //console.log(p.test(pathname));
          const match = p.test(new URL(url).pathname);
          if (match) {
            return {
              email,
              surveyId: match.surveyId,
              choice: match.choice
            };
          }
      })
      // lodash - removes any elements that are undefined
      .compact()
      // lodash remove dulicate records
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
                // don't need async handlers

                // choice is either 'yes' || 'no'
                // evaluates the choice variable so it will either be yes or no
                // [choice ]: 1

                // in the survey that was found - look at the recipients sub document colleciton
                // inside of that there are a lot of records ... to make sure we are upating just the records
                // we want to update add $ inbetween recipients.$.responded
                // go in the sub doc colleciton/find the appropriate recipient / look at their responded property
                // now set it to be true
                Survey.updateOne(
                {
                  _id: surveyId,
                  recipients: {
                    $elemMatch: { email: email, responded: false }
                  }
                },
                {
                  $inc: { [choice]: 1 },
                  $set: { 'recipients.$.responded': true },
                  lastResponded: new Date()
                }
              ).exec();
      })
      .value();

    res.send({});

  });


  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // using es6 so title instead of title: title   etc
    // create an instance of a survey in memory - not inserted yet
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Send email here
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();

      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      // send back updated user model
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }

  });
};



// This   recipients: recipients.split(',').map(email => { return { email: email }});
// is the same as     recipients: recipients.split(',').map(email => ({ email: email.trim() })),
