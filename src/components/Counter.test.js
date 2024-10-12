import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { Counter } from './Counter'
import '@testing-library/jest-dom/extend-expect'

describe('test counter', () => {
  test('click increment btn', () => {
    render(<Counter />)
    const incrementBtn = screen.getByTestId('increment-btn')
    expect(screen.getByTestId('value-elem')).toHaveTextContent(0)
    act(() => {
      userEvent.click(incrementBtn)
    })
    expect(screen.getByTestId('value-elem')).toHaveTextContent(1)
  })
})
