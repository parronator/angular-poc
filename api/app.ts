import express = require('express');
import bodyParser from 'body-parser';
import {getAllShades, getShadeById} from './controllers/shadeController';
import {getAllProducts, getProductById} from './controllers/productController';

const app: express.Application = express();
const router = express.Router();

router.get('/shades', getAllShades);
router.get('/shades/:id', getShadeById);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
