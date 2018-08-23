'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    return this.ctx.render({
      screen: 'Home'
    });
  }
  comments() {
    const comments = this.ctx.session.comments || [];
    return this.ctx.render({
      screen: 'Comments',
      props: { comments }
    });
  }
}

module.exports = HomeController;
