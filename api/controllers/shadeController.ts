import {shadeJSONFixture} from '../../src/fixture/shade';

const pagination = 3;

export const findOne = (req: any, res: any) => {
  const shade = shadeJSONFixture.find((e) => e.id === req.params.id);
  res.status(200);
  res.json(shade);
  return;
};

export const findAll = (req: any, res: any) => {
  let response = shadeJSONFixture;
  if (req.query.page) {
    // @ts-ignore
    const start = parseInt(req.query.page, 10) * pagination;
    response = response.slice(start, start + pagination);
  }
  res.status(200);
  res.json(response);
  return;
};
