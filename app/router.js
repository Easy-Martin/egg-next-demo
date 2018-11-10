'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const loginStatus = app.middleware.loginStatus(app.config.loginStatus);

  const { router, controller } = app;
  // View endpoints
  router.get('/', loginStatus, controller.ssr.index);
  router.get('/comments', loginStatus, controller.ssr.comments);
  router.get('/login', loginStatus, controller.ssr.login);

  //API
  router.get('/home', controller.home.index);

  router.get('/api/comments', controller.comments.get);

  router.post('/api/comments', controller.comments.post);
};
