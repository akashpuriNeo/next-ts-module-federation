const Header = (await import('header/pages')).default
const add = (await import('header/utils')).add

export default function Main() {
  const num1 = 1
  const num2 = 2

  return (
    <div
      style={{
        backgroundColor: 'lightskyblue',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <main>
        <h1>
          {num1} + {num2} is {add(num1, num2)}, based on utils function from
          remote
        </h1>
      </main>
    </div>
  )
}
