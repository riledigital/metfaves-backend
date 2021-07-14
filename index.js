const axios = require("axios");

const Koa = require("koa");
const app = new Koa();
const Search = require("./routes/search");

app.use(Search.routes()).use(Search.allowedMethods());

console.log("Listening at http://localhost:8081");
app.listen(8081);
