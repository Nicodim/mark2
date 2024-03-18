module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    ignorePatterns: [
        '.eslintrc.js',
        'jest.config.ts',
        'buildDevServer.ts',
        'buildResolvers.ts',
        'buildLoaders.ts',
        'buildPlugins.ts',
        'webpack.config.ts',
        'config.ts',
        'buildWebpackConfig.ts',
        'setupTests.ts',
        'jestEmptyComponent.tsx'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next"
    ],

    rules: {
        // "react/jsx-indent": [2, 4],
        // "react/jsx-indent-props": [2, 4],
        // indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-misused-promises': 'warn',
        'i18next/no-literal-string': ['error', {markupOnly: true}],
        'max-len': ['error', {ignoreComments: true, code: 100}]
    },
    globals: {
        __IS_DEV__: true,
        // __API__: true,
        // __PROJECT__: true,
    },
}