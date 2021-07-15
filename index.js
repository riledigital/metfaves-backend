const Koa = require("koa");

const app = new Koa();

// Import routers
const Search = require("./met/search");
const MetObject = require("./met/object");
const CollectionsApp = require("./collections/collection.js");

app.use(CollectionsApp.routes()).use(CollectionsApp.allowedMethods());
app.use(Search.routes()).use(Search.allowedMethods());
app.use(MetObject.routes()).use(MetObject.allowedMethods());

// Start
console.log("Listening at http://localhost:8081");
app.listen(8081);
