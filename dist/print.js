"use strict";
exports.__esModule = true;
function print(performance) {
    console.log({ performance: performance });
    var dnslookup = getDnsLookupTime(performance);
    var firstByte = getFirstByteTime(performance);
    var tcpTime = getTcpConnectTime(performance);
    console.log({
        dnslookup: dnslookup,
        firstByte: firstByte,
        tcpTime: tcpTime
    });
}
exports["default"] = print;
/* 获取DNS查询时间 */
function getDnsLookupTime(performance) {
    var domainLookupStart = performance.domainLookupStart, domainLookupEnd = performance.domainLookupEnd;
    return domainLookupEnd - domainLookupStart;
}
/* 获取首字节时间 */
function getFirstByteTime(performance) {
    var redirectStart = performance.redirectStart, responseStart = performance.responseStart;
    return responseStart - redirectStart;
}
/* 获取tcp时间 */
function getTcpConnectTime(performance) {
    var connectStart = performance.connectStart, connectEnd = performance.connectEnd;
    return connectEnd - connectStart;
}
