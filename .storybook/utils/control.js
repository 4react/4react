import merge from 'lodash/merge'

export const control = (arg, type, defaultValue, options) => (
  merge(
    arg,
    {
      control: {
        type,
        ...options
      },
      defaultValue
    }
  )
)
