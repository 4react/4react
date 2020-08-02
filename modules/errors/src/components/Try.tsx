import React, { ErrorInfo, ReactNode } from 'react'

export interface TryProps {
  fallback: (error: Error) => ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => any
}

class Try extends React.Component<TryProps> {
  state = {
    hasError: false,
    error: new Error('Unknown error')
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props
    if (onError) {
      onError(error, errorInfo)
    }
  }

  render() {
    const { fallback, children } = this.props
    const { hasError, error } = this.state

    if (hasError) {
      return fallback(error)
    }

    return children
  }
}

export default Try
