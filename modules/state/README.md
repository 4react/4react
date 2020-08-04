# @4react / state

State management utilities for React applications.
```
npm i @4react/state
```

- [Adapters](#adapters)
- [States](#states)

## Adapters
Adapters help you transform states into a more structured object, with useful properties and methods.

```jsx
const array = asArray(useState([]))

array.push('foo')
array.pop()
```

##### Limitation

Adapted states will provide methods accordingly to their corresponding JS classes, with a single limitation:
due to the asynchronous behavior of the `setState` hook, methods that mutate state, does not return any value.

```jsx
// classic pop()
const arr = ['item1', 'item2', 'item3']
const lastItem = arr.pop()

// adpted state pop()
const arr = asArray(useState(['item1', 'item2', 'item3']))
const lastItem = arr.last // retrieve last element
arr.pop() // remove last element without returning it
```

##### List of adapters

| Name  | Description |
| --- | --- |
| [asArray](#asarray) | Transforms an array state into an object with methods to modify it. |
| [asObject](#asobject) | Transforms an object state into an object with methods to modify it. |
| [asToggle](#astoggle) | Transforms a boolean state providing a method to toggle its value. |

### asArray
Transforms an array state into an object with methods to modify it.
The object will provide every property and every method of the JS Array class.
```jsx
const myArr = useState([])
const myAdaptedArr = asArray(myArr)

myAdaptedArr.push(item)
myAdaptedArr.reverse()
const item = myAdaptedArr.last
```

| param | type | default | description |
| --- | --- | --- | --- |
| state | [Array, Function] | - | The array returned from an useState call for a state of type array. |

##### Properties

| property | type  | description |
| --- | --- | --- |
| state | Array | The original array state. |
| length | number | Number of element in the array. |
| first | any | First element of the array. |
| last | any | Last element of the array. |

##### Basic methods

| method | description |
| --- | --- |
| setState( array ) | The original state setter. |
| get( index ) | Gets the value at the specified index. |
| set( index, value ) | Set the value at the specified index. |

##### Array methods

| methods |
| --- |
| concat, copyWithin, entries, every, fill, filter, find, findIndex |
| forEach, includes, indexOf, join, keys, lastIndexOf, map, pop |
| push, reduce, reduceRight, reverse, shift, slice, some, sort |
| splice, toLocaleString, toString, unshift, values, @@iterator |

***NOTE***: Array methods may work differently from their corresponding in JS Array class. (See [Limitation](#limitation))

### asObject
Transforms an object state into an object with methods to modify it.

| param | type | default | description |
| --- | --- | --- | --- |
| state | [Object, Function] | - | The array returned from an useState call for a state of type object. |

##### Properties

| property | type  | description |
| --- | --- | --- |
| state | Object | The original object state. |
| size | number | Number of keys inside the object. |
| keys | string[] | The set of all the keys of the object. |
| values | any[] | The set of all the values of the object. |
| entries | [string, T][] | Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties. |

##### Basic methods

| method | description |
| --- | --- |
| setState( array ) | The original state setter. |
| get( key ) | Gets the value associated to the specified key. |
| set( key, value ) | Associates a value to the specified key. |

##### Object methods

| method | description |
| --- | --- |
| clear() | Returns a new array that is this array joined with other array(s) and/or value(s). |
| delete( key ) | Remove the specified key from the object. |
| has( key ) | Determines if the object contains the specified key. |
| toString() | Returns a string representation of the object. |
| valueOf() | Returns the primitive value of the specified object. |

### asToggle
Transforms a boolean state providing a method to toggle its value.

| param | type | default | description |
| --- | --- | --- | --- |
| state | [boolean, Function] | - | The array returned from an useState call for a state of type boolean. |

##### Returns

| item (#) | type  | description |
| --- | --- | --- |
| 0 | boolean | The original boolean state. |
| 1 | Function | Toggle function that negates the value of the state. |


## States
Useful hooks for particular state settings

##### List of hooks

| Name  | Description |
| --- | --- |
| [useControllableState](#usecontrollablestate) | Creates a locale state that can also be controlled via external props. |
| [usePrevious](#useprevious) | Store value of the previous render. |
| [useStateWithEffect](#usestatewitheffect) | Combines useState and useEffect into a single hook. |

### useControllableState
Creates a locale state that can also be controlled via external props.
This hook is particularly useful for custom input component.

It allows the component to be used as:
- `uncontrolled component`: i.e. the state is managed internally without the need to wrap logic around it.
- `controlled component`: i.e. the state management can be demanded to external logic.

```jsx
const TextInput = ({ defaultValue, value, onChange }) => {
  const [state, setState] = useControlledState(defaultValue, value, onChange)
  return <input value={state} onChange={setState} />
}

// "uncontrolled"
<TextInput />

// "controlled"
const [value, setValue] = useState()
...
<TextInput value={value} onChange={setValue} />
```

### usePrevious
Store value of the previous render.
```jsx
const Foo = () => {
  const [choice, setChoice] = useState(0)
  const prevChoice = usePrevious(choice)

  useEffect(() => {
    // do something with choice and prevChoice
  }, [choice])
}
```

### useStateWithEffect
Combines useState and useEffect into a single hook.
```jsx
const Foo = () => {
  const [text, setText] = useState('', (value) => {
    // on text change, do something with value
  })
}
```
