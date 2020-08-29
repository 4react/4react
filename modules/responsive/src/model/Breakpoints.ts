/* eslint-disable no-underscore-dangle */
import invert from 'lodash/invert'
import { BreakpointsMap } from './BreakpointsMap'

class Breakpoints {
  _map: BreakpointsMap
  _keys: string[] = []

  constructor(map: BreakpointsMap) {
    const keys = Object
      .keys(map)
      .sort((k1, k2) => map[k1] - map[k2])

    if (keys.length && map[keys[0]] > 0) {
      keys.unshift('default')
      // eslint-disable-next-line no-param-reassign
      map.default = 0
    }

    this._map = map
    this._keys = keys

    const byValue = invert(map)
    if (!Object.prototype.hasOwnProperty.call(byValue, 0)) {
      byValue[0] = 'default'
    }
  }

  valueOf(key: string): number {
    return this._map[key]
  }

  indexOf(key: string): number {
    return this.keys.indexOf(key)
  }

  get keys(): string[] {
    return [...this._keys]
  }

  get values(): number[] {
    return this.keys.map(key => this.valueOf(key))
  }
}

export default Breakpoints
