import { useContext } from 'react'
import { StoreContext, StoreContextValue } from './StoreContext'

export type StoreHookSelector<S> = (store: S) => any

export interface StoreDataHook<S> {
  (selector?: StoreHookSelector<S>): any
}

const identitySelector = <S>(store: S): S => store

export const useStoreDataFactory = <S>(context: StoreContext<S>): StoreDataHook<S> => (
  (selector: StoreHookSelector<S> = identitySelector) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useContext<StoreContextValue<S>>(context)
    return selector(data)
  }
)
