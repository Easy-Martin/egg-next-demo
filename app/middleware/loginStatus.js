module.exports = options => {
  return async function loginStatus(ctx, next) {
    if (options.ignore.indexOf(ctx.request.url) > -1) {
      return next();
    }
    if (ctx.session.token) {
      return next();
    }
    return ctx.redirect('/login');
  };
};
