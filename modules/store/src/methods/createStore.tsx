import React, { Reducer } from 'react'
import storeProviderFactory, { StoreProviderFactory } from './storeProviderFactory'
import storeContextFactory, { Action, StoreContext } from '../model/StoreContext'
import useStoreDataFactory, { StoreDataHook } from './useStoreDataFactory'
import useStoreDispatchFactory, { StoreDispatchHook } from './useStoreDispatchFactory'

export interface StoreCreator<S> {
  (reducer: Reducer<S, Action>, preloadedState?: S): [StoreProviderFactory<S>, StoreDataHook<S>, StoreDispatchHook<S>]
}

export interface StoreEnhancer<S> {
  (storeCreator: StoreCreator<S>): StoreCreator<S>
}


export const createStore = <S extends any>(
  reducer: Reducer<S, Action>,
  preloadedState?: S,
  enhancer?: StoreEnhancer<S>
): [StoreProviderFactory<S>, StoreDataHook<S>, StoreDispatchHook<S>] => {

  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState)
  }

  const context: StoreContext<S> = storeContextFactory()
  const storeProvider = storeProviderFactory<S>(context, reducer, preloadedState)
  const useData = useStoreDataFactory(context)
  const useDispatch = useStoreDispatchFactory(context)

  return [storeProvider, useData, useDispatch]
}

export default createStore
