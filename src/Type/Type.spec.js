import React from 'react'
import { mount } from 'enzyme'

import { Anchor, Header, Text } from './Type'
import elementTests from '../utils-test/element-tests'

describe('<Anchor/>', () => {
  // Basic library element test suite
  elementTests(Anchor)

  test('should render type classes for anchor', () => {
    const wrapper = mount(<Anchor color="success" size="sm" />)
    expect(wrapper.find('a.anchor.text-success.text-sm').length).toEqual(1)
  })

  test('should render btn classes for button style anchor', () => {
    const wrapper = mount(<Anchor button color="success" size="sm" />)
    expect(wrapper.find('a.btn.btn-success.btn-sm').length).toEqual(1)
  })
})

describe('<Header/>', () => {
  // Basic library element test suite
  elementTests(Header)
})

describe('<Text/>', () => {
  // Basic library element test suite
  elementTests(Text)
})
