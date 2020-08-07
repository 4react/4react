import language from '../knobs/language'
import Localized from '../../src/components/Localized'
import React from 'react'

const BasicStory = () => {
  const lang = language('lang', 'props')
  return (
    <Localized
      label="samples.basic"
      lang={lang}
    />
  )
}

export default BasicStory
