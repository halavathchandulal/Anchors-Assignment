// src/components/Login.js
import React, {useState} from 'react'
import './index.css'

const Login = ({onLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const userData = {email, password}
    onLogin(userData)
  }

  return (
    <div className='container'>
      <h2 className='heading'>Login</h2>
      <form onSubmit={handleSubmit}>
        <label className='label-name1'>
          Email:
          <input
            placeholder='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label className='label-name2'>
          Password:
          <input
            placeholder='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button className='button1' type='submit'>
          Login
        </button>
      </form>
      <p>Test: This is the Login component.</p> {/* Add this line */}
    </div>
  )
}

export default Login
