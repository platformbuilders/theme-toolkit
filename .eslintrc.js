module.exports = {
  extends: "@platformbuilders/eslint-config-builders",
  overrides: [{
    files: "**/*.+(ts|tsx|js)",
    parserOptions: {
      project: 'tsconfig.eslint.json',
      tsconfigRootDir: '.',
      ecmaVersion: 2020,
      sourceType: 'module',
      useJSXTextNode: true,
      ecmaFeatures: {
        jsx: true,
      },
    },
  }]
};
