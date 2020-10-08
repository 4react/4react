/* eslint-disable react-hooks/rules-of-hooks */
import { Reducer } from 'react'
import { storeProviderFactory, StoreProvider } from '../model/StoreProvider'
import { storeContextFactory, Action, StoreContext } from '../model/StoreContext'
import { useStoreDataFactory, StoreDataHook } from '../model/useStoreDataFactory'
import { useStoreDispatchFactory, StoreDispatchHook } from '../model/useStoreDispatchFactory'

export type Store<S> = [
  StoreProvider<S>,
  StoreDataHook<S>,
  StoreDispatchHook<S>
]

export type StoreCreator<S> = (reducer: Reducer<S, Action>, preloadedState?: S) => Store<S>

export type StoreEnhancer<S> = (storeCreator: StoreCreator<S>) => StoreCreator<S>

export const createStore = <S>(
  reducer: Reducer<S, Action>,
  preloadedState?: S,
  enhancer?: StoreEnhancer<S>
): Store<S> => {
  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState)
  }

  // @ts-ignore
  const context: StoreContext<S> = storeContextFactory(preloadedState)

  return [
    storeProviderFactory<S>(context, reducer, preloadedState),
    useStoreDataFactory(context),
    useStoreDispatchFactory(context)
  ]
}
