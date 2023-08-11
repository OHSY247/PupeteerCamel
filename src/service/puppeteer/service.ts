import { Provide } from '@midwayjs/decorator';

import * as moment from 'moment';
import { DATE_DETAIL_FORMAT } from '../../constant';
import { PuppeteerParam } from './interface';
import images = require('images');

const puppeteer = require('puppeteer');

@Provide()
export class PuppeteerService {
  async handler(options: PuppeteerParam) {
    console.log("options" + options)
    let res = images(100, 100).toBuffer("png");
    const url = options?.url ? options?.url : "https://puppeteer.bootcss.com/";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const now = moment();
    await page.goto(url);
    const path = `data_out/${now.format(DATE_DETAIL_FORMAT)}.png`;
    // 返回: <Promise<[Buffer|String]>> Promise对象，resolve后是截图的buffer
    // 图片即本地存储也进行返回
    await page.screenshot(
      {
        path: path,
        fullPage: true
      }
    ).then(dataBuffer => {
      res = dataBuffer
    });
    await browser.close();
    console.log("获取截图结束")
    return res;
  }
}
