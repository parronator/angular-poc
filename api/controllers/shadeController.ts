import {shadeJsonFixtureList} from '../../src/fixture/shade';

const pagination = 3;

export const getShadeById = (req: any, res: any) => {
  const shade = shadeJsonFixtureList.find((e) => e.id === req.params.id);
  res.status(200);
  res.json(shade);
  return;
};

export const getAllShades = (req: any, res: any) => {
  let response: any = shadeJsonFixtureList;
  if (req.query.orderBy) {
    response = shadeJsonFixtureList.sort((a, b) => {
      if (req.query.orderDirection === 'ascend') {
        // @ts-ignore
        return (a[req.query.orderBy] > b[req.query.orderBy]) ? -1 : 1;
      }
      // @ts-ignore
      return (a[req.query.orderBy] > b[req.query.orderBy]) ? 1 : -1;
    });
  }
  if (req.query.page) {
    // @ts-ignore
    const start = parseInt(req.query.page - 1, 10) * pagination;
    response = {
      totalPages: Math.ceil(shadeJsonFixtureList.length / pagination),
      pageSize: pagination,
      values: shadeJsonFixtureList.slice(start, start + pagination)
    };
  }
  res.status(200);
  res.json(response);
  return;
};
