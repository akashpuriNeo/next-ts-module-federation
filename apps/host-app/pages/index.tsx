import { useState } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('remote/Header'), {
  ssr: false,
})
const Footer = dynamic(() => import('remote/Footer'), {
  ssr: false,
})
// const Button = dynamic(() => import('reactremote/Button'), {
//   ssr: false,
// })
// const Title = dynamic(() => import('reactremote/Title'), {
//   ssr: false,
// })

export default function Main() {
  const [counter, setCounter] = useState<number>(1)
  async function handleIncrement() {
    setCounter((c) => (c += 1))
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
        <h1>counter:</h1>
        <code>{counter}</code>
        <div>
          <button onClick={() => handleIncrement()}>counter++</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
