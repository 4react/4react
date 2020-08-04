export enum FlexBasis {
  AUTO = 'auto',
  CONTENT = 'content',
}

export const flexBasis = (basis: FlexBasis = FlexBasis.AUTO): string | null => {
  return basis
}

export default FlexBasis
