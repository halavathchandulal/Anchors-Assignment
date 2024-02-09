import React, {useState} from 'react'
import './index.css'

const Register = ({onRegister}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = () => {
    onRegister({name, email})
  }

  return (
    <div className='bg-conatiner'>
      <div className='conatiner'>
        <h2 className='heading'>Create Your Account</h2>

        <label>Name: </label>
        <input
          placeholder='Enter Your Name'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />

        <label>Email: </label>
        <input
          placeholder='Enter Email ID'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />

        <button className='button-btn' onClick={handleRegister}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Register
