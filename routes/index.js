const Router = require("@koa/router");
const router = new Router();

// Helper function to import routes fast
const routerHelper = (newRoute) => {
  // console.info("Using route: ", newRoute);
  router.use(newRoute.routes()).use(newRoute.allowedMethods());
};

// Use all the routes!
const fs = require("fs");

fs.readdir("./routes", (err, files) => {
  files.forEach((file) => {
    if (file.includes(".DS_Store") || file.includes("index")) {
      return;
    }
    console.debug("Using route file:", file);
    routerHelper(require(`./${file}`));
  });
});
module.exports = router;
