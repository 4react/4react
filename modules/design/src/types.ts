import { ReactNode } from 'react'
import isFunction from './utils/isFunction'

export type Content = ReactNode

export type RenderContent<T> = (props: T) => ReactNode

export type RenderContentProp<T> = Content | RenderContent<T>

export const renderContent = <T>(prop: RenderContentProp<T>, props: T): ReactNode => {
  if (isFunction(prop)) {
    return (prop as RenderContent<T>)(props)
  }
  return prop
}
