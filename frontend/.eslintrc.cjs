// eslintConfig.js
import eslintRecommended from "eslint:recommended";
import reactRecommended from "plugin:react/recommended";
import reactHooksRecommended from "plugin:react-hooks/recommended";

export default {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [eslintRecommended, reactRecommended, reactHooksRecommended],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
