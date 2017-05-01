import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CardBlock from './CardBlock';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 * @type {[type]}
 */
export default class Card extends Component {

  static Block = CardBlock
  static Header = CardHeader
  static Footer = CardFooter

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;
    let _className = classnames('card', className);

    return (
      <div className={_className} {...other}>
        {children}
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: '',
};
