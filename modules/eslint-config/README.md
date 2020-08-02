# @4react / eslint-config

**ESlint** configurations for React Applications.

## Usage with JavaScript
JavaScript configuration use **babel-eslint** parser.

Install dependencies
```
npm i -D babel-eslint @4react/eslint-config
```

Extends configuration in `.eslintrc` file:
```json
{
  "parser": "babel-eslint",
  "extends": "@4react"
}
```

## Usage with TypeScript
TypeScript configuration use **@typescript-eslint** parser.

Install dependencies
```
npm i -D @typescript-eslint/parser @4react/eslint-config
```

Extends configuration in `.eslintrc` file:
```json
{
  "parser": "@typescript-eslint/parser",
  "extends": "@4react/eslint-config/typescript"
}
```

## Plugins

List of all used plugins:
 - **`eslint-plugin-import`**
 - **`eslint-plugin-node`**
 - **`eslint-plugin-react`**
 - **`eslint-plugin-react-hooks`**
 - **`eslint-plugin-jsdoc`**
 - **`@typescript-eslint/eslint-plugin`** (TypeScript only)
