import React, {useState} from 'react'

const VerifyEmail = ({onVerify}) => {
  const [otp, setOtp] = useState('')

  const handleVerify = () => {
    onVerify(otp)
  }

  return (
    <div>
      <h2>Verify Email</h2>
      <p>An OTP has been sent to your email. Enter it below:</p>
      <label>OTP:</label>
      <input type='text' value={otp} onChange={e => setOtp(e.target.value)} />
      <button onClick={handleVerify}>Verify</button>
    </div>
  )
}

export default VerifyEmail
