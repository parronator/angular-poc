
import {collectionListJsonFixture, collectionSingleJsonFixture} from '../../src/fixture/collection';

const pagination = 3;

export const getCollectionById = (req: any, res: any) => {
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
