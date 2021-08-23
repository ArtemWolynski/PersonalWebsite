module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
          "e2e/tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        // AirBnB Styleguide rules
        'airbnb-typescript/base',
        // Settings for Prettier
        'plugin:prettier/recommended'
      ],
      rules: {
        "import/prefer-default-export": "off",
      }
    },
    {
      files: ["*.component.html"],
      "plugins": ['@typescript-eslint'],
      "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      rules: {
        "max-len": ["error", { "code": 140 }]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}
