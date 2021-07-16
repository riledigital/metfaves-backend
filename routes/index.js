const Router = require("@koa/router");
const router = new Router();

// Import routers
const collection = require("./collection");
const object = require("./object");
const search = require("./search");

// Helper function to import routes fast
const routerHelper = (newRoute) => {
  // console.info("Using route: ", newRoute);
  router.use(newRoute.routes()).use(newRoute.allowedMethods());
};

[collection, object, search].forEach((newRoute) => { routerHelper(newRoute); });

module.exports = router;
