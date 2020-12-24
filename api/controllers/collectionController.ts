import {collectionListJsonFixture} from '../../src/fixture/collection';

const pagination = 3;

export const getCollectionById = (req: any, res: any) => {
  console.log("get collection by id");
  const collection = collectionListJsonFixture.find((e) => e.id === req.params.id);
  res.status(200);
  res.json(collection);
  return;
};

export const getAlLCollections = (req: any, res: any) => {
  let response = collectionListJsonFixture;
  if (req.query.page) {
    // @ts-ignore
    const start = parseInt(req.query.page, 10) * pagination;
    response = response.slice(start, start + pagination);
  }
  res.status(200);
  res.json(response);
  return;
};

export const createCollection = (req: any, res: any) => {
  //console.log(req);
  const response = {id: 'post', name: req.body.name, shades: []};
  res.body = response;
  res.status(201);
  res.send(response);
  console.log(res);
  return;
};
