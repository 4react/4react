import { childrenArg, classNameArg, styleArg } from '../../../../../../.storybook/args'
import { arg } from '../../../../../../.storybook/utils/arg'

const asArg = arg(
  'as',
  false,
  ['tag or component', 'keyof JSX.IntrinsicElements | React.ComponentType<any>'],
  'HTML tag or a custom component to use as a base element',
  'div'
)

const inlineArg = arg(
  'inline',
  false,
  'boolean',
  'Makes the element an inline-flex displayed element',
  'false'
)

const directionArg = arg(
  'direction',
  false,
  'string',
  'Determines the component direction',
  'row'
)

const reverseArg = arg(
  'reverse',
  false,
  'boolean',
  'Reverse component direction',
  'false'
)

const rowArg = arg(
  'row',
  false,
  'boolean',
  'flex-direction = "row"',
  'false'
)

const columnArg = arg(
  'column',
  false,
  'boolean',
  'flex-direction = "column"',
  'false'
)

const justifyArg = arg(
  'justify',
  false,
  'string',
  'justify-content',
  'start'
)

const startArg = arg(
  'start',
  false,
  'boolean',
  'justify-content = "start"',
  'false'
)

const endArg = arg(
  'end',
  false,
  'boolean',
  'justify-content = "end"',
  'false'
)

const centerArg = arg(
  'center',
  false,
  'boolean',
  'justify-content = "center"',
  'false'
)

const spaceBetweenArg = arg(
  'spaceBetween',
  false,
  'boolean',
  'justify-content = "space-between"',
  'false'
)

const spaceAroundArg = arg(
  'spaceAround',
  false,
  'boolean',
  'justify-content = "space-around"',
  'false'
)

const spaceEvenlyArg = arg(
  'spaceEvenly',
  false,
  'boolean',
  'justify-content = "space-evenly"',
  'false'
)

const alignArg = {
  name: 'align',
  type: {
    required: false,
    summary: 'string'
  },
  description: 'align-items',
  table: {
    defaultValue: {
      summary: 'center'
    }
  }
}

const wrapArg = {
  name: 'wrap',
  type: {
    required: false,
    summary: 'FlexWrap',
    detail: 'boolean | "reverse"'
  },
  description: 'flex-wrap',
  table: {
    defaultValue: {
      summary: 'false'
    }
  }
}

const linesArg = {
  name: 'lines',
  type: {
    required: false,
    summary: 'FlexWrap',
    detail: 'boolean | "reverse"'
  },
  description: 'align-content',
  table: {
    defaultValue: {
      summary: 'flex-start'
    }
  }
}

const selfArg = {
  name: 'self',
  type: {
    required: false,
    summary: 'string'
  },
  description: 'align-self',
  table: {
    defaultValue: {
      summary: 'center'
    }
  }
}

const orderArg = {
  name: 'order',
  type: {
    required: false,
    summary: 'number'
  },
  description: 'order',
  table: {
    defaultValue: {
      summary: undefined
    }
  }
}

const basisArg = {
  name: 'basis',
  type: {
    required: false,
    summary: 'FlexBasis',
    detail: 'number | string | "auto" | "content"'
  },
  description: 'flex-basis',
  table: {
    defaultValue: {
      summary: undefined
    }
  }
}

const growArg = {
  name: 'grow',
  type: {
    required: false,
    summary: 'number'
  },
  description: 'flex-grow',
  table: {
    defaultValue: {
      summary: 0
    }
  }
}

const shrinkArg = {
  name: 'shrink',
  type: {
    required: false,
    summary: 'number'
  },
  description: 'flex-shrink',
  table: {
    defaultValue: {
      summary: 1
    }
  }
}

const widthArg = {
  name: 'width',
  type: {
    required: false,
    summary: 'BoundableValue<Size>'
  },
  description: 'width',
  table: {
    defaultValue: {
      summary: undefined
    }
  }
}

const heightArg = {
  name: 'height',
  type: {
    required: false,
    summary: 'BoundableValue<Size>'
  },
  description: 'height',
  table: {
    defaultValue: {
      summary: undefined
    }
  }
}

const marginArg = {
  name: 'margin',
  type: {
    required: false,
    summary: 'BoxValue<Size>'
  },
  description: 'margin',
  table: {
    defaultValue: {
      summary: undefined
    }
  }
}

const paddingArg = {
  name: 'padding',
  type: {
    required: false,
    summary: 'BoxValue<Size>'
  },
  description: 'padding',
  table: {
    defaultValue: {
      summary: undefined
    }
  }
}

export const FlexArgs = {
  as: asArg,
  inline: inlineArg,
  direction: directionArg,
  reverse: reverseArg,
  row: rowArg,
  column: columnArg,
  justify: justifyArg,
  start: startArg,
  end: endArg,
  center: centerArg,
  spaceBetween: spaceBetweenArg,
  spaceAround: spaceAroundArg,
  spaceEvenly: spaceEvenlyArg,
  align: alignArg,
  wrap: wrapArg,
  lines: linesArg,
  self: selfArg,
  order: orderArg,
  basis: basisArg,
  grow: growArg,
  shrink: shrinkArg,
  width: widthArg,
  height: heightArg,
  margin: marginArg,
  padding: paddingArg,
  children: childrenArg,
  className: classNameArg,
  style: styleArg
}
