"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getProductById = void 0;
var product_1 = require("../../src/fixture/product");
var pagination = 3;
var getProductById = function (req, res) {
    var collection = product_1.productJSONFixture.find(function (e) { return e.id === req.params.id; });
    res.status(200);
    res.json(collection);
    return;
};
exports.getProductById = getProductById;
var getAllProducts = function (req, res) {
    var response = product_1.productJSONFixture;
    if (req.query.page) {
        // @ts-ignore
        var start = parseInt(req.query.page, 10) * pagination;
        response = response.slice(start, start + pagination);
    }
    res.status(200);
    res.json(response);
    return;
};
exports.getAllProducts = getAllProducts;
