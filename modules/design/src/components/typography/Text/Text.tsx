import { ClassNames, parseClassName, parseStyle, Styles } from '@4react/data-types'
import React, { FC } from 'react'
import { fontConfigToCSS } from '../../../core/config/FontsConfig'
import { useUIConfig } from '../../../core/config/useUIConfig'
import { Font } from '../../../typography/font'
import { rem } from '../../../typography/size'

export interface TextProps {
  className?: ClassNames
  style?: Styles
}

export interface TextFactoryProps extends TextProps {
  font: Font
  size: string
}

const TextFactory: FC<TextFactoryProps> = props => {
  const { font, size, className, style, children } = props
  const { fonts } = useUIConfig()
  const fontConfig = fonts[font]

  return (
    <span
      className={parseClassName(className)}
      style={parseStyle([
        style,
        fontConfigToCSS(fontConfig),
        { fontSize: size }
      ])}
    >
      {children}
    </span>
  )
}

const H1: FC<TextProps> = props => (
  <TextFactory
    font={Font.BOLD}
    size={rem(64)}
    {...props}
  />
)

const H2: FC<TextProps> = props => (
  <TextFactory
    font={Font.BOLD}
    size={rem(40)}
    {...props}
  />
)

const H3: FC<TextProps> = props => (
  <TextFactory
    font={Font.BOLD}
    size={rem(24)}
    {...props}
  />
)

const Subtitle: FC<TextProps> = props => (
  <TextFactory
    font={Font.MEDIUM}
    size={rem(24)}
    {...props}
  />
)

const Body: FC<TextProps> = props => (
  <TextFactory
    font={Font.MEDIUM}
    size={rem(16)}
    {...props}
  />
)

const Bold: FC<TextProps> = props => (
  <TextFactory
    font={Font.BOLD}
    size={rem(16)}
    {...props}
  />
)

const Small: FC<TextProps> = props => (
  <TextFactory
    font={Font.MEDIUM}
    size={rem(14)}
    {...props}
  />
)

const PreTitle: FC<TextProps> = props => (
  <TextFactory
    font={Font.MEDIUM}
    size={rem(12)}
    {...props}
  />
)

export const Text = {
  H1,
  H2,
  H3,
  Subtitle,
  Body,
  Bold,
  Small,
  PreTitle
}
