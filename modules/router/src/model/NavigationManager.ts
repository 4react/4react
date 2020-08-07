class NavigationManager {

  get _location(): Location {
    return location || window.location
  }

  get _history(): History {
    return history || window.history
  }

  move(to: string | number) {
    switch (typeof to) {
      case 'string':
        this._location.href = to as string
        break
      case 'number':
        this._history.go(to as number)
        break
      default:
        throw new Error('@4react/router | Invalid destination')
    }
  }

  reload() {
    this.move(0)
  }

  forward(delta: number = 1) {
    if (delta <= 0) {
      throw new Error('@4react/router | Delta must be positive')
    }
    this.move(delta)
  }

  back(delta: number = 1) {
    if (delta <= 0) {
      throw new Error('@4react/router | Delta must be positive')
    }
    this.move(-delta)
  }
}

export default NavigationManager
