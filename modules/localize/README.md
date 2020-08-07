# @4react / localize

Ready-to-use **i18n** configuration and components for React Applications.

#### NOTE
The purpose of this package is to provide a simple and standard solution for the largest amount of projects.

It is mainly based on [***react-i18next***](https://github.com/i18next/react-i18next). Please consider to support their work.

## Usage

### Import dependency

```
npm i @4react/localize
```

### Init i18n

Initialize i18n with **initI18n**, optionally specifying *languages* and *namespaces*.
```js
import { initI18n } from '@4react/localize'

initI18n(
  ['en', 'it', 'es'], // languages
  ['common', 'profile'] // namespaces
)
```

### Provide localization
Use the `Localization` component to provide translations over the application.
```js
import { Localization } from '@4react/localize'

const App = () => (
  <Localization>
    // content
  </Localization>
)
```

### Translate labels
Use the `Localized` component to translate labels.

```js
import { Localized } from '@4react/localize'

const CustomComponent = () => (
  <Localized label="awesome" />
)
```

#### ...and use any kind of filler (also components)

```js
const CustomComponent = () => (
  <Localized
    label="my-fillable-label"
    fillers={{
      name: 'Matteo',
      age: 28,
      component: <MyCustomFiller />
    }}
  />
)

// Hi, I'm {{name}} and I'm {{age}} years old. Look at this {{component}}!
```
Translations are rendered as simple text with no additional style or structure.

## Documentation

#### initI18n()

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| languages | string[] | ['en'] | ***[optional]*** Set of supported languages. The first element is considered as fallback. |
| namespaces | string[] | ['translations'] | ***[optional]*** Set of supported namespaces. |

#### <Localization\>

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| defaultNS | string | 'translations' | ***[optional]*** Specify the default namespace. |

#### <Localized\>

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| label | string | - | Label to localize. |
| ns | string | - | ***[optional]*** Namespace to witch the label belongs. In case of no namespace specified, the `defaultNS` of the `Localization` component is used. |
| fillers | object | - | ***[optional]*** Maps of elements to fills placeholders in label. Fillers could be of type **string, number or components**. |
| lang | string | - | ***[optional]*** Language to override the current selected one. |
