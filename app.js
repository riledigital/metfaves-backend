const Koa = require("koa");
const logger = require("koa-logger");
const CONFIG = require("./config");
const app = new Koa();
app.use(logger());

const allRoutes = require("./routes");

const setup = () => {
  return new Promise((resolve, reject) => {
    app.use(allRoutes.routes()).use(allRoutes.allowedMethods());
    app.use(async (ctx, next) => {
      if (ctx.url === "/") {
        ctx.body = "Welcome to the MetFaves backend.";
      }
    });
    resolve("Finished startup!");
  });
};

setup().then((results) => {
  console.log(results);
  console.log(`Listening at http://localhost:${CONFIG.PORT}`);
});
module.exports = app;
