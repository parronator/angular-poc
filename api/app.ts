import express = require('express');
import bodyParser from 'body-parser';
import {getAllShades, getShadeById} from './controllers/shadeController';
import {getAllProducts, getProductById} from './controllers/productController';
import {createCollection, getAlLCollections, getCollectionById} from './controllers/collectionController';

const app: express.Application = express();
const router = express.Router();

router.get('/shades', getAllShades);
router.get('/shades/:id', getShadeById);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

router.get('/collection', getAlLCollections);
router.get('/collection/:id', getCollectionById);
router.post('/collection/create', createCollection);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
