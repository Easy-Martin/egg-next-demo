const Controller = require("egg").Controller;
const Boom = require("boom");

class HomeController extends Controller {
    async get() {
        const { ctx } = this;
        ctx.session.comments = ctx.session.comments || [];
        ctx.body = ctx.session.comments;
    }
    async post() {
        const { ctx } = this;
        ctx.session.comments = ctx.session.comments || [];
        if (!ctx.request.body["comment"]) {
            throw Boom.badData("Empty comments not allowed");
        }
        const comment = {
            date: new Date(),
            comment: ctx.request.body["comment"]
        };
        ctx.session.comments.push(comment);
        ctx.status = 201;
        ctx.body = comment;
    }
}

module.exports = HomeController;
