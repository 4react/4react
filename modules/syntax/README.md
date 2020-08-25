# @4react / syntax

Syntax utilities for React applications.
```
npm i @4react/syntax
```

This module contains some common syntax guidelines and utilities used by every React component in the `@4react` project.

## Props

### className
Other than the classic usage, `className` prop accepts a list of values that will be automatically chained together.

Also, *falsy* values are ignored. Thanks to that, it is possible to conditionally add elements.

```jsx
// classic usage
<MyComp className="my-class" />
<MyComp className={myClass} />

// as list
<MyComp className={['my-class', 'my-other-class']} />
<MyComp className={[myClass, myOtherClass]} />

// conditional
<MyComp className={[
  condition1 && 'my-class',
  condition2 && myOtherClass
]} />
```

### style
Other than the classic usage, `style` prop accepts a list of objects that will be automatically merged.

Also, *falsy* values are ignored. Thanks to that, it is possible to conditionally add elements.

```jsx
// classic usage
<MyComp style={{ background: 'red' }} />
<MyComp style={myStyle} />

// as list
<MyComp style={[{ background: 'red' }, { fontSize: 14 }]} />
<MyComp style={[myStyle, myOtherStyle]} />

// conditional
<MyComp style={[
  condition1 && { background: 'red' },
  condition2 && myOtherStyle
]} />
```

## Types

### Size
In `4react` project `8px` is considered the basic size unit.

Everytime a measure is specified as a pure number (without measurement unit),
it's considered as a number of basic units.
```jsx
<MyComp width="8px" /> // 8px
<MyComp width="50%" /> // 50%
<MyComp width={1} /> // 8px
<MyComp width={2} /> // 16px
<MyComp width={0.5} /> // 4px
```

Also, there's some special strings that leads to specific values:
```jsx
<MyComp width="fill" /> // 100%
```

### BoundedValue
Represents a property (generically numerical) that can be bounded between a minimum and/or a maximum value.

```jsx
// unbounded
<MyComp size="50px" />
<MyComp size={10} />

// bounded
<MyComp size={{ min: '50px' }} />
<MyComp size={{ max: 30 }} />
<MyComp size={{ min: '10%', max: '90%' }} />
```

Also, a base value can also be specified, if needed.

```jsx
<MyComp size={{ min: 10, base: 15 }} />
<MyComp size={{ base: 15, max: 20 }} />
<MyComp size={{ min: 10, base: 15, max: 20 }} />
```

### BoxValue
Represents a property that can distinguish values for every cardinal direction (i.e. `top`, `left`, `right` and `bottom`).

```jsx
// generic
<MyComp space="50px" />
<MyComp space={10} />

// direction-specific
<MyComp space={{ top: '50px' }} />
<MyComp space={{ left: 5, right: 10 }} />
```

While specifying a single value let that value to be applied to ***every direction***;
using an object allow to define (or not define) a custom value for specific directions.

Also, the object accepts some special keys:
```jsx
// x value is applied to both 'left' and 'right'
<MyComp space={{ x: 10 }} />

// y value is applied to both 'top' and 'bottom'
<MyComp space={{ y: 10 }} />

// base value is applied to all 'remaining' directions
<MyComp space={{ left: 5, base: 10 }} />
```

We can also use an array shorthand to define direction-specific values (the same way CSS applies values for properties like `margin` or `padding`).

```jsx
// 4-values array.
// Applied to 'top', 'right', 'bottom' and 'left' respectively
<MyComp space={['12px', 5, '10%', 5]} />

// 3-values array.
// Applied to 'top', 'x' (left + right) and 'bottom' respectively
<MyComp space={[10, 5, 10]} />

// 2-values array.
// Applied to 'y' (top + bottom) and 'x' (left + right) respectively
<MyComp space={[10, 5, 10]} />

// 1-values array.
// Applied to every direction
<MyComp space={[10, 5, 10]} />
```
