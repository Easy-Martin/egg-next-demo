'use strict';
const path = require('path')

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535018841118_721';
  config.static = {
    prefix: '/static/',
    dir: path.join(appInfo.baseDir, 'static')
  };
  // add your config here
  config.middleware = [];
  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => true,
    },
  }
  return config;
};
