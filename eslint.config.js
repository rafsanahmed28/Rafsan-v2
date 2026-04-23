import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";

export default [
  { ignores: ["build", "dist", "node_modules", "coverage"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/prop-types": "off",
      // React Three Fiber uses custom JSX props on three.js elements (attach,
      // args, position, rotation, etc.) that aren't real HTML attributes.
      "react/no-unknown-property": "off",
      // Cosmetic rules on ported v1 text content \u2014 keep visible but non-blocking.
      "react/no-unescaped-entities": "warn",
      "react/jsx-no-target-blank": "warn",
      // React Compiler readiness rules from eslint-plugin-react-hooks v7 \u2014
      // ported v1 components use patterns that trigger these. Track as warnings
      // and clean up in a dedicated pass.
      "react-hooks/purity": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/refs": "warn",
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
  prettier,
];
