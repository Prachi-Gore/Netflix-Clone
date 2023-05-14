import React, { useRef } from 'react'
import './register.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate();
    const[email,setEmail]=useState("")

    const emailRef=useRef()
   const handleStart=()=>{
setEmail(emailRef.current.value)
   }
   const[password,setPassword]=useState("")

    const passwordRef=useRef()
   const handleFinish=()=>{
setPassword(passwordRef.current.value)
   }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'></img>
            <button className="signinButton" onClick={(e)=>{
                e.preventDefault();
                navigate('/login')

            }}>Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {
            !email ?
            <div className="input">
                <input type="email" placeholder='email address' ref={emailRef}   
                />
                <button className="registeredButton"onClick={handleStart}>Get Started</button>
            </div>:
            <form className="input">
            <input type="password" placeholder='password' ref={passwordRef}   
            />
            <button className="registeredButton"onClick={handleFinish}> Start</button>
        </form>

}
        </div>
      
    </div>
  )
}

export default Register
