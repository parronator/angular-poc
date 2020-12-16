import express = require('express');
import {shadeJSONFixturePage1} from '../src/fixture/shade';

const app: express.Application = express();

app.get('/shades', (req, res) => {
  res.status(200);
  res.json(shadeJSONFixturePage1);
});

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
