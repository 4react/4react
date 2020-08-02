export const errorsFor = (moduleName: string) => (
  class extends Error {
    constructor(context: string | string[], message: string) {
      const contextItems: string[] = Array.isArray(context) ? context : [context]
      super(`${moduleName} | ${contextItems.join(' > ')} : ${message}`)
    }
  }
)

export default errorsFor
