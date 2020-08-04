import { useEffect, useRef } from 'react'

/**
 * Store value of the previous render.
 * @param value Value to store.
 */
export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious
