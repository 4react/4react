import { EventHandler, useEffect, useRef } from 'react'

/**
 * Attaches an event handler on the specified HTML element (or on window) whe component did mount.
 * When component will unmount, remove the handler from the element.
 * @param event The type of the event to handle.
 * @param handler The handler for the specified event.
 * @param [element] The element on which the listener is applied If not specified, window will be used.
 *
 * @example
 * * const Foo = () => {
 * *   useEventListener('scroll', handleScroll) // attached to window
 * *
 * *   const element = useRef()
 * *   useEventListener('mouseEnter', handleMouseEnter, element.current)
 * * }
 */
export const useEventListener = (
  event: string,
  handler: EventHandler<any>,
  element: HTMLElement | Window = window
) => {
  const savedHandler = useRef<EventHandler<any>>();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    }
    element.addEventListener(event, eventListener)
    return () => {
      element.removeEventListener(event, eventListener)
    }
  }, [element])
}

export default useEventListener
