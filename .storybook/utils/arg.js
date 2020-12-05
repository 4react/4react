export const arg = (name, required, type, description, defaultValue) => {
  let typeObj = {}
  if (typeof type === 'string') typeObj = { summary: type }
  else if (Array.isArray(type)) typeObj = { summary: type[0], detail: type[1] }

  let defaultValueObj = {}
  if (typeof defaultValue === 'string') defaultValueObj = { summary: defaultValue }
  else if (Array.isArray(defaultValue)) defaultValueObj = { summary: defaultValue[0], detail: defaultValue[1] }

  return {
    name,
    type: {
      required,
      ...typeObj
    },
    description,
    table: {
      defaultValue: defaultValueObj
    },
    control: {
      type: null
    }
  }
}
