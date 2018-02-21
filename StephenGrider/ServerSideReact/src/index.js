import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Tell express that it needs to treat public as a static dir available
// to the outside world
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // load data for each component that needs data
  matchRoutes(Routes, req.path).map(({ route}) => {
    return route.loadData ? route.loadData() : null;
  });

  // 2nd argument is the store
  res.send(renderer(req, store));
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
