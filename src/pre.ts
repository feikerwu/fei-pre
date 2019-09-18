import puppeteer from 'puppeteer';
import { getValidHttpRequest } from './utils';
import print from './print';

export default async function pre(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(getValidHttpRequest(url));
  const navigationTiming = await page.evaluate(() => {
    const { performance } = window;
    const navigationTiming = performance.getEntriesByType('navigation')[0];
    return navigationTiming.toJSON();
  });

  await browser.close();

  print(navigationTiming);

  return navigationTiming;
}
