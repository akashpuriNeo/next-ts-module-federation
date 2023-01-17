import { useState } from 'react'

const Header = (await import('header/pages')).default
const add = (await import('header/utils')).add

export default function Main() {
  const [counter, setCounter] = useState<number>(0)
  const increment = 1

  function handleIncrement(num: number) {
    setCounter((c) => (c += num))
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <main>
        <h1>counter based on utils function from remote:</h1>
        <code>
          {counter} + {increment} is {add(counter, increment)}
        </code>
        <div>
          <button onClick={() => handleIncrement(increment)}>
            add counter by {increment}
          </button>
        </div>
      </main>
    </div>
  )
}
