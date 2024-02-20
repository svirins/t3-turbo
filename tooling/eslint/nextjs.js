/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ["plugin:@next/next/core-web-vitals", "plugin:tailwindcss/recommended"],
 plugins: ["tailwindcss"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/require-await": "off",
    "tailwindcss/no-custom-classname": "off"
  },
  settings: {
    "tailwindcss": {
      "callees": ["cn"],
      "config": "tailwind.config.js"
    }
  },
};

module.exports = config;
