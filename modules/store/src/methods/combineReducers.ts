import { Reducer } from 'react'
import { Action } from '../model/StoreContext'

export const combineReducers = <S>(
  reducers: { [key: string]: Reducer<any, Action> },
  initialValue?: S
): Reducer<S, Action> => {
  const defaultValue = initialValue || {}
  Object
    .keys(reducers)
    .forEach(key => {
      if (!(key in defaultValue)) {
        // @ts-ignore
        defaultValue[key] = reducers[key](undefined, { type: undefined })
      }
    })
  return (state = defaultValue as S, action) => (
    Object.keys(reducers).reduce(
      (nextState, key) => {
        // @ts-ignore
        nextState[key] = reducers[key](state[key], action)
        return nextState
      },
      {}
    ) as S
  )
}
