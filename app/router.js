/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, middleware, config } = app;
    // const proxy = middleware.proxy('/api', config.proxy);
    const loginStatus = middleware.loginStatus(config.loginStatus);
    // View endPoints
    router.get("/", controller.ssr.index);
    router.get("/comments", loginStatus, controller.ssr.comments);
    router.get("/login", loginStatus, controller.ssr.login);

    // API
    router.get("/home", controller.home.index);

    router.get("/api/comments", controller.comments.get);

    router.post("/api/comments", controller.comments.post);

    // Proxy
    router.get("/api/*", controller.proxy.api);
    router.post("/api/*", controller.proxy.api);
};
