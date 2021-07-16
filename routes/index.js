const Router = require("@koa/router");
const router = new Router();

// Import routers

// Helper function to import routes fast
const routerHelper = (newRoute) => {
  // console.info("Using route: ", newRoute);
  router.use(newRoute.routes()).use(newRoute.allowedMethods());
};

[require("./collection"), require("./metObject"), require("./search")].forEach(
  (newRoute) => {
    routerHelper(newRoute);
  }
);

module.exports = router;
