# @4react / store

A Redux-like state container for React applications.

```
npm i @4react/store
```

### Create Store
Use the `createStore` utility to create both the store provider and its corresponding consumer hooks,
passing the store main reducer to it.

```jsx
import { createStore } from '@4react/store'

export const [
  MyStore,
  useMyStore,
  useDispatch
] = createStore(myStoreReducer)
```

### Provide Store
Use the ***store provider*** to provide the store down to your application.

```jsx
import { MyStore } from './myStore'

const App = () => {
  return (
    <MyStore>
      <MyComponent />
    </MyStore>
  )
}
```

### Use custom hooks
Use the ***store custom hooks*** to **retrieve store data** and ***dispatch actions***.

```jsx
import { useMyStore, useDispatch } from './myStore'

const MyInnerComponent = () => {
  const data = useMyStore()
  const dispatch = useDispatch()

  const onClick = () => {
     dispatch({ type: 'YOUR_ACTION' })
  }

  return (
    <>
      <span>{data}</span>
      <button onClick={onClick}>
        click here
      </button>
    </>
  )
}
```

## API

### createStore()

Creates both a store provider and its corresponding hooks.

Depending on the type of state management you want to implement,
you can decide to keep a single global store,
rather than creates multiple stores and provide them down to different sections of your application.

You can also use multiple nested stores for different manners.

```js
createStore(reducer, [preloadedState], [enhancer])
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| reducer | Function | - | A reducing function that returns the next state, given the current state and an action. |
| preloadedState | any | *computed* | ***optional***. The initial state. If not specify the initial state is automatically computed from reducers state default value. |
| enhancer | Function | - | ***optional***. The store enhancer. You may optionally specify it to enhance the store with third-party capabilities. |

Returns an array containing 2 different elements:
1. The custom store provider (see [Store Provider](#store-provider))
2. The custom consumer hook. (see [Consumer Hook](#consumer-hook))
2. The custom dispatch hook. (see [Dispatch Hook](#dispatch-hook))

#### Store Provider

The Store Provider is used to provide global store to the entire application.
It is most commonly used inside app main component.

```js
const App = () => {
  return (
    <MyStore>
      ...
    </MyStore>
  );
};
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | any | - | ***optional*** You can use this prop to force the providing of specific store data. It is most commonly used for **testing** purpose. |

#### Consumer Hook

The Consumer Hook is used to retrieve the store state.

```js
const store = useMyStore()

const counter = useMyStore(store => store.counter)
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | Function | - | ***optional*** Use to retrieve a custom section of the store state. |

Returns:

| Type | Description |
| --- | --- |
| any | The actual store state or a selection of it. |

#### Dispatch Hook

The Dispatch Hook is used to retrieve the dispatch function.

```js
const dispatch = useDispatch()
```

Returns:

| Type | Description |
| --- | --- |
| Function | The store dispatch function. |

### combineReducers()

Similar to *Redux*'s combineReducers, it creates a new reducer starting from
a map of reducers. The resulting function will be able to reduce a state
with the same shape of the map of reducers passed to it.

```js
const todos = combineReducers({
  all: allReducer,
  checked: checkedReducer
})
```

Arguments:
1. `reducers` (object): the map of reducers to be combined together.
2. \[`initialValue`\] (any): This parameter is **optional**. If not specify
the state default value is automatically computed from reducers state default
state value inside the passed map.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| reducers | object<string,Function> | - | The map of reducers to be combined together. |
| initialValue | any | *computed* | ***optional*** If not specify, it is automatically computed from reducers default states value inside the passed map. |
