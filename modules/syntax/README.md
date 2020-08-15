# @4react / syntax

Syntax utilities for React applications.
```
npm i @4react/syntax
```

## Types

### Size
```ts
type Size = number | string
```
CSS size property. A value of type number specifies `em` units.

### BoxValue
```ts
type BoxValue<T> = T | BoxValueArray<T> | BoxValueMap<T>

type BoxValueArray<T> = [T] | [T, T] | [T, T, T] | [T, T, T, T]

interface BoxValueMap<T> {
  base?: T
  top?: T
  left?: T
  right?: T
  bottom?: T
}
```
CSS property that can be applied in each cardinal direction (top, left, right and bottom).

## Methods

### className
Use `className` method to combine multiple class names together.
```jsx
import { className } from '@4react/syntax'

const className = className(
  'class1',
  ['class2', condition2]
  ['class3', condition3],
  ...
)

return <div className={className}>...</div>
```
