import { SetState, UseState } from '../types'

export interface Obj<T> {
  [key: string]: T
}

export class AsObject<T> {
  state: Obj<T>
  setState: SetState<Obj<T>>

  constructor(source: UseState<Obj<T>>) {
    const [state, setState] = source
    this.state = state
    this.setState = setState
  }

  // basic

  /**
   * Gets the value associated to the specified key.
   * @param key
   */
  get(key: string): T {
    return this.state[key]
  }

  /**
   * Associates a value to the specified key.
   * @param key
   * @param value
   */
  set(key: string, value: T): void {
    this.setState(prev => ({
      ...prev,
      [key]: value
    }))
  }

  // properties

  /**
   * Number of keys inside the object.
   */
  get size(): number {
    return this.keys.length
  }

  /**
   * The set of all the keys of the object.
   */
  get keys(): string[] {
    return Object.keys(this.state)
  }

  /**
   * The set of all the values of the object.
   */
  get values(): T[] {
    return Object.values(this.state)
  }

  /**
   * Returns an array containing all of the [key, value] pairs
   * of a given object's own enumerable string properties.
   */
  get entries(): [string, T][] {
    return Object.entries(this.state)
  }

  // methods

  /**
   * Remove all values from the object.
   */
  clear(): void {
    this.setState({})
  }

  /**
   * Remove the specified key from the object.
   * @param key
   */
  delete(key: string): boolean {
    if (this.has(key)) {
      this.setState(prev => {
        const otherKeys = Object.keys(prev).filter(k => k !== key)
        return otherKeys.reduce<Obj<T>>(
          (newState: Obj<T>, currentKey: string) => {
            // eslint-disable-next-line no-param-reassign
            newState[key] = prev[currentKey]
            return newState
          }, {}
        )
      })
      return true
    }
    return false
  }

  /** Determines if the object contains the specified key. */
  has(key: PropertyKey): boolean {
    return this.state.hasOwnProperty(key)
  }

  /**
   * Returns a string representation of the object.
   */
  toString(): string {
    return this.state.toString()
  }

  /**
   * Returns the primitive value of the specified object.
   */
  valueOf(): Object {
    return this.state.valueOf()
  }
}

/**
 * Adapts a state of type object.
 * @param state The result of an useState call.
 *
 * @example
 * * const obj = asObject(useState({}))
 * * obj.set(key, value)
 * * const value = obj.get(key)
 * * obj.delete(key)
 */
export const asObject = <T>(state: UseState<Obj<T>>): AsObject<T> => (
  new AsObject<T>(state)
)

export default asObject
