"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var shade_1 = require("../src/fixture/shade");
var app = express();
app.get('/shades', function (req, res) {
    res.status(200);
    res.json(shade_1.shadeJSONFixturePage1);
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
