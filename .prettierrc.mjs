// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  jsxBracketSameLine: true,
  useTabs: false,
  tabWidth: 2,
  plugins: ["prettier-plugin-astro"],
};
