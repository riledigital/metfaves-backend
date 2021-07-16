const Router = require("@koa/router");
const router = new Router();
const { searchMetObjects } = require("../controllers").SearchController;

router.get("/search", searchMetObjects);

module.exports = router;
