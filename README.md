# PupeteerCamel
# 开发环境
```
% npm -v
8.19.3
```
## 本地开发
使用vscode
```
$ npm run dev
$ open http://localhost:7001/
```

# 数据产出
当前文件夹以当前时间名

# 数据源
## baldurs'gate 3
### 官网
> https://baldursgate3.game/
### vgbaik
> https://www.vgbaike.com/baldurs_gate_3/

# 接口说明
|      path       |              说明              |
| :-------------: | :----------------------------: |
| /api/screenShot | 输入信息返回全屏截图并保存本地 |
|     单元格      |     获取对应数据源对应词条     |
# 依赖服务
puppeteer: https://puppeteer.bootcss.com
midway: https://github.com/midwayjs/midway
sqlite3: https://www.npmjs.com/package/sqlite3