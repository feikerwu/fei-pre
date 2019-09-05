import puppeteer from 'puppeteer';

export default async function pre(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );
  await browser.close();

  return performanceTiming;
}
