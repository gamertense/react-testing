import React from 'react'
import { create, act } from 'react-test-renderer'

import Button from '../button'

describe('Button component', () => {
  test('it shows the expected text when clicked', () => {
    let component
    act(() => {
      component = create(<Button text="SUBSCRIBE TO BASIC" />)
    })
    const instance = component.root
    const button = instance.findByType('button')
    act(() => button.props.onClick())
    expect(button.props.children).toBe('PROCEED TO CHECKOUT')
  })
})

test('Matches the snapshot', () => {
  const button = create(<Button />)
  expect(button.toJSON()).toMatchSnapshot()
})
