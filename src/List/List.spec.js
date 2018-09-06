import React from 'react'
import { mount, render } from 'enzyme'

import List from './List'
import elementTests from '../utils-test/element-tests'

describe('<List />', () => {
  // Basic library element test suite
  elementTests(List)

  test('should render a container ul with class list-group by default', () => {
    const wrapper = mount(<List />)
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('.list-group').length).toEqual(1)
  })

  test('should render a div when children have onclick', () => {
    const wrapper = mount(
      <List>
        <List.Item onClick={() => {}} />
      </List>,
    )
    expect(wrapper.find('ul').length).toBeFalsy()
    expect(wrapper.find('div').length).toBeTruthy()
  })

  test('should render a div when children have hrefs', () => {
    const wrapper = mount(
      <List>
        <List.Item href="test" />
      </List>,
    )
    expect(wrapper.find('ul').length).toBeFalsy()
    expect(wrapper.find('div').length).toBeTruthy()
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<List /> snapshots', () => {
  it('renders correctly', () => {
    const tree = render(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>,
    )

    expect(tree).toMatchSnapshot()
  })
})
