import { Provide } from '@midwayjs/decorator';

import * as moment from 'moment';
import { DATE_DETAIL_FORMAT } from '../../constant';
import { PuppeteerParam } from './interface';

const puppeteer = require('puppeteer');

@Provide()
export class PuppeteerService {
  async handler(options: PuppeteerParam) {
    console.log("options" + options)
    debugger
    const url = options?.url ? options?.url : "https://puppeteer.bootcss.com/";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const now = moment();
    await page.goto(url);
    const path = `data_out/${now.format(DATE_DETAIL_FORMAT)}.png`;
    await page.screenshot({ path: path });
    await browser.close();
    console.log("获取截图结束")
    return path;
  }
}
