const express = require('express');
const expressGraphQL = require('express-graphql'); // compatability between GraphQL and Express
const schema = require('./schema/schema');

const app = express();
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening');
});
