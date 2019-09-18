"use strict";
exports.__esModule = true;
var regHttpScheme = /^http/g;
exports.isValidHttpUrl = function (url) {
    return regHttpScheme.test(url);
};
exports.getValidHttpRequest = function (url) {
    return exports.isValidHttpUrl(url) ? url : url.replace(/(?=^)/, 'https://');
};
