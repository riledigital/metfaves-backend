const APP_CONFIG = {
  API_BASE: "https://collectionapi.metmuseum.org",
  OBJECT: "/public/collection/v1/objects",
  SEARCH: "/public/collection/v1/search",
  PORT: 8081,
  DB: {
    CONNECTION: "db/db.sqlite",
  },
};

module.exports = APP_CONFIG;
