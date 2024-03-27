# PupeteerCamel
> 浏览器模拟、数据抓取、截图等能力，提供数据源
> 
# 开发环境
```
% npm -v
8.19.3
```
## 本地开发
```
$ npm run dev
$ open http://localhost:7001/
```

# 接口说明
|      path       |              说明              |                          测试                          |
| :-------------: | :----------------------------: | :----------------------------------------------------: |
| /api/screenShot | 输入信息返回全屏截图并保存本地 | http://localhost:7002/api/screenShot?url=www.baidu.com |

# 依赖服务
puppeteer: https://puppeteer.bootcss.com
midway: https://midwayjs.org/docs/intro
sqlite3: https://www.npmjs.com/package/sqlite3