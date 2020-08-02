/* global module */

module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    // disabling conflicting rules
    'brace-style': 'off',
    'camelcase': 'off',
    'func-call-spacing': 'off',
    'indent': 'off',
    'no-array-constructor': 'off',
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-magic-numbers': 'off',
    'import/no-namespace': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'quotes': 'off',
    'require-await': 'off',
    'semi': 'off',

    // require that member overloads be consecutive
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    // requires using either T[] or Array<T> for arrays
    '@typescript-eslint/array-type': ['warn', { default: 'array' }],
    // Disallows awaiting a value that is not a Thenable
    "@typescript-eslint/await-thenable": "off",
    // Bans // @ts-<directive> comments from being used or requires descriptions after directive
    '@typescript-eslint/ban-ts-ignore': 'warn',
    // Bans // tslint:<rule-flag> comments from being used
    '@typescript-eslint/ban-tslint-comment': 'error',
    // @typescript-eslint/ban-tslint-comment
    '@typescript-eslint/ban-types': 'error',
    // Ensures that literals on classes are exposed in a consistent style
    '@typescript-eslint/class-literal-property-style': 'warn',
    // Enforces consistent usage of type assertions
    '@typescript-eslint/consistent-type-assertions': 'off',
    // Consistent with type definition either interface or type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Require explicit accessibility modifiers on class properties and methods
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public'} ],
    // Require explicit return and argument types on exported functions' and classes' public class methods
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Require a specific member delimiter style for interfaces and type literals
    '@typescript-eslint/member-delimiter-style': [
      'warn', {
        'multiline': {
          'delimiter': 'none'
        }
      }
    ],
    // Require a consistent member declaration order
    '@typescript-eslint/member-ordering': 'off',
    // Enforces using a particular method signature syntax
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    // Enforces naming conventions for everything across a codebase
    '@typescript-eslint/naming-convention': 'off',
    // Requires that .toString() is only called on objects which provide useful information when stringified
    '@typescript-eslint/no-base-to-string': 'off',
    // Disallow non-null assertion in locations that may be confusing
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    // o-confusing-non-null-assertion
    '@typescript-eslint/no-dynamic-delete': 'off',
    // Disallow the declaration of empty interfaces
    '@typescript-eslint/no-empty-interface': 'warn',
    // Disallow usage of the any type
    "@typescript-eslint/no-explicit-any": "off",
    // Disallow extra non-null assertion
    '@typescript-eslint/no-extra-null-assertion': 'off',
    // Forbids the use of classes as namespaces
    '@typescript-eslint/no-extraneous-class': 'error',
    // Requires Promise-like values to be handled appropriately
    '@typescript-eslint/no-floating-promises': 'warn',
    // Disallow iterating over an array with a for-in loop
    '@typescript-eslint/no-for-in-array': 'off',
    // Disallow the use of eval()-like methods
    '@typescript-eslint/no-implied-eval': 'off',
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    '@typescript-eslint/no-inferrable-types': 'off',
    // Disallows usage of void type outside of generic or return types
    '@typescript-eslint/no-invalid-void-type': 'off',
    // Enforce valid definition of new and constructor
    '@typescript-eslint/no-misused-new': 'error',
    // Avoid using promises in places not designed to handle them
    '@typescript-eslint/no-misused-promises': 'error',
    // Disallow the use of custom TypeScript modules and namespaces
    '@typescript-eslint/no-namespace': 'off',
    // Disallows using a non-null assertion after an optional chain expression
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    // Disallows non-null assertions using the ! postfix operator
    '@typescript-eslint/no-non-null-assertion': 'off',
    // Disallow the use of parameter properties in class constructors
    '@typescript-eslint/no-parameter-properties': 'off',
    // Disallows invocation of require()
    '@typescript-eslint/no-require-imports': 'warn',
    // Disallow aliasing this
    '@typescript-eslint/no-this-alias': 'error',
    // Disallow throwing literals as exceptions
    '@typescript-eslint/no-throw-literal': 'off',
    // Disallow the use of type aliases
    '@typescript-eslint/no-type-alias': 'off',
    // Flags unnecessary equality comparisons against boolean literals
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    // Prevents conditionals where the type is always truthy or always falsy
    '@typescript-eslint/no-unnecessary-condition': ['off', {
      ignoreRhs: true
    }],
    // Warns when a namespace qualifier is unnecessary
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    // Enforces that type arguments will not be used if not required
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    // Warns if a type assertion does not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    // Disallows assigning any to variables and properties
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    // Disallows calling an any type value
    '@typescript-eslint/no-unsafe-call': 'off',
    // Disallows member access on any typed variables
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // Disallows returning any from a function
    '@typescript-eslint/no-unsafe-return': 'off',
    // Disallow unused variables and arguments
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    // Disallows the use of require statements except in import statements
    '@typescript-eslint/no-var-requires': 'error',
    // Prefer usage of as const over literal type
    '@typescript-eslint/prefer-as-const': 'off',
    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    '@typescript-eslint/prefer-for-of': 'off',
    // Use function types instead of interfaces with call signatures
    '@typescript-eslint/prefer-function-type': 'warn',
    // Enforce includes method over indexOf method
    '@typescript-eslint/prefer-includes': 'warn',
    // Require that all enum members be literal values to prevent unintended enum member name shadow issues
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // Prefer using concise optional chain expressions instead of chained logical ands
    '@typescript-eslint/prefer-optional-chain': 'off',
    // Requires that private members are marked as readonly if they're never modified outside of the constructor
    '@typescript-eslint/prefer-readonly': 'off',
    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    // Prefer using type parameter when calling Array#reduce instead of casting
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    // Enforce that RegExp#exec is used instead of String#match if no global flag is provided
    '@typescript-eslint/prefer-regexp-exec': 'error',
    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    // Recommends using // @ts-expect-error over // @ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    // Requires any function or method that returns a Promise to be marked async
    '@typescript-eslint/promise-function-async': 'error',
    // Requires Array#sort calls to always provide a compareFunction
    '@typescript-eslint/require-array-sort-compare': 'off',
    // When adding two variables, operands must both be of type number or of type string
    '@typescript-eslint/restrict-plus-operands': 'warn',
    // Enforce template literal expressions to be of string type
    '@typescript-eslint/restrict-template-expressions': 'off',
    // Restricts the types allowed in boolean expressions
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Exhaustiveness checking in switch with union type
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    // Sets preference level for triple slash directives versus ES6-style import declarations
    '@typescript-eslint/triple-slash-reference': 'off',
    // Require consistent spacing around type annotations
    '@typescript-eslint/type-annotation-spacing': 'warn',
    // Requires type annotations to exist
    '@typescript-eslint/typedef': 'off',
    // Enforces unbound methods are called with their expected scope
    '@typescript-eslint/unbound-method': 'error',
    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    '@typescript-eslint/unified-signatures': 'off',

    /* EXTENSION */

    // Enforce consistent brace style for blocks
    '@typescript-eslint/brace-style': ['warn', '1tbs'],
    // Enforces consistent spacing before and after commas
    '@typescript-eslint/comma-spacing': 'off',
    // Enforce default parameters to be last
    '@typescript-eslint/default-param-last': 'off',
    // enforce dot notation whenever possible
    '@typescript-eslint/dot-notation': 'off',
    // Require or disallow spacing between function identifiers and their invocations
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    // Enforce consistent indentation
    '@typescript-eslint/indent': ['warn', 2],
    // require or disallow initialization in variable declarations
    '@typescript-eslint/init-declarations': 'error',
    // Enforce consistent spacing before and after keywords
    '@typescript-eslint/keyword-spacing': 'off',
    // Require or disallow an empty line between class members
    '@typescript-eslint/lines-between-class-members': 'off',
    // Disallow generic Array constructors
    '@typescript-eslint/no-array-constructor': 'error',
    // Disallow duplicate class members
    '@typescript-eslint/no-dupe-class-member': 'error',
    // Disallow empty functions
    '@typescript-eslint/no-empty-function': 'warn',
    // Disallow unnecessary parentheses
    '@typescript-eslint/no-extra-parens': 'off',
    // Disallow unnecessary semicolons
    '@typescript-eslint/no-extra-semi': 'off',
    // disallow this keywords outside of classes or class-like objects
    '@typescript-eslint/no-invalid-this': 'off',
    // Disallow literal numbers that lose precision
    '@typescript-eslint/no-loss-of-precision': 'warn',
    // Disallow magic numbers
    "@typescript-eslint/no-magic-numbers": "off",
    // Disallow unused expressions
    '@typescript-eslint/no-unused-expression': 'warn',
    // Disallow unused variables
    '@typescript-eslint/no-unused-vars': 'warn',
    // Disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': 'off',
    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': 'warn',
    // Enforce the consistent use of either backticks, double, or single quotes
    '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true }],
    // Disallow async functions which have no await expression
    '@typescript-eslint/require-await': 'warn',
    // Enforces consistent returning of awaited values
    '@typescript-eslint/return-await': 'warn',
    // Require or disallow semicolons instead of ASI
    '@typescript-eslint/semi': ['warn', 'never'],
    // Enforces consistent spacing before function parenthesis
    '@typescript-eslint/space-before-function-paren': 'off',
  }
}
