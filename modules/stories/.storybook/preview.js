import { withGlobalStyle } from '../dist'

const { configurePreview } = require('@4react/config/storybook')

configurePreview({
  decorators: [withGlobalStyle]
})
