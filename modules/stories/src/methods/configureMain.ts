// eslint-disable-next-line @typescript-eslint/no-var-requires

export interface MainConfigOptions {
  stories: string[]
  addons?: string[]
}

export const configureMain = (options: MainConfigOptions) => {
  const { stories, addons = [] } = options
  return {
    addons: [
      '@storybook/addon-knobs',
      '@storybook/addon-actions',
      ...addons
    ],
    stories: stories,
    webpackFinal: async (config: any) => {
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

export default configureMain
