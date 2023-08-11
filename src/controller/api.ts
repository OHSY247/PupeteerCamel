import {
  Inject
  , Controller
  // , Post
  , Provide
  // , Query
  , Get
} from '@midwayjs/decorator';
import {
  apiOperation,
  apiParam,
} from '@ali/midway-swagger';
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
  @apiParam({
    name: 'url',
    type: 'String',
    description: '链接',
  })
  @apiOperation({
    tags: ['screenShot'],
    description: '获取截图',
  })
  async screenShot(ctx: Context) {
    let data
    await this.puppeteerService.handler(ctx.param?.url).then(res => {
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
