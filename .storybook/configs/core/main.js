const { configureMain } = require('@4react/config/storybook')

module.exports = configureMain({
  stories: [
    // INDEX
    './index.stories.mdx',
    // DATA TYPES
    // Primitives
    '../../../modules/data-types/**/boolean.stories.mdx',
    '../../../modules/data-types/**/number.stories.mdx',
    '../../../modules/data-types/**/string.stories.mdx',
    '../../../modules/data-types/**/array.stories.mdx',
    '../../../modules/data-types/**/function.stories.mdx',
    '../../../modules/data-types/**/object.stories.mdx',
    // React
    '../../../modules/data-types/**/ClassNames.stories.mdx',
    // FLEX
    '../../../modules/flex/**/Flex.stories.mdx',
  ]
})
