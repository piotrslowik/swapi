import puppeteer from 'puppeteer';

export const runBrowser = async () => {
  return await puppeteer.launch({
    headless: false,
    slowMo: 20
  });
}