const { Collection } = require("../models");

const getCollectionsByUser = async (ctx) => {
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
};

const getCollectionById = async (ctx) => {
  // Get the collection of a specific ID
  console.debug(ctx);
  const id = ctx.query;
  console.debug(ctx.query);
  if (!id) {
    ctx.body = { error: "No collection ID specified." };
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
};

const createCollection = async (ctx) => {
  // Create/update a new collection for a user
  const { name, user, items, description } = ctx.request.body;

  if (!user) {
    ctx.response.status = 400;
    return;
  }

  try {
    // Create a new collection and insert into DB
    const data = {
      name,
      items,
      description,
      author: user,
    };

    const newCollection = await Collection.upsert(data);
    await newCollection.save();
    await newCollection.reload();
    console.log("New ID", { name: name, id: newCollection.id });
    ctx.response.status = 200;
    ctx.body = JSON.stringify(newCollection);
  } catch (err) {
    console.error(err);
    ctx.response.status = 400;
  }
};

const updateCollection = async (ctx, next) => {
  // Update a new collection by its ID
  const { name, user, items, description } = ctx.request.body;
  try {
    // Create a new collection and insert into DB
    const data = {
      name,
      items,
      description,
      author: user,
    };

    if (!name) {
      throw new Error("No name supplied.");
    }

    if (!user) {
      throw new Error("No user ID supplied.");
    }

    const newCollection = await Collection.create(data);
    await newCollection.reload();
    console.log("New ID", { name: name, id: newCollection.id });
    ctx.response.status = 200;
    ctx.response.body = JSON.stringify(newCollection);
  } catch (err) {
    console.error(err);
    ctx.response.status = 400;
    ctx.response.body = err.message;
  }
};

module.exports = {
  getCollectionsByUser,
  getCollectionById,
  createCollection,
  updateCollection,
};
