/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, Reducer, ReducerAction, useContext } from 'react'
import { Action, StoreContext, StoreContextValue } from './StoreContext'

export interface StoreDispatchHook<S> {
  (): Dispatch<ReducerAction<Reducer<S, Action>>>
}

export const useStoreDispatchFactory = <S>(context: StoreContext<S>): StoreDispatchHook<S> => (
  () => {
    const { dispatch } = useContext<StoreContextValue<S>>(context)
    return dispatch
  }
)
