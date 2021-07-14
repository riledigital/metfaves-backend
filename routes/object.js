const Router = require("@koa/router");
const router = new Router();

const CONFIG = require("../config.js");
// 38160,75414,61549,38237
const axios = require("axios");
const httpClient = axios.create({
  baseURL: CONFIG.API_BASE,
});

router.get("/object", async (ctx) => {
  // Search Met API
  console.debug(ctx);
  const id = ctx.query.id ?? 38237;
  console.debug(ctx.query);
  try {
    const data = await fetchObject(id);
    ctx.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
  }
});

const fetchObject = async function (id) {
  const resp = await httpClient.get(`${CONFIG.OBJECT}/${id}`);
  console.log(resp);
  return resp.data;
};

module.exports = router;
