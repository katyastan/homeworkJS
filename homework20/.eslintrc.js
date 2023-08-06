module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  plugins: [
    'mocha',
  ],
  extends: [
    'plugin:mocha/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: { 
    "mocha/no-skipped-tests": "error",
    "mocha/no-exclusive-tests": "error",
    "semi": [2, "always"],
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
      ],
    }
  ],
};
