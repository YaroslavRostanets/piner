const puppeteer = require('puppeteer');

const getPage = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  page.waitForTimeout(4000);
  console.log('getPage');
  await browser.close();
};

module.exports = {
    getPage
}