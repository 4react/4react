import React from 'react'
import styled from 'styled-components'
import Responsive from './Responsive'
import withResponsiveContext from '../../withResponsiveContext'

export default {
  component: Responsive,
  title: 'responsive/Responsive',
  decorators: [withResponsiveContext]
}

const MobileMenu = styled.div`
  position: absolute;
  width: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #afa;
`

const DesktopNavBar = styled.div`
  position: absolute;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #faa;
`

const Footer = styled.div`
  position: absolute;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #aaf;
`

export const Basic = () => (
  <>
    <Responsive condition={['mobile', 'tablet']}>
      <MobileMenu>MOBILE MENU</MobileMenu>
    </Responsive>
    <Responsive condition="desktop">
      <DesktopNavBar>DESKTOP MENU</DesktopNavBar>
    </Responsive>
    <Responsive condition={{ min: 'tablet' }}>
      <Footer>FOOTER</Footer>
    </Responsive>
  </>
)
