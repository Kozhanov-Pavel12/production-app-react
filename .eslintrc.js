module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        jest: true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        "react/react-in-jsx-scope": 'off',
        "import/prefer-default-export": 'off',
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "no-shadow": 'off',
        "react/no-deprecated": 'off',
        "@typescript-eslint/naming-convention": 'off',
        'i18next/no-literal-string': ['error', { marlupOnly: true } ],
        "max-len": ['error', { ignoreComments: true }]
    },
}
