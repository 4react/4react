import { Context, createContext, Dispatch, Reducer, ReducerAction } from 'react'

export interface Action {
  type: string
  [key: string]: any
}

export interface StoreContextValue<S> {
  data: S
  dispatch: Dispatch<ReducerAction<Reducer<S, Action>>>
}

export type StoreContext<S> = Context<StoreContextValue<S>>

export const storeContextFactory = <S>(defaultValue: S): StoreContext<S> => (
  createContext<StoreContextValue<S>>({
    data: defaultValue,
    dispatch: () => undefined
  })
)
