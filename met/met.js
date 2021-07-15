const Router = require("@koa/router");
const CONFIG = require("../config.js");

const object = require("./object");
const search = require("./search");

const router = new Router();

const routerHelper = (newRoute) => {
  console.info(`Using route: ${router}`);
  router.use(newRoute.routes()).use(newRoute.allowedMethods());
};

[object, search].forEach((newRoute) => { routerHelper(newRoute); });

module.exports = router;
