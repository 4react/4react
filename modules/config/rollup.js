const fs = require('fs')
const path = require('path')
const commonjs = require('rollup-plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
// const { eslint } = require('rollup-plugin-eslint')
const typescript = require('rollup-plugin-typescript2')
const dts = require('rollup-plugin-dts').default
const del = require('rollup-plugin-delete')

const appDirectory = fs.realpathSync(process.cwd())
const pkg = require(path.resolve(appDirectory, 'package.json'))
const globalLibs = Object.keys(pkg.dependencies || {})
const externalLibs = Object.keys(pkg.peedDependencies || {})

const buildConfig = {
  input: 'src/index.ts',
  output: [{
    file: 'dist/index.js',
    format: 'umd',
    globals: globalLibs,
    name: pkg.name
  }, {
    file: 'dist/index.module.js',
    format: 'es',
    globals: globalLibs,
    name: pkg.name
  }],
  plugins: [
    del({ targets: 'dist', hook: 'buildStart' }),
    postcss({
      modules: true
    }),
    typescript({
      clean: true,
      typescript: require('typescript'),
      verbosity: 0,
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          declarationDir: 'dist/types'
        },
        include: [
          'src/index.ts'
        ]
      }
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  external: externalLibs
}

const dtsConfig = {
  input: 'dist/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [
    dts(),
    del({ targets: 'dist/types', hook: 'buildEnd' }),
  ]
}

module.exports = [
  buildConfig,
  dtsConfig
]
