const setupSSR = require('./server/ssr');
module.exports = app => {
  app.beforeStart(async () => {
    await setupSSR(app);
  });
};
