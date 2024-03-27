import {
  Inject
  , Controller
  // , Post
  , Provide
  , Query
  // , Param
  , Get
} from '@midwayjs/decorator';


import { Context } from 'egg';
import { PuppeteerService } from '../service/puppeteer/service';
import images = require('images');

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  puppeteerService: PuppeteerService;


  @Get('/screenShot')
  async screenShot(ctx: Context, @Query('url') url: string) {
    console.log("debug" + JSON.stringify(ctx) + "\n" + "url: " + url)
    let data
    await this.puppeteerService.handler({ url: url }).then(res => {
      data = res
    })
    // return { success: true, message: 'OK', data: data };
    return data
  }
  @Get('/test')
  async test(ctx: Context) {
    return images(100, 100).toBuffer("png");
  }
}
