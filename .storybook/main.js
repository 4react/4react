const { configureMain } = require('@4react/config/storybook')

module.exports = configureMain({
  stories: [
    '../modules/**/stories.js',
    '../modules/**/*.stories.js'
  ]
})
