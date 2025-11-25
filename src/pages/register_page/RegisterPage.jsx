
import { Link } from 'react-router';
import './RegisterPage.css';
import { useState } from 'react';

import axios from 'axios';
import FormData from 'form-data';

import { Button } from '../../components/button/Button'

export function RegisterPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const formData = new FormData()

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRePassword = (event) => {
        setRePassword(event.target.value)
        const checkPassword = password.startsWith(event.target.value)
        console.log(checkPassword)
    }

    const handleSubmit = async () => {
        formData.append('username', email)
        formData.append('first_name', firstName)
        formData.append('last_name', lastName)
        formData.append('email', email)
        formData.append('password', password)
        const response = await axios.post('http://127.0.0.1:8000/estore/user/', formData)
        console.log(response.data)
    }

    return (<>
        <div className='register-page'>
            <div className='register-form-container'>
                <h1><Link to={'/'} className='eceylon-logo'>  eCEYLON </Link></h1>
                <h2 className='register-heading'> Register Your Account </h2>
                <div className='register-form'>
                    <div className='user-name-input'>
                        <input type="text" name="first-name" placeholder='First Name' onChange={handleFirstName} />
                        <input type="text" name='last-name' placeholder='Last Name' onChange={handleLastName} />
                    </div>
                    <div className='email-address-input'>
                        <input type="email" name='email' placeholder='Email Address' autoComplete="username" onChange={handleEmail} />
                    </div>
                    <div className='password-input'>
                        <input type="password" name='password' placeholder='Password' autoComplete="new-password" onChange={handlePassword} />
                        <input type="password" name="password" placeholder='Retype Password' autoComplete="new-password" onChange={handleRePassword} />
                    </div>
                    <div className='register-btn-container'>
                        <button type="submit" onClick={handleSubmit} className='register-btn'>Register</button>
                        <Link className='login-link-register' to={'/login'}>Already have an account?</Link>
                    </div>
                </div>
            </div>
        </div>

    </>)
}