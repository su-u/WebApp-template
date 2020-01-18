module.exports ={
    "root": true,
    "env": {
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "prettier"
    ],
    "parserOptions": {
        "version": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/react"
    ],
    "rules": {
        "no-console": "warn",
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "semi-spacing": ["error", {"after": true, "before": false}],
        "semi-style": ["error", "last"],
        "no-extra-semi": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "indent": [ 2, 2 ],
    },
};