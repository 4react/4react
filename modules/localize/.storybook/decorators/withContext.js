import React from 'react'
import Localization from '../../src/components/Localization'
import initI18n from '../../src/helpers/initI18n'

initI18n(['en', 'it'])

const withContext = (Story) => {
  return (
    <Localization>
      <Story />
    </Localization>
  )
}

export default withContext
