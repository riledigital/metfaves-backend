const Router = require("@koa/router");
const router = new Router();
const { getMetObject } = require("../controllers").metObject;

router.get("/metObject", getMetObject);

module.exports = router;
