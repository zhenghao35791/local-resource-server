const { screenshot, url } = require('../config/puppeteer_config')

const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: `${screenshot}/${Date.now()}.png`});

    await browser.close();
})();
