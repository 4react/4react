# @4react / config
Configurations for React modules

```
npm i -D @4react/config
```

## Configuration

#### Compile `package.json`
```
{
  "_name": "<name>",
  "name": "@<scope>/<name>",
  "version": "<version>",
  "author": "<author>",
  "license": "MIT",
  "homepage": "https://github.com/<repo>/<name>",
  "main": "dist/index.js",
  "module": "dist/index.module.js",
  "types": "dist",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "rimraf dist && webpack"
  }
}
```

#### Add `tsconfig.json`
```json
{
  "extends": "@4react/config/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": [
    "src"
  ]
}

```

#### Add `webpack.preview.js`
```js
module.exports = require('modules/config/webpack/webpack.preview.js')
```
