import React, { Component } from 'react'

// Breakpoints
const sm = 576
// const md = 768
const lg = 992
// const xl = 1200

type Props = {
  children: func,
}

let running = false

export default class MediaQuery extends Component<Props> {
  state = {
    small: false, // ~ mobile devices
    medium: false, // ~ tablet/phablet devices
    large: false, // ~ desktop devices
  }

  componentDidMount() {
    this.setSize()
    this.setResizeListener()
  }

  setResizeListener = () => {
    const throttledResize = () => {
      if (!running) {
        running = true

        window.requestAnimationFrame(() => {
          running = false
          this.setSize()
        })
      }
    }

    window.addEventListener('resize', throttledResize)
  }

  setSize = () => {
    const { innerWidth } = window

    const newState = {
      small: false,
      medium: false,
      large: false,
    }

    if (innerWidth < sm) {
      newState.small = true
    } else if (innerWidth < lg) {
      newState.medium = true
    } else {
      newState.large = true
    }

    this.setState(newState)
  }

  render() {
    return this.props.children(this.state)
  }
}

export type Media = {
  small: boolean,
  medium: boolean,
  large: boolean,
}

export const withMediaQuery = Wrapped => props => (
  <MediaQuery>{media => <Wrapped media={media} {...props} />}</MediaQuery>
)
