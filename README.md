# eslint-config-ahmed

Ahmed's Prefered Strict ESLint Configuration

## Plugins included:

- [`Default eslint rules`](https://eslint.org/docs/rules/)
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)

> Note: you need to install those plugins by yourself.

## Installation

To installed it as dependency into your project, run:

```
$ npm install --save-dev eslint-config-ahmed
```

## Usage

To use this config,

1. Create a `.eslintrc.js` file in the root of your project's directory. (_make sure to use `js` with your your .eslintrc file_)
2. Then merge in the `baseConfig()` rules in your `.eslintrc.js` file, for example:

```js
// your eslintrc.js file
const baseConfig = require("eslint-config-ahmed");

module.exports = {
  rules: Object.assign({}, baseConfig(), {
    // Here you can add your own rules to overide intial rules.
  }),
};
```

3. You can add scripts to your `package.json` to lint and/or fix:

```js
"scripts": {
  "test:lint": "eslint .",
  "test:lint-fix": "eslint --fix .",
  "test": "npm run test:lint"
}
```

## Settings

You can easily enable any rules for the plugins you use like `react`, `import`, and `jest`, do it like so:

```js
// your eslintrc.js file
const baseConfig = require("eslint-config-ahmed");

module.exports = {
  rules: Object.assign({}, baseConfig({ import: true, react: true }), {
    // Here you can add your own rules to overide intial rules.
  }),
};
```

> Note: you need to install plugins that mentioned above by yourself.

Here is a full example:

```js
const baseConfig = require("eslint-config-ahmed");

module.exports = {
  root: true,
  plugins: [
    "import",
    "react",
    "react-hooks",
    "prettier", // Recommended Prettier plugin
    "css-modules", // if you are using css modules in your project
  ],
  // For parser options, you can use the default like below, or use `parser: "babel-eslint"`
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    // node: true, // If you use it with Node then enable this.
  },
  rules: Object.assign(
    {},
    baseConfig({ flow: true, import: true, jest: true, react: true }),
    // Here you can add your own rules to overide intial rules:
    {
      "prettier/prettier": "error",
      "css-modules/no-undef-class": "error",
    }
  ),
  // Override Configure for Specific files
  overrides: [
    {
      // Jest.
      files: ["*.test.js"],
      env: { jest: true },
      // As you seen here we can enable Jest rules only for test
      // using `jest: true` and turn off `builtin` rules
      rules: baseConfig({ builtin: false, jest: true }),
    },
    {
      // If you are working with Storybook
      files: ["stories.js"],
      globals: {
        module: false,
      },
    },
    {
      // Node.js code.
      files: ["server/**/*.js"],
      env: { node: true },
      rules: {
        "import/order": ["error", { "newlines-between": "always" }],
      },
    },
  ],
  // Here you can add Shared Settings, for example
  settings: {
    react: {
      version: "detect",
    },
  },
};
```
