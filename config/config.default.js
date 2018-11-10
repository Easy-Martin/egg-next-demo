'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535018841118_721';

  //TODO 自定义静态资源目录
  config.static = {
    prefix: '/static/',
    dir: path.join(appInfo.baseDir, 'static')
  };

  //TODO 中间件配置
  config.middleware = ['loginStatus'];

  //TODO 忽略登录判断，登录页和next相关
  config.loginStatus = {
    ignore: ['/login','/_next']
  };

  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => true
    }
  };
  return config;
};
