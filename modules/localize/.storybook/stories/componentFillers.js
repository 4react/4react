import language from '../knobs/language'
import Localized from '../../src/components/Localized'
import React from 'react'

const ComponentFillersStory = () => {
  const lang = language('lang', 'props')

  const renderFiller1 = () => (
    <span style={{ color: 'red', fontWeight: 'bold', fontSize: 24 }}>
      <Localized label="text" lang={lang} />
    </span>
  )

  const renderFiller2 = () => (
    <img src="assets/smile.svg" alt="smile" style={{ width: 32 }} />
  )

  return (
    <Localized
      label="samples.components-fillers"
      lang={lang}
      fillers={{
        component: renderFiller1(),
        otherComponent: renderFiller2()
      }}
    />
  )
}

export default ComponentFillersStory
