import React, { useState }  from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import './AuthForm.scss'

const AuthForm = () => {
  const {mode,password, confirmPassword, setEmail, setPassword, setUsername, setConfirmPassword} = useOutletContext();

  const [showpass, setShowpass] = useState(false);
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
        <input placeholder='' className={`password ${!match ? 'invalid' : ''}`} type={`${showpass ? 'text' : 'password'}`} name="password"  onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="password">Password</label>
      </div>
      {mode == 'register' && 
        <div className="form-body__field">
          <input placeholder='' className={`password ${!match ? 'invalid' : ''}`} type={`${showpass ? 'text' : 'password'}`} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
      }
      <div className="form-body__additional">
        <input type="checkbox" name="showPass" onChange={(e) => setShowpass(e.target.checked)}/>
        <label htmlFor="showPass">show password</label>
      </div>
      <button type="submit">{mode == 'register' ? 'Register' : 'Login'}</button>
      <Link className='link' to={`/auth?mode=${mode == 'login'? 'register' : 'login'}`}>
        {`${mode == 'login' ? 'Don\'t have an account? Register now!' : 'Have an account? Login!'}`}
      </Link>
    </div>
  )
}

export default AuthForm