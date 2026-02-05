import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './AuthForm.scss'

const AuthForm = () => {
  const {mode,password, confirmPassword, setEmail, setPassword, setUsername, setConfirmPassword} = useOutletContext();

  const match = password === confirmPassword;

  return (
    <div className='form-body'>
      {mode == 'register' && 
        <div className="form-body__field">
          <input placeholder=' ' type="text"  onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="username">Username</label>
        </div>
      }
      <div className="form-body__field">
        <input placeholder=' ' type="text" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-body__field" >
        <input placeholder='' className={`password ${!match ? 'invalid' : ''}`} type="password" name="password"  onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="password">Password</label>
      </div>
      {mode == 'register' && 
        <div className="form-body__field">
          <input placeholder='' className={`password ${!match ? 'invalid' : ''}`} type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
      }
      <button type="submit">{mode == 'register' ? 'Register' : 'Login'}</button>
    </div>
  )
}

export default AuthForm