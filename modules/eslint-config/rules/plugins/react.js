/* global module */

module.exports = {
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    /* REACT */

    // enforces consistent naming for boolean props
    'react/boolean-prop-naming': 'off',
    // forbid "button" element without an explicit "type" attribute
    'react/button-has-type': 'off',
    // enforce all defaultProps are defined and not "required" in propTypes
    'react/default-props-match-prop-types': 'off',
    // enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': ['error', 'always'],
    // prevent missing displayName in a React component definition
    'react/display-name': 'off',
    // forbid certain props on components
    'react/forbid-component-props': 'off',
    // forbid certain props on DOM Nodes
    'react/forbid-dom-props': 'off',
    // forbid certain elements
    'react/forbid-elements': 'off',
    // forbid using another component's propTypes
    'react/forbid-prop-types': 'off',
    // forbid certain propTypes
    'react/forbid-foreign-prop-types': 'off',
    // standardize the way function component get defined (fixable)
    'react/function-component-definition': 'off',
    // reports when this.state is accessed within setState
    'react/no-access-state-in-setstate': 'error',
    // prevent adjacent inline elements not separated by whitespace
    'react/no-adjacent-inline-elements': 'error',
    // prevent usage of Array index in keys
    'react/no-array-index-key': 'error',
    // prevent passing of children as props
    'react/no-children-prop': 'error',
    // prevent usage of dangerous JSX props
    'react/no-danger': 'warn',
    // report when a DOM element is using both children and dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',
    // prevent usage of deprecated methods
    'react/no-deprecated': 'error',
    // prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 'error',
    // prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'error',
    // prevent usage of setState in componentDidUpdate
    'react/no-direct-mutation-state': 'error',
    // prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',
    // prevent usage of isMounted
    'react/no-is-mounted': 'error',
    // prevent multiple component definition per file
    'react/no-multi-comp': 'off',
    // flag shouldComponentUpdate when extending PureComponent
    'react/no-redundant-should-component-update': 'error',
    // prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',
    // prevent usage of setState
    'react/no-set-state': 'off',
    // prevent string definitions for references and prevent referencing this.refs
    'react/no-string-refs': 'error',
    // report "this" being used in stateless components
    'react/no-this-in-sfc': 'error',
    // prevent common typos
    'react/no-typos': 'error',
    // detect unescaped HTML entities, which might represent malformed tags
    'react/no-unescaped-entities': 'error',
    // prevent usage of unknown DOM property (fixable)
    'react/no-unknown-property': ['error', {
      'ignore': ['data-cy']
    }],
    // prevent usage of unsafe lifecycle methods
    'react/no-unsafe': 'warn',
    // prevent definitions of unused prop types
    'react/no-unused-prop-types': 'off',
    // prevent definition of unused state fields
    'react/no-unused-state': 'error',
    // prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'error',
    // enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': ['error', 'always'],
    // require read-only props. (fixable)
    'react/prefer-read-only-props': 'off',
    // enforce stateless components to be written as a pure function
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    // prevent missing props validation in a React component definition
    'react/prop-types': 'off',
    // prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',
    // enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'off',
    // enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 'off',
    // enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',
    // prevent extra closing tags for components without children (fixable)
    'react/self-closing-comp': 'error',
    // enforce component methods order
    'react/sort-comp': ['error', {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'getters',
        'setters',
        'instance-methods',
        'everything-else',
        '/^on.+$/',
        '/^render.+$/',
        'render'
      ]
    }],
    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 'off',
    // state initialization in an ES6 class component should be in a constructor
    'react/state-in-constructor': ['error', 'always'],
    // defines where React component static properties should be positioned
    'react/static-property-placement': ['error', 'static public field'],
    // enforce style prop value is an object
    'react/style-prop-object': 'error',
    // prevent passing of children to void DOM elements
    'react/void-dom-elements-no-children': 'error',

    /* JSX */

    // enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 'off',
    // ensures inline tags are not rendered without spaces between them
    'react/jsx-child-element-spacing': 'off',
    // validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    // validate closing tag location for multiline JSX
    'react/jsx-closing-tag-location': 'error',
    // disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
    'react/jsx-curly-brace-presence': ['error', { children: 'never' }],
    // enforce consistent line breaks inside jsx curly
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent'
    }],
    // enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    // disallow or enforce spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': ['error', 'never'],
    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', 'tsx'] }],
    // ensure proper position of the first property in JSX
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // enforce shorthand or standard form for React fragments
    'react/jsx-fragments': ['error', 'syntax'],
    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],
    // validate JSX indentation
    'react/jsx-indent': ['error', 2],
    // validate props indentation in JSX
    'react/jsx-indent-props': ['error', 2],
    // report missing key props in iterators/collection literals
    'react/jsx-key': ['error', { 'checkFragmentShorthand': true }],
    // validate JSX maximum depth
    'react/jsx-max-depth': 'off',
    // limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    // prevents usage of Function.prototype.bind and arrow functions in React component props
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: false
    }],
    // comments inside children section of tag should be placed inside braces
    'react/jsx-no-comment-textnodes': 'error',
    // enforce no duplicate props
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    // prevent using string literals in React component definition
    'react/jsx-no-literals': 'off',
    // forbid javascript: URLs
    'react/jsx-no-script-url': 'off',
    // forbid target="_blank" attribute without rel="noreferrer"
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    // disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',
    // disallow unnecessary fragments
    'react/jsx-no-useless-fragment': 'error',
    // limit to one expression per line in JSX
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    // enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true
    }],
    // disallow multiple spaces between inline JSX props
    'react/jsx-props-no-multi-spaces': 'error',
    // prevent JSX prop spreading
    'react/jsx-props-no-spreading': 'off',
    // enforce default props alphabetical sorting
    'react/jsx-sort-default-props': 'off',
    // enforce props alphabetical sorting
    'react/jsx-sort-props': 'off',
    // validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': ['warn', 'always'],
    // validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    // prevent React to be marked as unused
    'react/jsx-uses-react': ['error'],
    // prevent variables used in JSX to be marked as unused
    'react/jsx-uses-vars': 'error',
    // prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],

    /* REACT HOOKS */

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off'
  }
}
