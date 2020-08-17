import { Size } from '@4react/syntax'

export enum FlexBasisSpecialValue {
  AUTO = 'auto',
  CONTENT = 'content',
}

export type FlexBasis = Size | FlexBasisSpecialValue
