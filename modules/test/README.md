# @4react / test

Test utilities for React applications.

```
npm i @4react/test
```

## Data attributes
`data-*` attributes are a good use for letting testing tools access portions of the application.

This module provides some utilities that encourage a scalable usage for this kind of attributes.

### DataTestFactory [class]
`DataTestFactory` helps generating every data-* value for a single component.
Using this class helps keeping a consistent usage of data-* attributes, depending on the context in which the component lives.
```js
const dt = new DataTestFactory('myComp')
dt.prop('header') // myComp-header
dt.prop('name') // myComp-name
```
- It takes a **base** value that represent **the context in which the component is used** (usually coming from outside as a prop)
- Provides a **prop** method that **generates new data-\* values** starting from the specified base value.

##### Constructor

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| base | string (camelCase) | - | Base value for all generated data attributes. |
***NOTE:*** An internal additional check force base value to respect camelCase naming convention.

##### prop [method]

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| specifier | string (camelCase) | - | . |
| ...keys | List of ... string (camelCase) &#124; number | - | . |
***NOTE:*** An internal additional check force base value to respect camelCase naming convention.

```js
const dt = new DataTestFactory('myTable') 
dt.prop('header') // myTable-header
dt.prop('row', 13) // myTable-row_13
dt.prop('cell', 5, 'name') // myTable-cell_5_name
```

##### item [method]

```js
const dt = new DataTestFactory('shoppingList') 
dt.item('milk') // shoppingList-item_milk
dt.item(13) // shoppingList-item_13
dt.item(5, 'bread') // shoppingList-item_5_bread
```

### useDataTest [hook]

```js
const dt = useDataTest('city')
```

```jsx
const Profile = props => {
  const { profile, dataTest } = props
  const dt = useDataTest(dataTest)

  return (
    <div class="container">
      <span class="name" data-test={dt.prop('name')}>{profile.name}</span>
      <span class="age" data-test={dt.prop('age')}>{profile.age}</span>
      <AddressList
        addresses={profile.addresses}
        dataTest={dt.prop('addressList')}
      />
    </div>
  )
}

const AddressList = props => {
  const { addresses, dataTest } = props
  const dt = useDataTest(dataTest)

  return (
    <div class="container">
      {addresses.map((address, index) => (
        <div class="address" data-test={dt.item(index)}>
          {address}
        </div>
      ))}
    </div>
  )
}
```

```jsx
// JSX
<Profile profile={profile} dataTest="admin" />

// Rendered HTML
<div class="container">
  <span class="name" data-test="admin-name">John Smith</span>
  <span class="age" data-test="admin-age">45</span>
  <div class="container">
    <div class="address" data-test="admin-addressList-item_0">
      585  Barnes Street
    </div>
    <div class="address" data-test="admin-addressList-item_1">
      4968  Lightning Point Drive
    </div>
  </div>
</div>
```

### DataTestProvider
`DataTestFactory`
```jsx
<DataTestProvider renderDataTest={true}>
  ...
</DataTestProvider>
```
