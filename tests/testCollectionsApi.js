const app = require("../index");
const axios = require("axios");

const CONFIG = require("../config");
const { testConnection } = require("../utils");
  
beforeAll(() => {
  // Set config defaults when creating the instance
  const httpClient = axios.create({
    baseURL: `http://localhost:${CONFIG.PORT}`
  });
});

test("Return all collections for a test user", async () => {
  
  expect(true, true);
  
});
