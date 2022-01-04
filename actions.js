const puppeteer = require('puppeteer');
const {getRandomArbitrary, delay} = require('./utils');
const URL = process.env.URL || 'http://localhost:3000/page.html';

const getPage = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto(URL);
  const wait = getRandomArbitrary(20000, 60000)
  await delay(wait)
  console.log('getPage');
  await browser.close();
};

module.exports = {
    getPage
}