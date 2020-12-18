"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlLCollections = exports.getCollectionById = void 0;
var collection_1 = require("../../src/fixture/collection");
var pagination = 3;
var getCollectionById = function (req, res) {
    var collection = collection_1.collectionListJsonFixture.find(function (e) { return e.id === req.params.id; });
    res.status(200);
    res.json(collection);
    return;
};
exports.getCollectionById = getCollectionById;
var getAlLCollections = function (req, res) {
    var response = collection_1.collectionListJsonFixture;
    if (req.query.page) {
        // @ts-ignore
        var start = parseInt(req.query.page, 10) * pagination;
        response = response.slice(start, start + pagination);
    }
    res.status(200);
    res.json(response);
    return;
};
exports.getAlLCollections = getAlLCollections;
