import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const { role } = router.query

    if (role) {
      localStorage.setItem('userRole', role)
    }
  }, [router.query])
  return (
    <div>
      <h1>Stays Sub brand app Renter</h1>
    </div>
  )
}
