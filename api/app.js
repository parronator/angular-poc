"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var body_parser_1 = __importDefault(require("body-parser"));
var shadeController_1 = require("./controllers/shadeController");
var app = express();
var router = express.Router();
router.get('/shades', shadeController_1.getAllShades);
router.get('/shades/:id', shadeController_1.getShadeById);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/', router);
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
