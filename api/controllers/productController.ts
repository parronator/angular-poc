import {productJSONFixture} from '../../src/fixture/product';

const pagination = 3;

export const getProductById = (req: any, res: any) => {
  const collection = productJSONFixture.find((e) => e.id === req.params.id);
  res.status(200);
  res.json(collection);
  return;
};

export const getAllProducts = (req: any, res: any) => {
  let response = productJSONFixture;
  if (req.query.page) {
    // @ts-ignore
    const start = parseInt(req.query.page, 10) * pagination;
    response = response.slice(start, start + pagination);
  }
  res.status(200);
  res.json(response);
  return;
};
