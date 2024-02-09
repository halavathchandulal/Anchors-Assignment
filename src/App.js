import './App.css'
import React, {useState} from 'react'
import HomePage from './components/HomePage'
import Register from './components/Register'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import Login from './components/Login'
import VerifyEmail from './components/VerifyEmail'

const App = () => {
  const [isVerified, setIsVerified] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [isCreatePostStep, setIsCreatePostStep] = useState(false)
  const [posts, setPosts] = useState([])
  const [showLoginPage, setShowLoginPage] = useState(false)
  const [showVerifyEmailPage, setShowVerifyEmailPage] = useState(false)
  const [showPostForm, setShowPostForm] = useState(false)

  const handleRegister = async ({name, email}) => {
    // Simulating an API call for registration
    const generatedOtp = '123456' // Replace with an actual OTP from the server
    setIsVerified(true)
    setShowVerifyEmailPage(true)
    console.log(`Registered: ${name}, ${email}, OTP: ${generatedOtp}`)
  }

  const handlePost = postText => {
    // Simulating an API call for posting
    const newPost = {id: posts.length + 1, text: postText, comments: []}
    setPosts([...posts, newPost])
    console.log('Email sent: Congrats! Your post is live now.')
    setIsCreatePostStep(true)
  }

  const handleLogin = userData => {
    // Simulating an API call for login
    console.log(`Logged in as: ${userData.email}`)
    setShowPostForm(true)
  }

  const handleLoginClick = () => {
    setIsNewUser(true)
    setShowLoginPage(true)
  }

  const handleRegisterClick = () => {
    setIsNewUser(true)
    setShowLoginPage(false)
  }

  const handleVerify = otp => {
    // Simulate API call for verifying email with OTP
    console.log(`Email verified with OTP: ${otp}`)
    // Perform necessary actions after email verification
  }

  return (
    <div className='App'>
      {!isNewUser ? (
        <HomePage
          onRegisterClick={handleRegisterClick}
          onLoginClick={handleLoginClick}
        />
      ) : isVerified ? (
        isCreatePostStep ? (
          <>
            {showPostForm ? (
              <PostForm onPost={handlePost} />
            ) : (
              <PostList posts={posts} />
            )}
          </>
        ) : showLoginPage ? (
          <Login onLogin={handleLogin} />
        ) : showVerifyEmailPage ? (
          <VerifyEmail onVerify={handleVerify} />
        ) : (
          <Register onRegister={handleRegister} />
        )
      ) : showLoginPage ? (
        <Login onLogin={handleLogin} />
      ) : showVerifyEmailPage ? (
        <VerifyEmail onVerify={handleVerify} />
      ) : (
        <Register onRegister={handleRegister} />
      )}
    </div>
  )
}

export default App
