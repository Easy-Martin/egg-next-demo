const next = require('next');
const conf = require('../next.config');
const path = require('path');
const dev = process.env.NODE_ENV !== 'production';

// We love async builder functions
module.exports = async function setupSSR(app) {
  // Setup Next.js
  const nextEngine = next({ dev, conf, dir: path.resolve('./src') });
  const handle = nextEngine.getRequestHandler();
  await nextEngine.prepare();

  // eslint-disable-next-line no-param-reassign
  app.context.render = async function render({ screen, props = {}, options }) {
    const ctx = this;

    // Here we take the React.js page and convert it to HTML in the server
    // After the client downloads the JS files (see /_next/) the React.js is re-hydrated

    // https://github.com/zeit/next.js/blob/canary/server/render.js
    const html = await nextEngine.renderToHTML(
      ctx.req,
      ctx.res,
      `/${screen}`,
      props,
      options
    );
    ctx.body = html;
    return html;
  };

  // eslint-disable-next-line no-param-reassign
  app.context.renderBoomError = async function renderBoomError(err) {
    const ctx = this;
    const {
      output: { payload }
    } = err;
    ctx.status = payload.statusCode || 500;

    return ctx.render({
      screen: ctx.status >= 500 ? 'errors/500' : 'errors/400',
      props: {
        statusCode: payload.statusCode,
        error: payload.error,
        message: payload.message
      },
      options: {
        staticMarkup: true
      }
    });
  };

  // const router = new Router();

  app.router.get('/_next/*', async ctx => {
    // Ups! we need because Next.js send the response prematurely
    ctx.respond = false;
    await handle(ctx.req, ctx.res);
  });

  // app.use(router.routes());

  // return app;
};
