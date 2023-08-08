import React, { useState } from 'react'

export const Clicker = (): JSX.Element => {
  const [count, setCount] = useState(0)
  return <>
        <button onClick={() => { setCount((count) => count + 1) }}>
            count is {count}
        </button>
        <p>
            Edit <code>src/App.tsx</code> and save to test HMR
        </p>
    </>
}
