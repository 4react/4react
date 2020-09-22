import { LocalizeError } from '../utils/errors'

export enum TranslationFragmentType {
  TEXT,
  FILLER,
  LABEL
}

export interface TranslationFragment {
  type: TranslationFragmentType
  value: string
}

export type Translation = TranslationFragment[]

const FILLER_REGEX = /^{(\w+)}$/
const LABEL_REGEX = /^{{(\w+)}}$/
const NESTING_REGEX = /({\w+}|{{\w+}})/

const parseTranslationNesting = (nesting: string): TranslationFragment => {
  let match
  if ((match = FILLER_REGEX.exec(nesting)) !== null) {
    return { type: TranslationFragmentType.FILLER, value: match[1] }
  }
  if ((match = LABEL_REGEX.exec(nesting)) !== null) {
    return { type: TranslationFragmentType.LABEL, value: match[1] }
  }
  throw new LocalizeError('parseTranslationNesting', 'Invalid nesting')
}

export const parseTranslation = (value: string): Translation => {
  const matchNesting = NESTING_REGEX.exec(value)
  if (matchNesting) {
    const [nesting] = matchNesting
    const { index } = matchNesting

    const prev = value.substring(0, index)
    const tail = value.substring(index + nesting.length)

    return [
      { type: TranslationFragmentType.TEXT, value: prev },
      parseTranslationNesting(nesting),
      ...parseTranslation(tail)
    ]
  }

  return [{ type: TranslationFragmentType.TEXT, value: value }]
}
