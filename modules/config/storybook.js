/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports */

exports.configureMain = options => {
  const { stories, addons = [] } = options
  return {
    addons: [
      '@storybook/addon-knobs',
      '@storybook/addon-actions',
      ...addons
    ],
    stories: stories,
    webpackFinal: async config => {
      config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      })
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      })
      config.resolve.extensions.push('.ts', '.tsx')
      return config
    }
  }
}

const { addons } = require('@storybook/addons')
const { withKnobs } = require('@storybook/addon-knobs')
const { addDecorator, addParameters } = require('@storybook/react')

exports.configureManager = () => {
  addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    showRoots: false
  })
}

exports.configurePreview = (options = {}) => {
  const {
    decorators = []
  } = options

  // decorators
  addDecorator(withKnobs)
  decorators.forEach(decorator => {
    // @ts-ignore
    addDecorator(decorator)
  })

  // parameters
  addParameters({
    knobs: {
      escapeHTML: false
    }
  })
}
