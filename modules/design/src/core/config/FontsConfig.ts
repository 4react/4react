// eslint-disable-next-line node/no-missing-import,import/no-unresolved
import { Property } from 'csstype'
import { CSSProperties } from 'react'
import { Font } from '../../typography/font'

export interface FontConfig {
  family: Property.FontFamily
  weight: Property.FontWeight
}

export type FontsConfig = {
  [key in Font]: FontConfig
}

export const defaultFontsConfig: FontsConfig = {
  [Font.MEDIUM]: {
    family: 'Work Sans',
    weight: 500
  },
  [Font.BOLD]: {
    family: 'Work Sans',
    weight: 700
  }
}

export const fontConfigToCSS = (config: FontConfig): CSSProperties => ({
  fontFamily: `${config.family}, sans-serif`,
  fontWeight: config.weight
})
