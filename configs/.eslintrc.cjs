module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react-hooks/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "@typescript-eslint/consistent-type-definitions": "off", // we allow both types and interfaces
    "@typescript-eslint/space-before-function-paren": "off"
  }
}
