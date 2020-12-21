import {Shade} from '../app/core/shade/domain/shade';
import {ShadeColor, ShadeName} from '../app/core/shade/domain/shadeValueObject';
import {UniqueId} from '../app/shared/domain/uniqueId';


export const shadeJsonFixtureList = [
  {
    id: '1',
    name: 'blue shade',
    colorId: 'colorId1',
    color: 'blue'
  },
  {
    id: '2',
    name: 'red shade',
    colorId: 'colorId2',
    color: 'red'
  },
  {
    id: '3',
    name: 'green shade',
    colorId: 'colorId3',
    color: 'green'
  },
  {
    id: '4',
    name: 'yellow shade',
    colorId: 'colorId4',
    color: 'yellow'
  },
  {
    id: '5',
    name: 'pink shade',
    colorId: 'colorId5',
    color: 'pink'
  },
  {
    id: '6',
    name: 'crimson shade',
    colorId: 'colorId6',
    color: 'crimson'
  },
  {
    id: '7',
    name: 'azure shade',
    colorId: 'colorId7',
    color: 'azure'
  }
];
export const singleShadeFixture = Shade.create(shadeJsonFixtureList[0]);
export const shadeListFixturePage1 = [
  Shade.create(shadeJsonFixtureList[0]),
  Shade.create(shadeJsonFixtureList[1]),
  Shade.create(shadeJsonFixtureList[2]),
];
export const shadeListFixturePage2 = [
  Shade.create(shadeJsonFixtureList[3]),
  Shade.create(shadeJsonFixtureList[4]),
  Shade.create(shadeJsonFixtureList[5]),
];
export const shadeResponsePage1Fixture = {
  totalPages: 2,
  pageSize: 3,
  values: [
    shadeJsonFixtureList[0],
    shadeJsonFixtureList[1],
    shadeJsonFixtureList[2]
  ]
};
export const shadeResponsePage2Fixture = {
  totalPages: 2,
  pageSize: 3,
  values: [
    shadeJsonFixtureList[3],
    shadeJsonFixtureList[4],
    shadeJsonFixtureList[5]
  ]
};
