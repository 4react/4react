/* global module */

module.exports = {
  plugins: [
    'jsdoc'
  ],
  rules: {
    // checks that @access tags use one of the following values
    'jsdoc/check-access': 'warn',
    // reports invalid alignment of JSDoc block asterisks
    'jsdoc/check-alignment': 'warn',
    // ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
    'jsdoc/check-examples': 'off',
    // reports invalid padding inside JSDoc blocks
    'jsdoc/check-indentation': 'warn',
    // ensures that parameter names in JSDoc match those in the function declaration
    'jsdoc/check-param-names': 'warn',
    // ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots
    'jsdoc/check-property-names': 'warn',
    // reports against syntax not encouraged for the mode
    'jsdoc/check-syntax': 'warn',
    // reports invalid block tag names
    'jsdoc/check-tag-names': 'warn',
    // reports invalid types
    'jsdoc/check-types': 'off',
    // this rule checks the values for a handful of tags
    'jsdoc/check-values': 'off',
    // expects the following tags to be empty of any content
    'jsdoc/empty-tags': 'off',
    // reports an issue with any non-constructor function using @implements
    'jsdoc/implements-on-classes': 'off',
    // enforces a regular expression pattern on descriptions
    'jsdoc/match-description': 'off',
    // enforces a consistent padding of the block description
    'jsdoc/newline-after-description': 'off',
    // this rule reports types being used on @param or @returns
    'jsdoc/no-types': 'warn',
    // checks that types in jsdoc comments are defined. This can be used to check unimported types
    'jsdoc/no-undefined-types': 'warn',
    // requires that all functions have a description
    'jsdoc/require-description': 'warn',
    // requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences
    'jsdoc/require-description-complete-sentence': 'warn',
    // requires that all functions have examples
    'jsdoc/require-example': 'off',
    // checks that:
    // 1. all files have a @file, @fileoverview, or @overview tag.
    // 2. duplicate file overview tags within a given file will be reported
    // 3. file overview tags will be reported which are not, as per the docs, "at the beginning of the file"–where beginning of the file is interpreted in this rule as being when the overview tag is not preceded by anything other than a comment
    'jsdoc/require-file-overview': 'off',
    // requires (or disallows) a hyphen before the @param description
    'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
    // checks for presence of jsdoc comments, on class declarations as well as functions
    'jsdoc/require-jsdoc': 'off',
    // requires that all function parameters are documented
    'jsdoc/require-param': 'warn',
    // requires that each @param tag has a description value
    'jsdoc/require-param-description': 'off',
    // requires that all function parameters have names
    'jsdoc/require-param-name': 'warn',
    // requires that each @param tag has a type value
    'jsdoc/require-param-type': 'off',
    // requires that all @typedef and @namespace tags have @property when their type is a plain object, Object, or PlainObject.
    'jsdoc/require-property': 'off',
    // requires that each @property tag has a description value.
    'jsdoc/require-property-description': 'warn',
    // requires that all function @property tags have names.
    'jsdoc/require-property-name': 'warn',
    // requires that each @property tag has a type value.
    'jsdoc/require-property-type': 'off',
    // requires that returns are documented
    'jsdoc/require-returns': 'off',
    // requires a return statement in function body if a @returns tag is specified in jsdoc comment
    'jsdoc/require-returns-check': 'warn',
    // requires that the @returns tag has a description value. The error will not be reported if the return value is void or undefined or if it is Promise<void> or Promise<undefined>
    'jsdoc/require-returns-description': 'warn',
    // requires that @returns tag has type value
    'jsdoc/require-returns-type': 'off',
    // requires that throw statements are documented
    'jsdoc/require-throws': 'warn',
    // requires all types to be valid JSDoc, Closure, or TypeScript compiler types without syntax errors
    'jsdoc/valid-types': 'error'
  }
}
