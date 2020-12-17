import express = require('express');
import bodyParser from 'body-parser';
import {findAll, findOne} from './controllers/shadeController';

const app: express.Application = express();
const router = express.Router();

router.get('/shades', findAll);
router.get('/shades/:id', findOne);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
