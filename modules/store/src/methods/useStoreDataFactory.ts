import { useContext } from 'react'
import { StoreContext } from '../model/StoreContext'

export type StoreHookSelector<S> = (store: S) => any

export interface StoreDataHook<S> {
  (selector?: StoreHookSelector<S>): any
}

const identitySelector = <S>(store: S): S => store

const useStoreDataFactory = <S>(context: StoreContext<S>): StoreDataHook<S> => (
  (selector: StoreHookSelector<S> = identitySelector) => {
    const { data } = useContext(context)
    return selector(data)
  }
)

export default useStoreDataFactory
