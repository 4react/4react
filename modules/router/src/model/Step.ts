import { match } from '../utils/regex'

// regex

const regexChar = '[^\\/]'
const stepValueChar = `[^()\\/?&=#:]`
const paramNameChar = '[a-zA-Z0-9]'

const regexDef = `${regexChar}+`
const valueDef = `${stepValueChar}+`
const paramName = `${paramNameChar}+`

const simpleValue = `(${valueDef})`
const regexValue = `=(${regexDef})`
const simpleParam = `:(${paramName})`
const regexParam = `:(${paramName})=(${regexDef})`

const value = `(?:(?:${simpleValue})|(?:${regexValue}))`
const param = `(?:(?:${simpleParam})|(?:${regexParam}))`

export const step = `(?:(?:${param})|(?:${value}))`

export interface Step {
  name?: string
  value?: string
  regex?: RegExp
}

export const parseRoutePathStep = (source: string): Step => {
  const matchStep = match(source, step)
  if (matchStep) {

    const matchParam = match(source, param)
    if (matchParam) {

      const matchSimpleParam = match(source, simpleParam)
      if (matchSimpleParam) {
        return { name: matchSimpleParam[1] }
      }

      const matchRegexParam = match(source, regexParam)
      if (matchRegexParam) {
        return {
          name: matchRegexParam[1],
          regex: new RegExp(matchRegexParam[2])
        }
      }
    }

    const matchValue = match(source, value)
    if (matchValue) {

      const matchSimpleValue = match(source, simpleValue)
      if (matchSimpleValue) {
        return { value: matchSimpleValue[1] }
      }

      const matchRegexValue = match(source, regexValue)
      if (matchRegexValue) {
        return { regex: new RegExp(matchRegexValue[1]) }
      }
    }
  }

  throw new Error('@4react/router | Invalid path step')
}
