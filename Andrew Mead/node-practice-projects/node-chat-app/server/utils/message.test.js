var expect = require('expect');
var {generateMessage} = require('./message'); // require module we are testing

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = "James"
    var text = "Some text";
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});
