import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { password, confirmPassword, termsAccepted } = formData

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    if (!termsAccepted) {
      alert('You must agree to the terms & conditions')
      return
    }

    // TODO: Send data to backend for registration
    console.log('Signup successful', formData)

    // Redirect to login or dashboard
    router.push('/login')
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          First Name*
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Last Name (Surname)*
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email*
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Phone Number*
          <input
            type='tel'
            name='phone'
            placeholder='+20'
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password*
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <small style={styles.hint}>
            Min 8 characters, 1 uppercase, 1 lowercase, 1 special char
          </small>
        </label>
        <label style={styles.label}>
          Confirm Password*
          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label
          style={{
            ...styles.label,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <input
            type='checkbox'
            name='termsAccepted'
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
            style={{ marginRight: '0.5rem' }}
          />
          I agree to the terms & conditions
        </label>
        <button type='submit' style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '80px auto',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.75rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem',
  },
  input: {
    padding: '0.5rem',
    marginTop: '0.3rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  hint: {
    fontSize: '0.85rem',
    color: '#666',
    marginTop: '0.25rem',
  },
}
