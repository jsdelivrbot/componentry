/* eslint-disable react/prop-types */
import React from 'react'
import { func, node, string, oneOfType } from 'prop-types'
import classNames from 'classnames'

/** Convenience export for rendering a Container element with children */
export const renderContainer = ({ As = 'div', children, ...rest }) => (
  <As {...rest}>{children}</As>
)

/**
 * Factory function returns a FSC with the specified DOM element and base classes.
 * This should be used to create static subcomponents with defaulted class names.
 *
 * Note: A name should be passed for display purposes
 *
 * The `attrs` param is an escape hatch to pass any non-standard values.
 * @export
 * @param {config} [{ classes, tag='div', attrs }={}]
 * @returns {Component} React functional stateless component with base classes.
 */
export default ({ attrs = {}, classes, name, tag } = {}) => {
  Element.propTypes = {
    As: oneOfType([func, node]),
    children: node,
    className: string
  }

  if (name) Element.displayName = name
  // Modal HOCs Title using withActiveState to get id w/ guid, but also passes in
  // activeContext and needs to be cleared
  function Element({ As, activeContext, children, className, ...rest }) {
    // Props have precedence, use factory tag as default
    const Component = As || tag || 'div'

    return (
      <Component className={classNames(classes, className)} {...attrs} {...rest}>
        {children}
      </Component>
    )
  }

  return Element
}