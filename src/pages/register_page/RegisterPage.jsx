
import { Link } from 'react-router';
import './RegisterPage.css';
import { useState } from 'react';

import axios from 'axios';
import FormData from 'form-data';

export function RegisterPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const formData = new FormData()

    const handleFirstName = (event) =>{
        setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleEmail = event =>{
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRePassword = (event) =>{
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

    return (
        <>
            <div className='register-page'>
                <h2> eCEYLON </h2>
                <div> Register Your Account </div>
                <form className='register-form'>
                    <div >
                        <input type="text" name="first-name"  placeholder='first name' onChange={handleFirstName} />
                        <input type="text" name='last-name' placeholder='Last Name' onChange={handleLastName} />
                    </div>
                    <div>
                        <input type="email" name='email' placeholder='Email' autoComplete="username" onChange={handleEmail} />
                    </div>
                    <div>
                        <input type="password" name='password' placeholder='password' autoComplete="new-password"  onChange={handlePassword}/>
                        <input type="password" name="password"  placeholder='retype password' autoComplete="new-password" onChange={handleRePassword} />
                    </div>

                    <div>
                        <button type="submit" onClick={handleSubmit}>Register</button>
                    </div>
                </form>
                <div>
                    <Link to={'/login'}> already have an account? </Link>
                </div>

            </div>

        </>
    )
}