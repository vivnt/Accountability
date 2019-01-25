module.exports = {
  parser: "babel-eslint",
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  ecmaFeatures: {
    modules: true,
    arrowFunctions: true,
    classes: true
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {}
};
