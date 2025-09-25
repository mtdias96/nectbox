import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      "prettier/prettier": "error",
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "no-empty": "off",
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "eol-last": ["error", "always"],
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-duplicate-imports": "error",
      "no-console": "warn",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: true,
          },
        },
      ],
    },
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  prettier,
]);
