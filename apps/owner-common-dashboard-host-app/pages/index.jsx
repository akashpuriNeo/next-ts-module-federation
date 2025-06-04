import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import OwnerHome from './OwnerHome'

const CoOwnershipHome = dynamic(() => import('coownershipapp/CoownerHome'), {
  ssr: false,
  loading: () => <p>Loading Co-Ownership...</p>,
})
const FractionalInvestHome = dynamic(
  () => import('fractionalinvestapp/FractionalInvestHome'),
  { ssr: false, loading: () => <p>Loading Fractional Invest...</p> },
)
const RentalLandlordHome = dynamic(
  () => import('rentallandlordapp/RentalLandlordHome'),
  { ssr: false, loading: () => <p>Loading Rental Landlord...</p> },
)

export default function Main() {
  const router = useRouter()
  const { view } = router.query

  const renderComponent = () => {
    switch (view) {
      case 'coownership':
        return <CoOwnershipHome />
      case 'fractional':
        return <FractionalInvestHome />
      case 'rental':
        return <RentalLandlordHome />
      default:
        return <OwnerHome />
    }
  }

  const isActive = (key) => view === key || (key === 'home' && !view)

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ul style={styles.navList}>
          <li
            style={{
              ...styles.navItem,
              ...(isActive('home') ? styles.activeNavItem : {}),
            }}
            onClick={() => router.push('/?view=home')}
          >
            🏠
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(isActive('coownership') ? styles.activeNavItem : {}),
            }}
            onClick={() => router.push('/?view=coownership')}
          >
            C
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(isActive('fractional') ? styles.activeNavItem : {}),
            }}
            onClick={() => router.push('/?view=fractional')}
          >
            X
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(isActive('rental') ? styles.activeNavItem : {}),
            }}
            onClick={() => router.push('/?view=rental')}
          >
            L
          </li>
        </ul>
      </div>
      <div style={styles.content}>{renderComponent()}</div>
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
    width: '48px',
    background: '#1d1d20',
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
    userSelect: 'none',
  },
  activeNavItem: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  content: {
    marginLeft: '60px',
    padding: '40px',
    flex: 1,
    background: '#f9fafb',
    minHeight: '100vh',
  },
}
