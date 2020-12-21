"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionListJsonFixture = exports.collectionListFixture = exports.collectionSingleFixture = exports.collectionSingleJsonFixture = void 0;
var collection_1 = require("../app/core/collection/domain/collection");
var shade_1 = require("./shade");
exports.collectionSingleJsonFixture = {
    id: '1',
    name: 'collection 1',
    shades: shade_1.shadeJsonFixtureList
};
exports.collectionSingleFixture = collection_1.Collection.create(exports.collectionSingleJsonFixture);
exports.collectionListFixture = [
    exports.collectionSingleFixture,
    collection_1.Collection.create({ id: '2', name: 'collection 1', shades: shade_1.shadeResponsePage2Fixture.values })
];
exports.collectionListJsonFixture = [
    exports.collectionSingleJsonFixture,
    {
        id: '2',
        name: 'collection 2',
        shades: shade_1.shadeResponsePage2Fixture.values
    }
];
