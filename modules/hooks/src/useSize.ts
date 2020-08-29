import { RefObject, useEffect, useMemo, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export interface ElementRect {
  x: number
  y: number
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
}

export const useSize = <T extends HTMLElement>(ref?: RefObject<T | undefined>): ElementRect | undefined => {
  const [rect, setRect] = useState<ElementRect>()

  const observer = useMemo(() => (
    new ResizeObserver(entries => entries.forEach(entry => {
      setRect(entry.contentRect)
    }))
  ), [])

  useEffect(() => {
    if (ref?.current) {
      observer.observe(ref.current)
    } else {
      observer.observe(document.getElementsByTagName('body')[0])
    }
  }, [ref])

  return rect
}
