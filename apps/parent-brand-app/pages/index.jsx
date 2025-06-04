import Link from 'next/link'

export default function Home() {
  const handleRoleClick = (role, url) => {
    localStorage.setItem('userRole', role)
    window.location.href = url // ✅ removed ?role=...
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🏠 Partment Platform</h1>
        <div style={styles.authButtons}>
          <Link href='/login'>
            <button style={styles.button}>Login</button>
          </Link>
          <Link href='/signup'>
            <button style={{ ...styles.button, ...styles.signupButton }}>
              Signup
            </button>
          </Link>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.intro}>
          <h2 style={styles.subtitle}>Welcome!</h2>
          <p style={styles.description}>
            Find your place in the Partment ecosystem. Choose your role to
            continue:
          </p>
        </section>

        <section style={styles.roles}>
          <div
            onClick={() => handleRoleClick('owner', 'http://localhost:3002')}
            style={styles.card}
          >
            <h3>Owner</h3>
            <p>Manage your properties, track tenants, and more.</p>
          </div>

          <div
            onClick={() => handleRoleClick('seller', 'http://localhost:3003')}
            style={styles.card}
          >
            <h3>Seller</h3>
            <p>List properties, view leads, and manage sales.</p>
          </div>

          <div
            onClick={() => handleRoleClick('renter', 'http://localhost:3001')}
            style={styles.card}
          >
            <h3>Renter</h3>
            <p>Browse available homes and manage your bookings.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1rem',
    borderBottom: '1px solid #eee',
  },
  title: {
    fontSize: '2rem',
    margin: 0,
  },
  authButtons: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '0.5rem 1.2rem',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  signupButton: {
    backgroundColor: '#10b981',
  },
  main: {
    marginTop: '2rem',
  },
  intro: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  subtitle: {
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1.1rem',
    color: '#555',
  },
  roles: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  card: {
    flex: '1 1 230px',
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    transition: '0.3s',
  },
}
