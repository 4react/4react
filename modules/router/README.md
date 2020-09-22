# @4react / router

Routing for React applications

```jsx
const AwesomeApp = () => (
  <Router>
    <Route exact component={Home} />
    <Route path="news/:id" component={News} />
    <Route path="products" component={Products}>
      <Route path="books" component={Books} />
      <Route path="movies" component={Movies} />
    </Route>
    <Route path="contacts" component={Contacts} />
  </Router>
)
```

Working sample

## Usage

### Import dependency

```
npm i @4react/router
```

### Provide routing

```jsx
const MyRoutedApp = () => (
  <Router>
    ...
  </Router>
)
```

### Create routes

```jsx
const ProductsPage = () => (
  <>
    <Route path="books" component={Books} />
    <Route path="movies" component={Movies} />
    <Route path="music" component={Music} />
  </>
)
```

## API

### Route
Render a portion of the application based on current location.

| Prop | type | default | Description |
| --- | --- | --- | --- |
| path | string (see [path](#path)) | *empty string* | ***optional***. A pattern the current location must match to render the related portion of the application. |
| exact | boolean | false | ***optional***. A pattern the current location must match to render the related portion of the application. |
| component | React.Component | - | ***optional***. Conditionally rendered component. Route parameters are injected (see [params](#params)).

Route content can be rendered in multiple ways:

The easier way is via component children.
All the contained code will be used as content of the route.

```jsx
<Route path="books">
  <MyListOfBooks />
</Route>
```

A Route can also be written as a self-closing component.
In this case the route content can be specified by the *component* prop.
The specified component will receive every routing parameter as props. (See [Routing](#routing))

```jsx
<Route path="books" component={MyListOfBooks} />
```

Finally, we can combine both methods. The component passed through the prop will be render first; then children.
This can be useful for nesting Route components in a single place:

```jsx
<Route path="books" component={Books}>
  <Route path="(bookId)" component={BookDetails} />
</Route>
```

### useMatch
...

```jsx
const MyApp = () => (
  <Router>
    <Route path="(id)" component={BookDetails} />
  </Router>
)
// url /12345 will render BookDetails component

const BookDetails = ({ id }) => {
  const expanded = useMatch('expanded')
  return (
    <Accordion
      id={id}
      isExpanded={expanded}
    />
  )
}
  
// url /12345 will render a not expanded BookDetails
// url /12345/expanded will an expanded render BookDetails
```

```jsx
const BookDetails = ({ id }) => {
  const expanded = useMatch('//')
  return (
    <Accordion
      id={id}
      isExpanded={expanded}
    />
  )
}
  
// url /12345 will render a not expanded BookDetails
// url /12345/expanded will an expanded render BookDetails
```

#### path
A sequence of any valid URI character, except `(`, `)`, `?`, `&`, `=` and `#`.

A path can also contain an arbitrary number of parameters.
Every parameter must be a **lower camel case** name surrounded by circle brackets. 

A "path" string represents a pattern the current location must match to render the related portion of the application.

```
// single step
"singlePage"
// multi step
"multi/step/page"
```

#### params

