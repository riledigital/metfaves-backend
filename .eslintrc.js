module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["jest", "prettier"],
  rules: {
    "no-unused-vars": "off",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": "error",
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
