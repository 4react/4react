/* global module */

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      }
    }
  },
  globals: {
    document: true,
    window: true
  },
  extends: [
    './rules/base/best-practises.js',
    './rules/base/es6.js',
    './rules/base/possible-errors.js',
    './rules/base/strict.js',
    './rules/base/stylistic-issues.js',
    './rules/base/variables.js',
    './rules/plugins/import',
    './rules/plugins/jsdoc',
    './rules/plugins/node',
    './rules/plugins/react',
    './rules/plugins/typescript'
  ]
}
