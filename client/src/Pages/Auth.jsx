import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup, login } from '../Actions/Auth'
import './Pages.css'

export const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email && !password) {
            alert('Enter email and password')
        }
        if (isSignup) {
            if (!name) {
                alert("Enter a name to continue")
            }
            // console.log(name,email,password)
            dispatch(signup({ name, email, password }, navigate))
        } else {
            // console.log(name,email,password)
            dispatch(login({ email, password }, navigate))

        }
    }

    return (
        <section class='auth-section'>
            <div class='auth-container-2'>
                <h3>{isSignup ?
                    'Please Register yourself' :
                    'Welcom Back! please login'
                }
                </h3>
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type="text" id='name' name='name' onChange={(e) => { setName(e.target.value) }} />
                            </label>
                        )
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
                    </label>
                    <label htmlFor="password">
                        <div>
                            <h4>Password</h4>
                        </div>
                        <input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
                        {!isSignup && <p style={{ color: "#007ac6", fontSize: '13px' }}>forgot password?</p>}
                    </label>
                    <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : 'sign up'}</button>
                </p>
            </div>
        </section>
    )
}