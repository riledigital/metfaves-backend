const Router = require("@koa/router");
const router = new Router();
const { searchMetObjects } = require("../controllers").search;

router.get("/search", searchMetObjects);

module.exports = router;
