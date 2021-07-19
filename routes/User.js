const Router = require("@koa/router");
const router = new Router();
const { getUser, createUser } = require("../controllers").UserController;

// router.get("/users", getUsers);
router.get("/user", getUser);
router.post("/user", createUser);
// router.patch("/user", updateUser);
// router.delete("/user", deleteUser);

module.exports = router;
