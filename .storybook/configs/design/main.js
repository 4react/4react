const { configureMain } = require('@4react/config/storybook')

module.exports = configureMain({
  stories: [
    // INDEX
    './index.stories.mdx',
    // DESIGN
    '../../../modules/design/**/*.stories.@(js|mdx)',
  ]
})
