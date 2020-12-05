import { isArray } from '@4react/data-types'
import { Flex } from '@4react/flex'
import Highlight, { defaultProps } from 'prism-react-renderer'
import draculaTheme from 'prism-react-renderer/themes/shadesOfPurple'
import React from 'react'

export const FunctionPreview = ({ name, method, args }) => {
  const renderArg = (arg) => {
    if (isArray(arg)) {
      return `[${arg.map(renderArg).join(', ')}]`
    }
    switch (typeof arg) {
      case 'string':
        return `"${String(arg)}"`
      default:
        return String(arg)
    }
  }

  const renderCode = () => (
    `${name}(${Object.values(args).map(renderArg).join(', ')})`
  )

  const renderResult = () => (
    method(...Object.values(args))
  )

  return (
    <Flex
      align="stretch"
      margin={[25, 0, 40]}
      style={{
        border: '1px solid rgba(0,0,0,.1)',
        borderRadius: 4,
        boxShadow: 'rgba(0,0,0,0.10) 0 1px 3px 0',
        overflow: 'hidden'
      }}
    >
      <Flex
        width="50%"
        padding={[6, 20]}
        style={{ backgroundColor: '#2d2a55' }}
      >
        <Highlight
          {...defaultProps}
          language="js"
          theme={draculaTheme}
          code={renderCode()}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Flex>
      <Flex column center align="start" width="50%" padding={{ left: 8, padding: 10 }}>
        {String(renderResult())}
      </Flex>
    </Flex>
  )
}
