const { configureMain } = require('@4react/config/storybook')

module.exports = configureMain({
  stories: [
    '../modules/design/src/index.stories.mdx',
    '../modules/design/**/*.stories.@(js|mdx)',
  ]
})
