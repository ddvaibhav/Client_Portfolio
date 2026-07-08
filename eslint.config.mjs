import nextEslintConfig from "eslint-config-next";

/**
 * ESLint flat config for Next.js.
 * eslint-config-next exports an array of flat configs.
 */
const nextConfigArray = Array.isArray(nextEslintConfig)
  ? nextEslintConfig
  : [nextEslintConfig];

export default [
  ...nextConfigArray,

  // Project-wide ignores (avoid linting build artifacts and deps)
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/out/**",
      "**/dist/**",
    ],
  },

  // Local overrides (keep minimal to avoid breaking existing behavior)
  {
    rules: {
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

