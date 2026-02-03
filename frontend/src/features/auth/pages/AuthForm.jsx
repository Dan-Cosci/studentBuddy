import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './AuthForm.scss'

const AuthForm = () => {
  const {mode,setEmail, setPassword, setUsername, setConfirmPassword} = useOutletContext();

  console.log(mode);


  return (
    <div className='form-body'>
      {mode == 'register' && <>
        {/* <label htmlFor="username">Username</label> */}
        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      </>}
      {/* <label htmlFor="email">Email</label> */}
      <input type="text" placeholder='Email'  onChange={(e) => setEmail(e.target.value)} />
      {/* <label htmlFor="password">Password</label> */}
      <input type="password" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      {mode == 'register' && <>
        {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
        <input type="password" name="confirmPassword" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
      </>}
      <button type="submit">{mode == 'register' ? 'Register' : 'Login'}</button>
    </div>
  )
}

export default AuthForm