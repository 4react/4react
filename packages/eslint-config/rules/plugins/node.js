/* global module */

module.exports = {
  extends: [
    'plugin:node/recommended'
  ],
  rules: {
    /* POSSIBLE ERRORS */

    /* require error handling in callbacks */
    'node/handle-callback-err': 'warn',
    /* ensure Node.js-style error-first callback pattern is followed */
    'node/no-callback-literal': 'warn',
    /* disallow the assignment to exports */
    // 'node/no-exports-assign': 'error',
    /* disallow import declarations which import extraneous modules */
    // 'node/no-extraneous-import': 'error',
    /* disallow require() expressions which import extraneous modules */
    // 'node/no-extraneous-require': 'error',
    /* disallow import declarations which import non-existence modules */
    // 'node/no-missing-import': 'error',
    /*	disallow require() expressions which import non-existence modules */
    // 'node/no-missing-require': 'error',
    /* disallow new operators with calls to require */
    'node/no-new-require': 'warn',
    /* disallow string concatenation with __dirname and __filename */
    'node/no-path-concat': 'warn',
    /* disallow the use of process.exit() */
    // 'no-process-exit': 'error',
    /* disallow bin files that npm ignores */
    // 'node/no-unpublished-bin': 'error',
    /* disallow import declarations which import private modules */
    // 'node/no-unpublished-import': 'error',
    /* disallow require() expressions which import private modules */
    // 'node/no-unpublished-require': 'error',
    /* disallow unsupported ECMAScript built-ins on the specified version */
    // 'node/no-unsupported-features/es-builtins': 'error',
    /* disallow unsupported ECMAScript syntax on the specified version */
    // 'node/no-unsupported-features/es-syntax': ['error', { ignores: [] }],
    /* disallow unsupported Node.js built-in APIs on the specified version */
    // 'node/no-unsupported-features/node-builtins': 'error',
    /* make process.exit() expressions the same code path as throw */
    // 'node/process-exit-as-throw': 'error',
    /* suggest correct usage of shebang */
    // 'node/shebang': 'error',

    /* BEST PRACTICES */

    /* disallow deprecated APIs */
    // 'node/no-deprecated-api': 'error',

    /* STYLISTIC ISSUES */

    /* require return statements after callbacks */
    'node/callback-return': 'off',
    /* enforce either module.exports or exports */
    'node/exports-style': 'off',
    /* enforce the style of file extensions in import declarations */
    'node/file-extension-in-import': 'off',
    /* require require() calls to be placed at top-level module scope */
    'node/global-require': 'off',
    /* disallow require calls to be mixed with regular variable declarations */
    'node/no-mixed-requires': 'off',
    /* disallow the use of process.env */
    'node/no-process-env': 'off',
    /* disallow specified modules when loaded by import declarations */
    'node/no-restricted-import': 'off',
    /* disallow specified modules when loaded by require */
    'node/no-restricted-require': 'off',
    /* disallow synchronous methods */
    'node/no-sync': 'off',
    /* enforce either Buffer or require("buffer").Buffer */
    'node/prefer-global/buffer': 'off',
    /* enforce either console or require("console") */
    'node/prefer-global/console': 'off',
    /* enforce either process or require("process") */
    'node/prefer-global/process': 'off',
    /* enforce either TextDecoder or require("util").TextDecoder */
    'node/prefer-global/text-decoder': 'off',
    /* enforce either TextEncoder or require("util").TextEncoder	 */
    'node/prefer-global/text-encoder': 'off',
    /* enforce either URLSearchParams or require("url").URLSearchParams */
    'node/prefer-global/url-search-params': 'off',
    /* enforce either URL or require("url").URL	 */
    'node/prefer-global/url': 'off',
    /* enforce require("dns").promises */
    'node/prefer-promises/dns': 'warn',
    /* enforce require("fs").promises	 */
    'node/prefer-promises/fs': 'warn',
  }
}
