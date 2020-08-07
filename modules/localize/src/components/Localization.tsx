import React, { FC } from 'react'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import LocalizationContext from '../mixins/context'

interface LocalizationProps {
  defaultNS?: string
}

const Localization: FC<LocalizationProps> = props => {
  const { defaultNS = 'translations', children } = props
  return (
    <LocalizationContext.Provider value={{ defaultNS }}>
      <I18nextProvider i18n={i18next}>
        {children}
      </I18nextProvider>
    </LocalizationContext.Provider>
  )
}

export default Localization
