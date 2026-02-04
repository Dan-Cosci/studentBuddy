import React, { useState } from 'react'
import { Outlet, useSearchParams } from "react-router-dom"
import AuthForm from '../pages/AuthForm.jsx'
import "./AuthLayout.scss"


const AuthLayout = () => {

  const [params] = useSearchParams();
  const mode = params.get("mode") || 'login';
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", {email, password, username, confirmPassword});
  }

  return (
    <>
      <div className="auth-layout">
        <div className="auth-layout__left">
          <h1 className="heading">{mode === "login" ? "Login" : "Register"}</h1>
          <form onSubmit={handleSubmit} className="form">
            <Outlet context={{mode, setEmail, setPassword, setUsername, setConfirmPassword}}/>
          </form>
        </div>
      </div>
    </>
  )
}

export default AuthLayout