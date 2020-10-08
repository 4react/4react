# @4react / localize

Localization for React applications.

```
npm i @4react/localize
```

##### Basic

```js
t('name') // Name
```

##### Namespace

```js
t('name') // Name
t('profile:name') // Profile Name
t('name', {}, { namespace: 'profile' }) // Profile Name
t('profile:name', {}, { namespace: 'common' }) // Name
```

##### Transform

```jsx
t('welcome') // Welcome to the site!																// nome
t('welcome', {}, { transform: 'lowercase' }) // welcome to the site!	
t('welcome', {}, { transform: 'uppercase' }) // WELCOME TO THE SITE!	
t('welcome', {}, { transform: 'capitalize' }) // Welcome To The Site!	
```


## Usage

### Provide minimal configuration

```jsx
import { LocalizationProvider } from '@4react/localize'

const App = () => (
  <LocalizationProvider
    languages={['en', 'it', 'fr']}
    namespaces={['common', 'profile', 'news']}
  >
    ...
  </LocalizationProvider>
)
```

### Translate labels

##### with hook

```jsx
import { useLocalize } from '@4react/localize'

const Foo = () => {
  const t = useLocalize()

  ...

  t('myNameIs', { name: 'Matteo' })
}
```

##### with Component

```jsx
import { Localized } from '@4react/localize'

const Foo = () => (
  <Localized label="MyNameIs" name="Matteo" />
)
```

## Documentation

#### initI18n()

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| languages | string[] | ['en'] | ***[optional]*** Set of supported languages. The first element is considered as fallback. |
| namespaces | string[] | ['translations'] | ***[optional]*** Set of supported namespaces. |

#### <LocalizationProvider\>

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| defaultNS | string | 'translations' | ***[optional]*** Specify the default namespace. |

#### <Localized\>

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| label | string | - | Label to localize. |
| ns | string | - | ***[optional]*** Namespace to witch the label belongs. In case of no namespace specified, the `defaultNS` of the `LocalizationProvider` component is used. |
| fillers | object | - | ***[optional]*** Maps of elements to fills placeholders in label. Fillers could be of type **string, number or components**. |
| lang | string | - | ***[optional]*** Language to override the current selected one. |
