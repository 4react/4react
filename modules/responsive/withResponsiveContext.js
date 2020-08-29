import { object } from '@storybook/addon-knobs'
import React from 'react'
import ResponsiveProvider from './src/components/ResponsiveProvider'

const withResponsiveContext = Story => {
  const breakpoints = object('breakpoints', { mobile: 0, tablet: 576, desktop: 992 }, 'provider')

  return (
    <ResponsiveProvider breakpoints={breakpoints}>
      <Story />
    </ResponsiveProvider>
  )
}

export default withResponsiveContext
