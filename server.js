const Koa = require("koa");
const app = require("./app");
// Import routers
const CONFIG = require("./config");

// Start
console.log(`MetFaves REST API starting up at port ${CONFIG.PORT}`);
console.log(`Listening at http://localhost:${CONFIG.PORT}`);
const server = app.listen(CONFIG.PORT);
module.exports = server;
