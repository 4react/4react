module.exports = {
  plugins: [
    'cypress'
  ],
  rules: {
    // Prevent assigning return values of cy calls
    'no-assigning-return-values': 'error',
    // Prevent waiting for arbitrary time periods
    'no-unnecessary-waiting': 'error',
    // Prevent using async/await in Cypress test case
    'no-async-tests': 'error',
    // Disallow using force: true with action commands
    'no-force': 'warn',
    // Ensure screenshots are preceded by an assertion
    'assertion-before-screenshot': 'warn',
    // Only allow data-* attribute selectors (require-data-selectors)
    'require-data-selectors': 'off'
  }
}
