import { useState } from 'react';

import { Link } from 'react-router';
import axios from 'axios';
import FormData from 'form-data';

import { Loading } from '../../components/loading/Loading'

import './RegisterPage.css';


export function RegisterPage() {

    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [retypePasswordMessage, setRetypePasswordMessage] = useState('')

    const formData = new FormData()

    const handleFirstName = (event) => { setFirstName(event.target.value) }

    const handleLastName = (event) => { setLastName(event.target.value) }

    const handleEmail = event => { setEmail(event.target.value) }

    const handlePassword = (event) => { setPassword(event.target.value) }

    const handleRePassword = (event) => {
        setRePassword(event.target.value)
        const checkPassword = password.startsWith(event.target.value)
        checkPassword ? setRetypePasswordMessage(null) : setRetypePasswordMessage('Miss match password')
    }

    const handleSubmit = async () => {
        setLoading(true)
        formData.append('username', email)
        formData.append('first_name', firstName)
        formData.append('last_name', lastName)
        formData.append('email', email)
        formData.append('password', password)
        const response = await axios.post('http://127.0.0.1:8000/estore/user/', formData)
        console.log(response.data)
        setLoading(false)
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
                        {<div className='email-info'></div>}
                    </div>
                    <div className='password-input'>
                        <div className='first-type-password'>
                            <input type="password" name='password' placeholder='Password' autoComplete="new-password" onChange={handlePassword} />
                            {<div className='password-info'></div>}

                        </div>
                        <div className='retype-password'>
                            <input type="password" name="password" placeholder='Retype Password' autoComplete="new-password" onChange={handleRePassword} />
                            {retypePasswordMessage ? <ul className='retype-password-info'><>
                                <li>{retypePasswordMessage}</li>
                            </></ul> : null}
                        </div>
                    </div>
                    <div className='register-btn-container'>
                        <button type="submit" onClick={handleSubmit} className='register-btn'>Register</button>
                        <Link className='register-pg-login-link' to={'/login'}>Already have an account?</Link>
                    </div>
                </div>

            </div>
            {loading ? <Loading /> : null}
        </div>
    </>)
}