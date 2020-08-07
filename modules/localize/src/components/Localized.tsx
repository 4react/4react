import React, { FC, isValidElement, Fragment, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import LocalizationContext from '../mixins/context'

const placeholder = new RegExp('{{([a-zA-Z0-9]+)}}')

interface LocalizedProps {
  label: string
  ns?: string
  fillers?: { [filler: string]: any }
  lang?: string
}

const Localized: FC<LocalizedProps> = props => {
  const { label, ns, fillers = {}, lang } = props
  const { defaultNS } = useContext(LocalizationContext)
  const { t } = useTranslation(ns || defaultNS)

  const i18nextFillers: { [key: string]: string } = {}
  Object.keys(fillers).forEach(key => {
    const filler = fillers[key]
    if (isValidElement(filler)) {
      i18nextFillers[key] = `{{${key}}}`
    } else {
      i18nextFillers[key] = filler
    }
  })
  const localizedLabel = t(
    label,
    {
      ...i18nextFillers,
      ...(lang && { lng: lang })
    }
  )

  const parts = localizedLabel.split(placeholder)
  return (
    <>
      {parts.map((part, idx) => {
        if (idx % 2) {
          return (
            <Fragment key={part}>
              {fillers[part]}
            </Fragment>
          )
        }
        return (
          <Fragment key={part}>
            {part}
          </Fragment>
        )
      })}
    </>
  )
}

export default Localized
