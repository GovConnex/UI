const puppeteer = require('puppeteer');
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

describe('Component Screenshots', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  // Configure the custom toMatchImageSnapshot with a less strict threshold
  const customConfig = {
    // Set your custom threshold value here
    failureThreshold: 0.01, // 1% difference allowed
    failureThresholdType: 'percent'
  };

  const path = require('path');
  const parentPath = path.resolve(__dirname, '..', '..', 'storybook-static');
  const fileUrl = `file://${parentPath}`;

  const scenarios = [
    ['Scenario 1', `${fileUrl}/index.html?path=/story/components-button--basic`],
    ['Scenario 2', `${fileUrl}/index.html?path=/story/components-banner--info`],
    ['Scenario 3', `${fileUrl}/index.html?path=/story/components-box--example`],
    // add more scenarios here
  ];
  
  it.each(scenarios)('should match image snapshot for %s', async (scenario, url) => {
    await page.goto(url);
    await page.waitForSelector('body'); 

    const iframe = await page.waitForSelector('#storybook-preview-iframe');
    await page.$('#storybook-preview-iframe');

    const content = await iframe.contentFrame();

    await content.waitForSelector('#root',  {visible: true });

    const button = await content.$('#root'); 

    await content.evaluate(() => {
      const rootElement = document.querySelector('#root');
      rootElement.style.backgroundColor = '#F5F5F5';
    });

    const screenshot = await button.screenshot();
    
    expect.extend({ toMatchImageSnapshot: configureToMatchImageSnapshot(customConfig) });

    expect(screenshot).toMatchImageSnapshot();
  });
});