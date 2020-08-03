# @4react / errors

Errors for React applications.
```
npm i @4react/errors
```

## Error factory
Use the `errorsFor` utility to create a custom error class for your module.

```jsx
import { errorsFor } from '@4react/errors'

const MyLibError = errorsFor('MyLib')
```

| param | type | default | description |
| --- | --- | --- | --- |
| moduleName | string | - | Name of the module for which the custom Error class is created. |

When you want to throw errors, call your custom error class
```jsx
const getPowerOf2 = (exponent) => {
  if (exponent < 0) {
    throw new MyLibError('getPowerOf2', 'exponent must be a positive number')
  }
  ...
}

// Error: MyLib | getPowerOf2 : exponent must be a positive number
```

| param | type | default | description |
| --- | --- | --- | --- |
| contextAndMessage | ...string[] | - | One or more strings describing the context in which the error is thrown and its message. |

## Try
Use the `Try` component to wrap your application (or a portion of it)
in order to automatically catch thrown errors.
P

```jsx
import { Try } from '@4react/errors'

const AppWithFallback = () => (
  <Try fallback={e => <Fallback message={e} />}>
    <App />
  </Try>
)
```
| prop | type | default | description |
| --- | --- | --- | --- |
| fallback | Function | - | Render function for the application fallback. |
| onError | string | - | ***optional*** Callback triggered each time an error is thrown. |
