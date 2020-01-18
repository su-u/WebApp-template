module.exports = {
    plugins: ["@typescript-eslint"],
    parser: '@typescript-eslint/parser',
    extends:  [
        'plugin:prettier/recommended',
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    env: {
        es6: true,
        browser: true,
    },
    rules: {
        "import/no-default-export": "error",
        "react/jsx-uses-vars": ["warn"],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "prettier/prettier": ['error'],
    },
    settings:  {
        react:  {
            version:  'detect',
        },
        "import/resolver": {
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    },
}