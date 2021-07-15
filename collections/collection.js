const Router = require("@koa/router");
const router = new Router();
const { sequelize, Collection } = require("../utils");

router.get("/collections", async (ctx) => {
  // Get collections for a user
  const user = ctx.query.user;
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
  // Search Met API
  console.debug(ctx);
  const id = ctx.query.id ?? 38237;
  console.debug(ctx.query);
  try {
  // TODO: Get a specific collection.
    const data = {
      title: "",
      items: "",
      author: "",
      dateCreated: "",
      id
    };
    ctx.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
  }
});

router.post("/collection", async (ctx) => {
  // Create/update a new collection for a user
  const { name, user, items, description } = ctx.query;
  try {
  // TODO: Get a specific collection.
    const data = {
      name, user, items, description
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
