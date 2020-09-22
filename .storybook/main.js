const { configureMain } = require('@4react/config/storybook')

module.exports = configureMain({
  stories: [
    // DESIGN
    // '../modules/design/**/*stories.js',
    '../modules/skeleton/**/*stories.js',
    '../modules/stories/**/*stories.js',
    // CORE
    // '../modules/errors/**/*stories.js',
    '../modules/flex/**/*stories.js',
    // '../modules/forms/**/*stories.js',
    '../modules/store/**/*stories.js',
    '../modules/localize/**/*stories.js',
    '../modules/responsive/**/*stories.js',
    // '../modules/router/**/*stories.js',
  ]
})
