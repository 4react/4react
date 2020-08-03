export const errorsFor = (moduleName: string) => (
  class extends Error {
    constructor(...contextAndMessage: string[]) {
      const context = contextAndMessage.slice(0, -1).join(' > ')
      const message = contextAndMessage[contextAndMessage.length - 1]
      super(`${moduleName} | ${context} : ${message}`)
    }
  }
)

export default errorsFor
