// src/components/HomePage.js
import React from 'react'
import './index.css'

const HomePage = ({onRegisterClick, onLoginClick}) => {
  return (
    <div className='container'>
      <h1 className='heading'>Welcome to the Discussion Forum</h1>
      <button className='button1' onClick={onRegisterClick}>
        Create Your Account
      </button>
      <div>
        <button className='button2' onClick={onLoginClick}>
          Already have an account?<a href=''> Login</a>
        </button>
      </div>
    </div>
  )
}

export default HomePage
