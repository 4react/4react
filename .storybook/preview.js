const { configurePreview } = require('@4react/config/storybook')
const { withGlobalStyle } = require('@4react/stories')

configurePreview({
  decorators: [withGlobalStyle]
})
