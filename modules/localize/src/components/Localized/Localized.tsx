import { LocalizeOptions, useLocalize } from '../../hooks/useLocalize'

interface LocalizedProps extends LocalizeOptions {
  label: string
  [param: string]: any
}

export const Localized = (props: LocalizedProps) => {
  const { label, language, namespace, transform, ...data } = props
  const localize = useLocalize()

  return localize(label, data, { language, namespace, transform })
}
