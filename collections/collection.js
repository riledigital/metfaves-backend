const Router = require("@koa/router");
const router = new Router();

const CONFIG = require("../config.js");

// Database connection
const { Sequelize } = require("sequelize");
// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db/db.sqlite"
});

const testConnection = async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


router.get("/collections", async (ctx) => {
  // Get collections for a user
  const user = ctx.query.user;
  try {
  // TODO: Get list of collections.
    const data = {
      type: "userCollection",
      collections: [],
      author: "",
      dateCreated: "",
      id: ""
    };
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
  const { name, user, items, description, tags } = ctx.query;
  try {
  // TODO: Get a specific collection.
    const data = {
      name, user, items, description, tags
    };
    // Return the collection that was created
    ctx.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
