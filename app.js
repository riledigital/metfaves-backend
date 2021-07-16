const Koa = require("koa");

const app = new Koa();
const allRoutes = require("./routes");
app.use(allRoutes.routes()).use(allRoutes.allowedMethods());
app.use(async (ctx, next) => {
  if (ctx.url === "/") {
    ctx.body = "Welcome to the MetFaves backend.";
  }
});

module.exports = app;
