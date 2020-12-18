"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionListJsonFixture = exports.collectionListFixture = exports.collectionSingleJsonFixture = exports.collectionSingleFixture = void 0;
var collection_1 = require("../app/core/collection/domain/collection");
var shade_1 = require("./shade");
exports.collectionSingleFixture = collection_1.Collection.create({ id: '1', name: 'collection 1', shades: shade_1.shadeListFixturePage1 });
exports.collectionSingleJsonFixture = {
    id: '1',
    name: 'collection 1',
    shades: shade_1.shadeResponsePage1Fixture.values
};
exports.collectionListFixture = [
    exports.collectionSingleFixture,
    collection_1.Collection.create({ id: '2', name: 'collection 1', shades: shade_1.shadeListFixturePage2 })
];
exports.collectionListJsonFixture = [
    exports.collectionSingleJsonFixture,
    {
        id: '2',
        name: 'collection 2',
        shades: shade_1.shadeResponsePage2Fixture.values
    }
];
