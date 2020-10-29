import { TestError } from '../utils/errors'

export class DataTestFactory {
  _base?: string
  _renderDataTest: boolean = true

  constructor(base?: string) {
    if (!base || !DataTestFactory.isValidName(base)) {
      throw new TestError('"base" value must respect camelCase convention')
    }
    this._base = base
  }

  static isValidName(name: string) {
    return /[a-zA-Z0-9]+/.test(name)
  }

  static step(specifier: string, ...keys: (string | number)[]): string {
    const names = [specifier, ...keys]
    names.forEach(name => {
      if (!DataTestFactory.isValidName(name as string)) {
        throw new TestError(`"${name}" must respect camelCase convention`)
      }
    })
    return names.join('_')
  }

  get base(): string | undefined {
    return this._renderDataTest ? this._base : undefined
  }

  prop(specifier: string, ...keys: (string | number)[]): string | undefined {
    if (this._renderDataTest && this._base) {
      const nextStep = DataTestFactory.step(specifier, ...keys)
      return [this._base, nextStep].join('-')
    }
    return undefined
  }

  item(...keys: (string | number)[]): string | undefined {
    return this.prop('item', ...keys)
  }
}
