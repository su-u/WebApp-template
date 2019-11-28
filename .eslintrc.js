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
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  {
            jsx: true,  // Allows for the parsing of JSX
        },
        project: "./tsconfig.json",
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