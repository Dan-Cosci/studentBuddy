import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from "../services/auth.service.js"
import { toast } from 'react-hot-toast';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(JSON.stringify({ email, password }));
      toast.success('Login successful');
      navigate('/app');
    } catch (error) {
      console.log(error);
      toast.error('Login failed');
    }
  }
  

  return (
    <>
      <div className="login">
        <div className="login__bubble">
          <div className="login__bubble__header">
            <h1>login</h1>
          </div>
          <div className="login__bubble__body">
            <form onSubmit={handleSubmit}> 
              <label>Email</label>
              <input 
                type="text" 
                placeholder='Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password</label>
              <input 
                type="password" 
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button type="submit">Login</button>
              <p>Don't have an account? <span><Link to="/register">Register now!</Link></span></p>
            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default Login