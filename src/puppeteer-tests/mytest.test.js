const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

describe('Component Screenshots', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.setViewport({ width: 800, height: 600 }); // Adjust viewport dimensions
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should match image snapshot', async () => {
    await page.goto('http://localhost:6006/?path=/story/components-button--basic');

    // Capture a screenshot of the button element
    const screenshot = await page.screenshot();

    expect.extend({ toMatchImageSnapshot });

    expect(screenshot).toMatchImageSnapshot();
  });
});
