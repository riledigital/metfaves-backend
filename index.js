const Koa = require("koa");

const app = new Koa();

// Import routers
const Search = require("./routes/search");
const MetObject = require("./routes/object");

app.use(Search.routes()).use(Search.allowedMethods());
app.use(MetObject.routes()).use(MetObject.allowedMethods());

// Start
console.log("Listening at http://localhost:8081");
app.listen(8081);
