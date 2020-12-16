"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadeJSONFixturePage2 = exports.shadeJSONFixturePage1 = exports.shadeListFixturePage2 = exports.shadeListFixturePage1 = exports.shadeJSONFixture = exports.shadeFixture = void 0;
var shade_1 = require("../app/core/shade/domain/shade");
var shadeValueObject_1 = require("../app/core/shade/domain/shadeValueObject");
var uniqueId_1 = require("../app/shared/domain/uniqueId");
exports.shadeFixture = new shade_1.Shade(uniqueId_1.UniqueId.create('1'), shadeValueObject_1.ShadeColor.create('blue'), shadeValueObject_1.ShadeName.create('blue shade'));
exports.shadeJSONFixture = [
    {
        id: '1',
        name: 'blue shade',
        color: 'blue'
    }, {
        id: '4',
        name: 'yellow shade',
        color: 'yellow'
    },
    {
        id: '2',
        name: 'red shade',
        color: 'red'
    },
    {
        id: '3',
        name: 'green shade',
        color: 'green'
    },
    {
        id: '5',
        name: 'pink shade',
        color: 'pink'
    },
    {
        id: '6',
        name: 'crimson shade',
        color: 'crimson'
    }
];
exports.shadeListFixturePage1 = [
    new shade_1.Shade(uniqueId_1.UniqueId.create('1'), shadeValueObject_1.ShadeColor.create('blue'), shadeValueObject_1.ShadeName.create('blue shade')),
    new shade_1.Shade(uniqueId_1.UniqueId.create('2'), shadeValueObject_1.ShadeColor.create('red'), shadeValueObject_1.ShadeName.create('red shade')),
    new shade_1.Shade(uniqueId_1.UniqueId.create('3'), shadeValueObject_1.ShadeColor.create('green'), shadeValueObject_1.ShadeName.create('green shade'))
];
exports.shadeListFixturePage2 = [
    new shade_1.Shade(uniqueId_1.UniqueId.create('4'), shadeValueObject_1.ShadeColor.create('yellow'), shadeValueObject_1.ShadeName.create('yellow shade')),
    new shade_1.Shade(uniqueId_1.UniqueId.create('5'), shadeValueObject_1.ShadeColor.create('pink'), shadeValueObject_1.ShadeName.create('pink shade')),
    new shade_1.Shade(uniqueId_1.UniqueId.create('6'), shadeValueObject_1.ShadeColor.create('crimson'), shadeValueObject_1.ShadeName.create('crimson shade'))
];
exports.shadeJSONFixturePage1 = [
    {
        id: '1',
        name: 'blue shade',
        color: 'blue'
    },
    {
        id: '2',
        name: 'red shade',
        color: 'red'
    },
    {
        id: '3',
        name: 'green shade',
        color: 'green'
    }
];
exports.shadeJSONFixturePage2 = [
    {
        id: '4',
        name: 'yellow shade',
        color: 'yellow'
    },
    {
        id: '5',
        name: 'pink shade',
        color: 'pink'
    },
    {
        id: '6',
        name: 'crimson shade',
        color: 'crimson'
    }
];
