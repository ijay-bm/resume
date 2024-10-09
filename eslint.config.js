import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        APP_VERSION: "readonly"
      },
      parserOptions: {
        ecmaVersion: "latest"
      }
    },
    plugins: {
      vue: pluginVue,
      prettier: prettier
    }
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      ...prettier.configs.recommended.rules,
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "vue/multi-word-component-names": "off"
    }
  }
];
