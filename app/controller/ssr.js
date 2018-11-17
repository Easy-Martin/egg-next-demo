const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        return this.ctx.render({
            screen: "Home"
        });
    }
    async login() {
        return this.ctx.render({
            screen: "Login",
            props: { title: `登录` }
        });
    }
    async comments() {
        const comments = this.ctx.session.comments || [];
        return this.ctx.render({
            screen: "Comments",
            props: { comments }
        });
    }
}

module.exports = HomeController;
