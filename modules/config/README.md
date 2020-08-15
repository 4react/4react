# @4react / config
Configurations for React modules

```
npm i -D @4react/config
```

## Configuration

#### Compile `package.json`
```
{
  "name": "@<scope>/<name>",
  "version": "<version>",
  "author": "<author>",
  "license": "MIT",
  "homepage": "https://github.com/<repo>/<name>",
  "main": "dist/index.js",
  "module": "dist/index.module.js",
  "types": "dist",
  "files": [
    "dist",
    "package.json"
  ],
  "scripts": {
    "build": "rollup -c"
    "story": "start-storybook -s .storybook/assets"
  }
}
```

#### Add `tsconfig.json`
```json
{
  "extends": "@4react/config/tsconfig.json"
}
```

#### Add `rollup.config.js`
```js
export { default } from '@4react/config/rollup'
```
