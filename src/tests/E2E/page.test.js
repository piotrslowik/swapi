import { runBrowser } from './helpers';

let browser, page;
const timeout = 99999;

describe(`test game`, () => {
    beforeAll(async () => {
      browser = await runBrowser();
      page = await browser.newPage();
    });
    
    test(`Data is fetched and dashboard is shown`, async () => {
      await page.goto('localhost:3000/');
      await page.waitForSelector('.Dashboard button.Button');
      const buttonText = await page.$eval('.Dashboard button.Button', el => el.textContent);
      expect(buttonText).toBe('Play!');
    }, timeout);

    test(`Character type is possible to change`, async () => {
      await page.goto('localhost:3000/');
      await page.waitForSelector('.Dashboard');
      await page.click('.MuiSelect-select');
      await page.click('li.MuiListItem-root[tabindex="-1"]');
      const selectText = await page.$eval('.MuiSelect-select', el => el.textContent);
      expect(selectText).toBe('People');
    }, timeout);

    test(`Trait is possible to change`, async () => {
      await page.goto('localhost:3000/');
      await page.waitForSelector('.Dashboard');
      const selects = await page.$$('.MuiSelect-select');
      const secondSelect = selects[1];
      await secondSelect.click();
      await page.click('li.MuiListItem-root[tabindex="-1"]');
      const selectText = await secondSelect.evaluate(node => node.textContent);
      expect(selectText).toBe('MGLT');
    }, timeout);

    test(`Play button starts the game`, async () => {
      await page.goto('localhost:3000/');
      await page.waitForSelector('.Dashboard button.Button');
      await page.click('.Dashboard button.Button');
      const paragraphs1 = await page.$$eval('.Player1 p', nodes => nodes.length);
      const paragraphs2 = await page.$$eval('.Player2 p', nodes => nodes.length);
      expect(paragraphs1).toBe(7);
      expect(paragraphs2).toBe(7);
    }, timeout);
});