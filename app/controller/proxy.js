'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async api() {
    const { ctx } = this;
    const options = this.config.proxy;
    const { method, headers } = ctx;
    let result, proxyConfig;
    let config = {
      method,
      data: ctx.request.body,
      headers,
      dataType: 'json'
    };

    for (let key in options) {
      let reg = new RegExp(`${key}`, 'ig');
      if (reg.test(this.ctx.path)) {
        proxyConfig = options[key];
        break;
      }
    }

    if (proxyConfig) {
      const path = proxyConfig.rewrite(this.ctx.path);
      const url = `${proxyConfig.target}${path}`;
      result = await ctx.curl(url, config)
      this.logger.info('%s proxy to %s', this.ctx.path, url);
    }
    ctx.body = result.data;
  }
}

module.exports = HomeController;
