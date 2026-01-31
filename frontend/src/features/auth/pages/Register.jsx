import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import useAuthStore from "../AuthStore.js";

const Register = () => {
  const [email, setEmail] = useState('');
  const { register } = useAuthStore();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({ email, password, username });
      toast.success('Registration successful');
      navigate('/app');
    } catch (error) {
      console.log(error);
      toast.error('Registration failed');
    }
  }
  

  return (
    <>
      <div className="register">
        <div className="register__bubble">
          <div className="register__bubble__header">
            <h1>Register</h1>
          </div>
          <div className="register__bubble__body">
            <form onSubmit={handleSubmit}> 
              <label>Username</label>
              <input 
                type="text" 
                placeholder='Username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

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
              <div className="ct">
                <button type="submit">Register</button>
                <p>Already have an account? <span><Link to="/login">Login now!</Link></span></p>
              </div>
            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default Register