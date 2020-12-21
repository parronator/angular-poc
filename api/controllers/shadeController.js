"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllShades = exports.getShadeById = void 0;
var shade_1 = require("../../src/fixture/shade");
var pagination = 3;
var getShadeById = function (req, res) {
    var shade = shade_1.shadeJsonFixtureList.find(function (e) { return e.id === req.params.id; });
    res.status(200);
    res.json(shade);
    return;
};
exports.getShadeById = getShadeById;
var getAllShades = function (req, res) {
    var response = shade_1.shadeJsonFixtureList;
    if (req.query.orderBy) {
        response = shade_1.shadeJsonFixtureList.sort(function (a, b) {
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
        var start = parseInt(req.query.page - 1, 10) * pagination;
        response = {
            totalPages: Math.ceil(shade_1.shadeJsonFixtureList.length / pagination),
            pageSize: pagination,
            values: shade_1.shadeJsonFixtureList.slice(start, start + pagination)
        };
    }
    res.status(200);
    res.json(response);
    return;
};
exports.getAllShades = getAllShades;
