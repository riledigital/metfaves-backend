const Koa = require("koa");

const app = new Koa();

// Import routers
const Met = require("./met/met");
const CollectionsApp = require("./collections/collection");

// app.use(CollectionsApp.routes()).use(CollectionsApp.allowedMethods());
app.use(Met.routes()).use(Met.allowedMethods());

// Start
console.log("Listening at http://localhost:8081");
app.listen(8081);
