import { Dispatch, Reducer, ReducerAction, useContext } from 'react'
import { Action, StoreContext } from '../model/StoreContext'

export interface StoreDispatchHook<S> {
  (): Dispatch<ReducerAction<Reducer<S, Action>>>
}

const useStoreDispatchFactory = <S>(context: StoreContext<S>): StoreDispatchHook<S> => (
  () => {
    const { dispatch } = useContext(context)
    return dispatch
  }
)

export default useStoreDispatchFactory
