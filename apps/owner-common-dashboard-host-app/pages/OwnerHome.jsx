import React from 'react'

export default function OwnerHome() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.iconRow}>
          <div style={{ ...styles.dot, backgroundColor: '#3B82F6' }}></div>
          <div style={{ ...styles.dot, backgroundColor: '#FACC15' }}></div>
          <div style={{ ...styles.dot, backgroundColor: '#FB7185' }}></div>
          <div style={{ ...styles.dot, backgroundColor: '#22C55E' }}></div>
        </div>
        <h1 style={styles.title}>Welcome Alexandria!</h1>
        <p style={styles.subtitle}>
          Manage your entire real estate journey under one roof – whether you’re
          looking to invest, own, or rent out properties.
        </p>
      </div>

      {/* Cards */}
      <div style={styles.cardWrapper}>
        {/* Co-owner */}
        <div style={styles.card}>
          <div style={styles.icon}>👤</div>
          <h2>
            <span style={styles.highlight}>Co-owner</span>ship Platform
          </h2>
          <p>
            Own your dream home for a fraction of the cost. Enjoy luxury
            properties with like-minded co-owners.
          </p>
          <div style={styles.buttonRow}>
            <button style={styles.blueButton}>Get started</button>
            <button style={styles.grayButton}>Explore dashboard</button>
          </div>
        </div>

        {/* Fractional Investment */}
        <div style={styles.card}>
          <div style={styles.icon}>🏦</div>
          <div style={styles.pendingTag}>2 steps pending</div>
          <h2>Fractional Investment</h2>
          <p>
            Build wealth through real estate starting with just $500. Complete
            two quick steps to begin your investment journey.
          </p>
          <div style={styles.buttonRow}>
            <button style={styles.greenButton}>Verify KYC</button>
            <button style={styles.grayButton}>Explore dashboard</button>
          </div>
        </div>

        {/* Landlord */}
        <div style={styles.card}>
          <div style={styles.icon}>🏠</div>
          <div style={styles.verifiedTag}>Verified landlord</div>
          <h2>Landlord Platform</h2>
          <p>
            Listed Properties: 2<br />
            Total Rental Income: $5200/month
            <br />
            Occupancy Rate: 95%
          </p>
          <div style={styles.buttonRow}>
            <button style={styles.purpleButton}>
              Manage Property Listings
            </button>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div style={styles.exploreSection}>
        <div style={styles.exploreLeft}>
          <div style={styles.icon}>🌍</div>
          <div>
            <h3>Partment Stays</h3>
            <p>Find unique places to stay around the world</p>
          </div>
        </div>
        <div style={styles.exploreRight}>
          <span>30,000+ listings</span>
          <span>✔ Verified hosts</span>
          <button style={styles.exploreButton}>Explore stays</button>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>© Copyright. All Rights Reserved</div>
    </div>
  )
}

const styles = {
  container: {
    padding: '76px 115px 35px 48px',
    fontFamily: 'sans-serif',
    background: '#f4f8fc',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '10px',
  },
  dot: {
    width: '8px',
    height: '16px',
    borderRadius: '2px',
  },
  title: {
    fontSize: '24px',
    color: '#0F172A',
    margin: 0,
  },
  subtitle: {
    fontSize: '14px',
    color: '#64748B',
  },
  cardWrapper: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    flex: 1,
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
  },
  icon: {
    fontSize: '30px',
    marginBottom: '10px',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#FACC15',
  },
  pendingTag: {
    backgroundColor: '#FDE68A',
    color: '#B45309',
    fontSize: '12px',
    borderRadius: '20px',
    padding: '2px 8px',
    marginBottom: '10px',
    display: 'inline-block',
  },
  verifiedTag: {
    backgroundColor: '#D1FAE5',
    color: '#065F46',
    fontSize: '12px',
    borderRadius: '20px',
    padding: '2px 8px',
    marginBottom: '10px',
    display: 'inline-block',
  },
  buttonRow: {
    marginTop: '15px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  blueButton: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  grayButton: {
    backgroundColor: '#F3F4F6',
    color: '#1F2937',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  greenButton: {
    backgroundColor: '#22C55E',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  purpleButton: {
    backgroundColor: '#A78BFA',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  exploreSection: {
    border: '1px solid #CBD5E1',
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fff',
  },
  exploreLeft: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  exploreRight: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  exploreButton: {
    backgroundColor: '#111827',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#94A3B8',
    fontSize: '12px',
  },
}
