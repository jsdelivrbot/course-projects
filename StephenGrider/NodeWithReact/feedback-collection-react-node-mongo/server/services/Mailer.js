  // * Most of the code in here is just what send grid wants as per documentation

const sendgrid = require('sendgrid');
const helper = sendgrid.mail;   // ... could also ahve dono const { mail } = sendgrid; but we want to call it helper
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  // first argument is an object
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    // build in function from extened Mail object (from sendgrid)
    this.addContent(this.body);
    // enable click tracking
    this.addClickTracking();
    this.addRecipients();
  }


  formatAddresses(recipients) {
      return recipients.map(({ email }) => {
        return new helper.Email(email);
      });
  }


  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  // take the template and send it to send grid
  async send() {
    const request = this.sgApi.emptyRequest({
       method: 'POST',
       path: '/v3/mail/send',
       body: this.toJSON()
     });

    // on the sgApi object call the API function provided by send grid
    const response = await this.sgApi.API(request);
    return response;
  }

}

module.exports = Mailer;

// Mailer is extending the helper object from the sendgrid object
