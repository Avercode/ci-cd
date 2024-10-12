import { sum } from './sum'

test('Test sum', () => {
  const val = sum(3, 2)
  expect(val).toBe(6)
})
