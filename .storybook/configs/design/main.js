const { configureMain } = require('@4react/config/storybook')

module.exports = configureMain({
  stories: [
    // INDEX
    './index.mdx',
    // DESIGN
    '../../../modules/design/**/*.stories.@(js|mdx)',
  ]
})
