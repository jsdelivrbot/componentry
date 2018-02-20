// @flow
import classNames from 'classnames'

import NavItem from './NavItem'
import elementFactory from '../component-factories/element-factory'
import type { ElementProps } from '../component-factories/element-factory'

export type Props = {
  pills?: boolean,
  vertical?: boolean,
} & ElementProps

const makeNav = tabNav => {
  const options = {
    name: tabNav ? 'TabNav' : 'Nav',
    tag: 'nav',
    computedClassName: (ctxClassName, propsClassName, { pills, vertical }) =>
      classNames('nav', ctxClassName, propsClassName, {
        'nav-tabs': tabNav,
        'flex-column': vertical,
        'nav-pills': pills,
      }),
    clean: ['pills', 'vertical'],
  }

  if (tabNav) options.role = 'tablist'

  return elementFactory(options)
}

const Nav = makeNav(false)
const TabNav = makeNav(true)

export { TabNav }

// $FlowFixMe
Nav.Item = NavItem
export default Nav
