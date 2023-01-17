type Link = {
  label: string
  url: string
}

export default function Header() {
  const links: Link[] = [
    {
      label: 'about',
      url: '#',
    },
    {
      label: 'contact us',
      url: '#',
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: 'lightgoldenrodyellow',
      }}
    >
      <h1>Header from different universe</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyleType: 'none' }}>
        {links.map((l) => (
          <a href={l.url} style={{ textDecoration: 'none' }} key={l.label}>
            <li>{l.label}</li>
          </a>
        ))}
      </ul>
    </div>
  )
}
