/** @type {import("eslint").Linter.Config} */
module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  extends: [
    "plugin:astro/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/no-set-html-directive": "error",
        "@typescript-eslint/no-explicit-any": "error",
      },
    },
  ],
  root: true,
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
};
