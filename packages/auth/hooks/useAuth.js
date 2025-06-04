import { useRouter } from 'next/router'

export const useAuth = () => {
  const router = useRouter()

  const login = ({ email, password }) => {
    // Replace with real authentication logic
    const userRole = 'owner' // mock role: owner, seller, renter, etc.
    router.push(`/${userRole}`)
  }

  return { login }
}
