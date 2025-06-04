import LoginForm from '../components/LoginForm'
import { useAuth } from '../hooks/useAuth'

export default function LoginPage() {
  const { login } = useAuth()

  return <LoginForm onLogin={login} />
}
