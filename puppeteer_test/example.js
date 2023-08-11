const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://puppeteer.bootcss.com/');
    await page.screenshot({ path: 'data_out/example.png' });
    await browser.close();
})();
