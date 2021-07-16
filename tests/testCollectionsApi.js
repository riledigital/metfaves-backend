const app = require("../index");
const axios = require("axios");
const request = require("supertest");

const CONFIG = require("../config");
const { testConnection } = require("../utils");

beforeAll(() => {
  // Set config defaults when creating the instance
});

test("Hello world works", async () => {
  const response = await request(app.callback()).get("/");
  expect(response.status).toBe(200);
});

// test("Return all collections for a test user", async () => {

//   expect(true, true);

// });
