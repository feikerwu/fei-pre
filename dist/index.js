#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var sade_1 = __importDefault(require("sade"));
var version = require('../package.json').version;
var pre_1 = __importDefault(require("./pre"));
sade_1["default"]('pre [url]', true)
    .version(version)
    .describe('run performance in commandline')
    .example('pre https://example.com')
    .option('--no-cache', 'disable cache')
    .action(function (url) {
    pre_1["default"](url);
})
    .parse(process.argv);
