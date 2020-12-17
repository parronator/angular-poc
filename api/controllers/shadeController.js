"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.findOne = void 0;
var shade_1 = require("../../src/fixture/shade");
var pagination = 3;
var findOne = function (req, res) {
    var shade = shade_1.shadeJSONFixture.find(function (e) { return e.id === req.params.id; });
    res.status(200);
    res.json(shade);
    return;
};
exports.findOne = findOne;
var findAll = function (req, res) {
    var response = shade_1.shadeJSONFixture;
    if (req.query.page) {
        // @ts-ignore
        var start = parseInt(req.query.page, 10) * pagination;
        response = response.slice(start, start + pagination);
    }
    res.status(200);
    res.json(response);
    return;
};
exports.findAll = findAll;
