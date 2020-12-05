import { Flex } from '@4react/flex'
import draculaTheme from 'prism-react-renderer/themes/shadesOfPurple'
import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

export const LiveSource = (props) => (
  <LiveProvider
    language="jsx"
    theme={draculaTheme}
    {...props}
  >
    <Flex column align="stretch" margin={[25, 0, 40]}>
      <Flex
        align="stretch"
        style={{
          border: '1px solid rgba(0,0,0,.1)',
          borderRadius: 4,
          boxShadow: 'rgba(0,0,0,0.10) 0 1px 3px 0',
          overflow: 'hidden'
        }}
      >
        <Flex
          width="50%"
          style={{
            padding: 10,
            backgroundColor: '#2d2a55',
            outline: 'none'
          }}
        >
          <LiveEditor style={{ width: '100%', outline: 'none' }} />
        </Flex>
        <Flex column center align="start" width="50%" padding={{ left: 8, padding: 10 }}>
          <LivePreview />
        </Flex>
      </Flex>
      <LiveError style={{ fontSize: 12 }} />
    </Flex>
  </LiveProvider>
)
