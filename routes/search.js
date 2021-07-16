const Router = require("@koa/router");
const router = new Router();
const searchMetObjects = require("../controllers/metobject");

router.get("/search", searchMetObjects);

module.exports = router;
