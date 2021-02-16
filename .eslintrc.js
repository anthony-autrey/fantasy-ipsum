// module.exports = {
//   parser: `@typescript-eslint/parser`, // Specifies the ESLint parser
//   parserOptions: {
//     parser: `@typescript-eslint/parser`,
//   },
//   extends: [
//     // `plugin:@typescript-eslint/recommended`, // Uses the recommended rules from the @typescript-eslint/eslint-plugin
//     `prettier/@typescript-eslint`, // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
//     `plugin:prettier/recommended`, // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//   ],
//   rules: {
//     quotes: [`warn`, `backtick`],

//     // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
//     // e.g. "@typescript-eslint/explicit-function-return-type": "off",
//   },
// };

module.exports = {
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: `@typescript-eslint/parser`,
  },
  extends: [
    `plugin:@typescript-eslint/recommended`, // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    `prettier/@typescript-eslint`, // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // `plugin:prettier/recommended`, // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  //   extends: [
  //   `plugin:@typescript-eslint/recommended`, // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  //   `prettier/@typescript-eslint`,
  //   `plugin:prettier/recommended`,
  // ],
};

module.exports = {
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: `module`,
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  // parser: `@typescript-eslint/parser`,    root: true,
  //   env: {
  //     node: true
  // },
  // extends: [`plugin:vue/essential`, `@vue/prettier`, `@vue/typescript`],
  parserOptions: {
    parser: `@typescript-eslint/parser`,
  },
  plugins: [`@typescript-eslint`, `prettier`],
  extends: [
    `plugin:@typescript-eslint/recommended`, // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    `prettier/@typescript-eslint`,
    // `plugin:prettier/recommended`,
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': `off`,
    '@typescript-eslint/explicit-module-boundary-types': `off`,
    quotes: [`warn`, `backtick`],
    // "@typescipt-eslint/interface-name-prefix": [`always`],
    // "no-underscore-dangle": `error`,
  },
};
