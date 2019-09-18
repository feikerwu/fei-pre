export default function print(performance: PerformanceResourceTiming) {
  console.log({ performance });
  const dnslookup = getDnsLookupTime(performance);
  const firstByte = getFirstByteTime(performance);
  const tcpTime = getTcpConnectTime(performance);

  console.log({
    dnslookup,
    firstByte,
    tcpTime
  });
}

/* 获取DNS查询时间 */
function getDnsLookupTime(performance: PerformanceResourceTiming) {
  const { domainLookupStart, domainLookupEnd } = performance;
  return domainLookupEnd - domainLookupStart;
}

/* 获取首字节时间 */
function getFirstByteTime(performance: PerformanceResourceTiming) {
  const { redirectStart, responseStart } = performance;
  return responseStart - redirectStart;
}

/* 获取tcp时间 */
function getTcpConnectTime(performance: PerformanceResourceTiming) {
  const { connectStart, connectEnd } = performance;
  return connectEnd - connectStart;
}
