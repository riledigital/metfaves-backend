const CONFIG = require("../config.js");
const axios = require("axios");

const httpClient = axios.create({
  baseURL: CONFIG.API_BASE,
});

const searchMetObjects = async (ctx) => {
  const query = ctx.query.q;
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
  
};

module.exports = {
  searchMetObjects
};
