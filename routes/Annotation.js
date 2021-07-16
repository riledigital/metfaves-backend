const Router = require("@koa/router");
const router = new Router();
const bodyParser = require("koa-bodyparser");
router.use(bodyParser());

const {
  // multiple
  getAnnotations,
  // single
  getAnnotationById,
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,
} = require("../controllers/AnnotationController");

router.get("/annotations", getAnnotations);

router.get("/annotation", getAnnotationById);

router.post("/collection", createAnnotation);

router.put("/collection", updateAnnotation);

router.delete("/collection", deleteAnnotation);

module.exports = router;
