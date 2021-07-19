const { User } = require("../models");
const { v4: uuidv4 } = require("uuid");
const getUser = async (ctx) => {
  // Get all collections for a user
  const id = ctx.query.id;
  if (!id) {
    ctx.body = { error: "No user ID supplied." };
    return;
  }
  try {
    const data = await User.findOne({ where: { id: id } });
    if (data === null) {
      throw new Error("User not found.");
    }

    ctx.status = 200;
    ctx.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
    ctx.response.status = 400;
    ctx.response.body = err.message;
  }
};

const createUser = async (ctx) => {
  // Create/update a new user
  const { name, email, bio, profilePictureUrl } = ctx.request.body;

  try {
    if (!name) {
      throw new Error("No name supplied.");
      return;
    }
    // Create a new collection and insert into DB
    const data = {
      id: uuidv4(),
      name,
      email,
      bio,
      profilePictureUrl,
    };

    const newUser = await User.create(data);
    const reloaded = await newUser.reload();
    console.log("New user created with ID", {
      name: name,
      id: newUser.id,
    });
    ctx.response.status = 200;
    ctx.body = JSON.stringify(newUser);
  } catch (err) {
    console.error(err);
    ctx.response.status = 400;
    ctx.response.body = err;
    ctx.app.emit("error", err, ctx);
  }
};

const updateUser = async (ctx) => {
  // Create/update a new user
  const { id, name, email, bio, profilePictureUrl } = ctx.request.body;

  try {
    if (!id) {
      throw new Error("No id supplied");
    }
    // Create a new collection and insert into DB
    const data = {
      name,
      email,
      bio,
      profilePictureUrl,
    };

    const newUser = await User.update(data);
    await newUser.save();
    await newUser.reload();
    console.log("Updated with ID", {
      name: name,
      id: newUser.id,
    });
    ctx.response.status = 200;
    ctx.body = JSON.stringify(newUser);
  } catch (err) {
    console.error(err);
    ctx.response.status = 400;
    ctx.response.body = err.message;
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
};
