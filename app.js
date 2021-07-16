const Koa = require("koa");

const app = new Koa();

// Import routers
const CONFIG = require("./config");
const Met = require("./met/met");
const CollectionsApp = require("./collections/collection");

app.use(CollectionsApp.routes()).use(CollectionsApp.allowedMethods());
app.use(Met.routes()).use(Met.allowedMethods());

app.use(async (ctx, next) => {
  if (ctx.url === "/") {
    ctx.body = "Welcome to the MetFaves backend";
  }
});

module.exports = app;