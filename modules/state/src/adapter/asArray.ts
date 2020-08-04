import { SetState, UseState } from '../types'

export class AsArray<T> {
  /** The original array state */
  state: T[]
  /** The original state setter */
  setState: SetState<T[]>

  constructor(source: UseState<T[]>) {
    const [state, setState] = source
    this.state = state
    this.setState = setState
  }

  // basic

  /**
   * Gets the value at the specified index.
   * @param index
   */
  get(index: number): T {
    return this.state[index]
  }

  /**
   * Set the value at the specified index.
   * @param index
   * @param value
   */
  set(index: number, value: T): void {
    this.setState([
      ...this.state.slice(0, index),
      value,
      ...this.state.slice(index + 1)
    ])
  }

  // properties

  /**
   * Number of elements in the array.
   */
  get length(): number {
    return this.state.length
  }

  /**
   * First element in the array.
   */
  get first(): T {
    return this.get(0)
  }

  /**
   * Last element in the array.
   */
  get last(): T {
    return this.get(this.length - 1)
  }

  // methods

  /**
   * Returns a new array that is this array joined with other array(s) and/or value(s)
   * @param elements
   */
  concat (...elements: T[]): T[] {
    return this.state.concat(...elements)
  }

  /**
   * Copies a sequence of array elements within the array.
   * @param target
   * @param start
   * @param [end]
   */
  copyWithin(target: number, start: number, end?: number): void {
    this.state.copyWithin(target, start, end)
  }

  /**
   * Returns a new Array Iterator object that contains
   * the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, T]> {
    return this.state.entries()
  }

  /**
   * Returns true if every element in this array satisfies the testing function.
   * @param callback
   * @param [thisArg]
   */
  every(callback: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    return this.state.every(callback, thisArg)
  }

  /**
   * Fills all the elements of an array from a start index to an end index with a static value.
   * @param value
   * @param [start]
   * @param [end]
   */
  fill(value: T, start?: number, end?: number): void {
    this.setState(this.state.fill(value, start, end))
  }

  /**
   * Returns a new array containing all elements of the calling
   * array for which the provided filtering function returns true.
   * @param callback
   * @param [thisArg]
   */
  filter<S extends T>(callback: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[] {
    return this.state.filter<S>(callback, thisArg)
  }

  /**
   * Returns the found element in the array, if some element in the
   * array satisfies the testing function, or undefined if not found.
   * @param predicate
   * @param [thisArg]
   */
  find<S extends T>(
    predicate: (this: void, value: T, index: number, obj: T[]) => value is S,
    thisArg?: any
  ): S | undefined {
    return this.state.find<S>(predicate, thisArg)
  }

  /**
   * Returns the found index in the array, if an element in the array
   * satisfies the testing function, or -1 if not found.
   * @param predicate
   * @param [thisArg]
   */
  findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number {
    return this.state.findIndex(predicate, thisArg)
  }

  /**
   * Calls a function for each element in the array.
   * @param callback
   * @param [thisArg]
   */
  forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
    this.state.forEach(callback, thisArg)
  }

  /**
   * Determines whether the array contains a value, returning true or false as appropriate.
   * @param value
   */
  includes(value: T): boolean {
    return this.state.includes(value)
  }

  /**
   * Returns the first (least) index of an element within the array equal to an element, or -1 if none is found.
   * @param value
   * @param fromIndex
   */
  indexOf(value: T, fromIndex: number): number {
    return this.state.indexOf(value, fromIndex)
  }

  /**
   * Joins all elements of an array into a string.
   * @param separator
   */
  join(separator: string): string {
    return this.state.join(separator)
  }

  /**
   * Returns a new Array Iterator that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number> {
    return this.state.keys()
  }

  /**
   * Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found.
   */
  lastIndexOf(value: T, fromIndex: number): number {
    return this.state.lastIndexOf(value, fromIndex)
  }

  /**
   * Returns a new array containing the results of calling a function on every element in this array.
   */
  map<U>(callback: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
    return this.state.map<U>(callback, thisArg)
  }

  /**
   * Removes the last element from an array and returns that element.
   */
  pop(): void {
    if (this.length) {
      this.setState(prev => prev.slice(0, -1))
    }
  }

  /**
   * Adds one or more elements to the end of an array and returns the new length of the array.
   * @param elements
   */
  push(...elements: T[]): void {
    this.setState(prev => [...prev, ...elements])
  }

  /**
   * Apply a function against an accumulator and each value of the array
   * (from left-to-right) as to reduce it to a single value.
   * @param callback
   * @param [initialValue]
   */
  reduce<U>(
    callback: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
    initialValue: U
  ): U {
    return this.state.reduce<U>(callback, initialValue)
  }

  /**
   * Apply a funciton against an accumulator> and each value of the array
   * (from right-to-left) as to reduce it to a single value.
   * @param callback
   * @param [initialValue]
   */
  reduceRight<U>(
    callback: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
    initialValue: U
  ): U {
    return this.state.reduceRight<U>(callback, initialValue)
  }

  /**
   * Reverses the order of the elements of an array in place —
   * the first becomes the last, and the last becomes the first.
   */
  reverse(): void {
    this.setState(this.state.reverse())
  }

  /**
   * Removes the first element from an array and returns that element.
   */
  shift(): void {
    this.setState(prev => prev.slice(1))
  }

  /**
   * Extracts a section of the calling array and returns a new array.
   * @param [start]
   * @param [end]
   */
  slice(start?: number, end?: number): T[] {
    return this.state.slice(start, end)
  }

  /**
   * Returns true if at least one element in this array satisfies the provided testing function.
   * @param callback
   * @param [thisArg]
   */
  some(callback: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    return this.state.some(callback, thisArg)
  }

  /**
   * Sorts the elements of an array in place and returns the array.
   * @param [compareFunction]
   */
  sort(compareFunction?: (a: T, b: T) => number): void {
    this.setState(this.state.sort(compareFunction))
  }

  /**
   * Adds and/or removes elements from an array.
   * @param start
   * @param [deleteCount]
   * @param [elements]
   */
  splice(start: number, deleteCount: number = 0, ...elements: T[]): void {
    this.setState([
      ...this.state.slice(0, start),
      ...elements,
      ...this.state.slice(0, start + deleteCount)
    ])
  }

  /**
   * Returns a localized string representing the array and its elements.
   */
  toLocaleString(): string {
    return this.state.toLocaleString()
  }

  /**
   * Returns a string representing the array and its elements.
   */
  toString(): string {
    return this.state.toString()
  }

  /**
   * Adds one or more elements to the front of an array and returns the new length of the array.
   * @param [elements]
   */
  unshift(...elements: T[]): void {
    this.setState(prev => [...elements, ...prev])
  }

  /**
   * Returns a new Array Iterator object that contains the values for each index in the array.
   */
  values(): IterableIterator<T> {
    return this.state.values()
  }

  /**
   * Returns a new Array Iterator object that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<T> {
    return this.values()
  }
}

/**
 * Adapts a state of type array.
 * @param state The result of an useState call.
 *
 * @example
 * * const array = asArray(useState([]))
 * * array.push(item)
 * * const item = array.last
 * * array.pop()
 */
export const asArray = <T>(state: UseState<T[]>): AsArray<T> => (
  new AsArray<T>(state)
)

export default asArray
