const isFunction = (functionToCheck: any): boolean => (
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
)

export default isFunction
