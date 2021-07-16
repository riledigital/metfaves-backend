const Router = require("@koa/router");
const router = new Router();

const bodyParser = require("koa-bodyparser");
router.use(bodyParser());

const { getCollectionsByUser, getCollectionById, createCollection } = require("../controllers/collection");

router.get("/collections", getCollectionsByUser);

router.get("/collection", getCollectionById);

router.post("/collection", createCollection);

module.exports = router;
