const Router = require("@koa/router");
const router = new Router();
const bodyParser = require("koa-bodyparser");
router.use(bodyParser());

const { sequelize, Collection } = require("../utils");

router.get("/collections", async (ctx) => {
  // Get all collections for a user
  const user = ctx.query.user;
  if (!user) {
    ctx.body = { error: "No user ID supplied." };
    return;
  }
  try {
  // TODO: Get list of collections by a user
    const data = await Collection.findAll({ where: { user: user } });
    if (data === null) {
      ctx.body = JSON.stringify("Error: Collection not found");
    }
    ctx.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
  }
});

router.get("/collection", async (ctx) => {
  // Get the collection of a specific ID
  console.debug(ctx);
  const id = ctx.query;
  console.debug(ctx.query);
  if (!id) {
    ctx.body = {error: "No collection ID specified."};
    return;
  }
  try {
  // TODO: Get a specific collection.
    const data = await Collection.findOne({ where: { id: id } });
    if (data === null) {
      ctx.body = JSON.stringify("Error: Collection not found");
    }
    ctx.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
  }
});

router.post("/collection", async (ctx) => {
  // Create/update a new collection for a user
  const { name, user, items, description } = ctx.request.body;
  try {
    // Create a new collection and insert into DB
    const data = {
      name, user, items, description, author: "lol"
    };
    const newCollection = await Collection.create(data);
    console.log("New Collection ID:", newCollection.id);
    // Return the collection that was created
    ctx.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
