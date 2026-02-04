import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Outlet, useNavigate, useSearchParams } from "react-router-dom"
import AuthForm from '../pages/AuthForm.jsx'
import useAuthStore from "../AuthStore.js";
import "./AuthLayout.scss"


const AuthLayout = () => {

  const [params,setParams] = useSearchParams();
  if(!params.get("mode")) setParams('login');
  const mode = params.get("mode");
  

  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const {login, register} = useAuthStore();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(mode == 'login'){
      toast.success('Login successful');
      await login({email,password})
      navigate('/app')
    }else if(mode == 'register'){
      toast.success('Registration successful');
      await register({email,password,username})
      navigate('/app')
    }

    console.log("form submitted", {email, password, username, confirmPassword});
  }

  return (
    <>
      <div className="auth-layout">
        <div className="auth-layout__left">
          <h1 className="heading">{mode === "login" ? "Login" : "Register"}</h1>
          <form onSubmit={handleSubmit} className="form">
            <Outlet context={{mode,password,confirmPassword, setEmail, setPassword, setUsername, setConfirmPassword}}/>
          </form>
        </div>
      </div>
    </>
  )
}

export default AuthLayout