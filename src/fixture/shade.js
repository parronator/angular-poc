"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadeResponsePage2Fixture = exports.shadeResponsePage1Fixture = exports.shadeListFixturePage2 = exports.shadeListFixturePage1 = exports.singleShadeFixture = exports.shadeJsonFixtureList = void 0;
var shade_1 = require("../app/core/shade/domain/shade");
exports.shadeJsonFixtureList = [
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
exports.singleShadeFixture = shade_1.Shade.create(exports.shadeJsonFixtureList[0]);
exports.shadeListFixturePage1 = [
    shade_1.Shade.create(exports.shadeJsonFixtureList[0]),
    shade_1.Shade.create(exports.shadeJsonFixtureList[1]),
    shade_1.Shade.create(exports.shadeJsonFixtureList[2]),
];
exports.shadeListFixturePage2 = [
    shade_1.Shade.create(exports.shadeJsonFixtureList[3]),
    shade_1.Shade.create(exports.shadeJsonFixtureList[4]),
    shade_1.Shade.create(exports.shadeJsonFixtureList[5]),
];
exports.shadeResponsePage1Fixture = {
    totalPages: 2,
    pageSize: 3,
    values: [
        exports.shadeJsonFixtureList[0],
        exports.shadeJsonFixtureList[1],
        exports.shadeJsonFixtureList[2]
    ]
};
exports.shadeResponsePage2Fixture = {
    totalPages: 2,
    pageSize: 3,
    values: [
        exports.shadeJsonFixtureList[3],
        exports.shadeJsonFixtureList[4],
        exports.shadeJsonFixtureList[5]
    ]
};
