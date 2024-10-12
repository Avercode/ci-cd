import { useState } from 'react'

export const Counter = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <h2 data-testid="value-elem">Counter: {value}</h2>
      <button
        data-testid="increment-btn"
        onClick={() => setValue((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  )
}
