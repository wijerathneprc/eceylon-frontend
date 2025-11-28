import { Link } from 'react-router';

import './LoginPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import FormData from 'form-data';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

import api from '../../api';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
// import { useEffect, useState } from 'react';


// const logout = () => {
//     Cookies.remove('access_token');
//     Cookies.remove('refresh_token');
// };



export function LoginPage() {
    // const [token, setToken] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)

    const formData = new FormData();

    const navigate = useNavigate()

    const login = async () => {
        setLoading(true)

        formData.append('username', username);
        formData.append('password', password);
    
        try {
            console.log(username)
            console.log(password)
            const response = await api.post('/api/token/', formData)

            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
                console.log( response.data.access)
                navigate('/')

            } else {
                // navigate('/login')
                console.log('not login')
            }
        } catch (error) {
            console.log('Faile')
            console.log(error)
            alert(error)
        } finally {
            setLoading(false)
        }






    }


    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }


    return (
        <>
            <div className="login-container">
                <h1><Link className="logo-link-h1" to={"/"}>eCEYLON</Link></h1>

                <div className="login-form">
                    <h2> Login to your account </h2>
                    <input type="text" id="username" name="username" required placeholder="Username" onChange={handleUsername} />
                    <input type="password" id="password" name="password" required placeholder="Password" onChange={handlePassword} />
                    <button className="login-btn" type="submit" onClick={login}>Login</button>
                    <div className="login-remember-me">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me"> Remember me </label>
                    </div>
                </div>

                <div className="login-register-pasword">
                    <Link className="register-btn" to={"/register"}> Register </Link>
                    <Link className="forget-password-btn" to={"/forget-password"}> forget password? </Link>
                </div>
            </div>

        </>
    )
}