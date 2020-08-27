import React from 'react'
import Localization from './src/components/Localization'
import initI18n from './src/helpers/initI18n'

initI18n(['en', 'it'])

const withLocalizeContext = Story => (
  <Localization>
    <Story />
  </Localization>
)

export default withLocalizeContext
