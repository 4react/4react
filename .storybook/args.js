import { arg } from './utils/arg'

export const childrenArg = arg('children', false, 'any', 'Content of the component')

export const classNameArg = arg('className', false, 'Classes', 'Classes of the component')

export const styleArg = arg('style', false, 'Styles', 'Styles of the component')
