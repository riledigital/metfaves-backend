const Router = require("@koa/router");
const CONFIG = require("../config.js");
const axios = require("axios");
const router = new Router();

console.log(CONFIG);
const httpClient = axios.create({
  baseURL: CONFIG.API_BASE,
});

router.get("/search", async (ctx) => {
  // Search Met API
  console.debug(ctx);
  const query = ctx.query.q;
  console.debug(ctx.query);
  try {
    const resp = await httpClient.get(CONFIG.SEARCH, {
      params: {
        q: query ?? "pottery",
      },
    });
    const data = resp.data;
    ctx.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
  }
});

const fetchObject = async function (id) {
  const resp = await httpClient.get(`${CONFIG.OBJECT}/${id}`);
  return resp.body;
};

module.exports = router;
