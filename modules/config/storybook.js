// const { withKnobs } = require('@storybook/addon-knobs')
// const { withActions } = require('@storybook/addon-actions')
const { addons } = require('@storybook/addons')
// const { addDecorator, addParameters } = require('@storybook/react')
const { create } = require('@storybook/theming/create')

exports.configureMain = options => {
  const { stories, addons: customAddons = [] } = options
  return {
    addons: [
      '@storybook/addon-viewport',
      '@storybook/addon-controls',
      '@storybook/addon-actions',
      '@storybook/addon-a11y',
      {
        name: '@storybook/addon-docs',
        options: {
          configureJSX: true,
          babelOptions: {},
          sourceLoaderOptions: null
        }
      },
      ...customAddons
    ],
    stories: stories,
    typescript: {
      reactDocgen: 'react-docgen'
    },
    webpackFinal: async config => {
      config.node = {
        fs: 'empty'
      }
      config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 1,
              modules: true
            }
          },
          'resolve-url-loader',
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

exports.configureManager = () => {
  addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    showRoots: true,
    theme: create({
      base: 'light'
      // colorPrimary?: string;
      // colorSecondary?: string;
      // appBg?: string;
      // appContentBg?: string;
      // appBorderColor?: string;
      // appBorderRadius?: number;
      // fontBase?: string;
      // fontCode?: string;
      // textColor?: string;
      // textInverseColor?: string;
      // barTextColor?: string;
      // barSelectedColor?: string;
      // barBg?: string;
      // inputBg?: string;
      // inputBorder?: string;
      // inputTextColor?: string;
      // inputBorderRadius?: number;
      // brandTitle?: string;
      // brandUrl?: string;
      // brandImage?: string;
      // gridCellSize?: number;
    })
  })
}

// exports.configurePreview = (options = {}) => {
//   const {
//     decorators = []
//   } = options
//
//   // decorators
//   addDecorator(withKnobs)
//   addDecorator(withActions)
//   decorators.forEach(decorator => {
//     // @ts-ignore
//     addDecorator(decorator)
//   })
//
//   // parameters
//   addParameters({
//     knobs: {
//       escapeHTML: false
//     }
//   })
// }
