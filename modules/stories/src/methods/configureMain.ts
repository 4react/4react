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
    stories,
    webpackFinal: async (config: any) => {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: "ts-loader"
      })
      config.resolve.extensions.push('.ts', '.tsx')
      return config
    }
  }
}

export default configureMain
