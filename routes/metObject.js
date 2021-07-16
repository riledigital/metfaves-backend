const Router = require("@koa/router");
const router = new Router();
const { getMetObject } = require("../controllers").MetObjectController;

router.get("/metObject", getMetObject);

module.exports = router;
