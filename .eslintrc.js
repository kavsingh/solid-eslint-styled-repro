module.exports = {
  root: true,
  env: { es6: true, node: true, browser: false },
  settings: {
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
  },
  extends: ["eslint:recommended"],
  overrides: [
    { files: ["*.js?(x)"], extends: ["plugin:solid/recommended"] },
    {
      files: ["*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: { project: "./tsconfig.json" },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:solid/typescript",
      ],
    },
  ],
};
