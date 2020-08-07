/* global module */

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    'node': {
      tryExtensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.sass', '.scss']
    },
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
