// pages/_app.js
import '../reset.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'

const navItems = [
  { key: 'home', label: '🏠', route: '/' },
  { key: 'broker', label: 'C', route: '/broker' },
  { key: 'developer', label: 'X', route: '/developer' },
  { key: 'individual', label: 'L', route: '/individual' },
]

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const currentPath = router.pathname.slice(1) || 'home'

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ul style={styles.navList}>
          {navItems.map((item) => (
            <li
              key={item.key}
              style={{
                ...styles.navItem,
                ...(item.key === currentPath ? styles.activeNavItem : {}),
              }}
              onClick={() => router.push(item.route)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.content}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '60px',
    background: '#1f1f1f',
    color: '#fff',
    padding: '20px 0',
    position: 'fixed',
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  navItem: {
    width: '26px',
    height: '26px',
    borderRadius: '29.271px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: '#2a2a2a',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold',
    transition: 'background 0.3s, color 0.3s',
  },
  activeNavItem: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  content: {
    marginLeft: '80px',
    padding: '40px',
    flex: 1,
    background: '#f9fafb',
    minHeight: '100vh',
  },
}
