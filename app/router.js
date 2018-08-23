'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // View endpoints
  router.get('/', controller.ssr.index);
  router.get('/comments', controller.ssr.comments);

  //API
  router.get('/home', controller.home.index);

  router.get('/api/comments', controller.comments.get);

  router.post('/api/comments', controller.comments.post);
};
