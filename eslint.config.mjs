import globals from "globals";
import pluginJs from "@eslint/js";

import eslintJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  eslintJest.configs["flat/style"],
  eslintJest.configs["flat/recommended"],
  pluginJs.configs.recommended,
];