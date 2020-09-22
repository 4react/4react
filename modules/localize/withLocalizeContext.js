import React from 'react'
import LocalizationProvider from './src/components/LocalizationProvider/LocalizationProvider'

const withLocalizeContext = Story => (
  <LocalizationProvider
    languages={['en', 'it']}
    namespaces={['common', 'special']}
    pattern="/locales/{{namespace}}-{{language}}.json"
  >
    <Story />
  </LocalizationProvider>
)

export default withLocalizeContext
