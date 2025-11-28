import { useState } from 'react';

import { Navigate, useNavigate, Link } from 'react-router';
import FormData from 'form-data';

import {Loading} from '../../components/loading/Loading'

import api from '../../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';

import './LoginPage.css';


export function LoginPage() {
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
            const response = await api.post('/api/token/', formData)

            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
                navigate('/')

            } else { navigate('/login') }

        } catch (error) {
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


    return (<>
        <div className='login-page'>
            <div className="login-container">
                <h1 className='login-page-heading'><Link className="login-page-logo-link" to={"/"}>eCEYLON</Link></h1>

                <div className="login-page-form">
                    <h2> Login to your account </h2>
                    <div>
                         <input type="text" id="username" name="username" required placeholder="Username" onChange={handleUsername} />

                    </div>
                    <div>
                        <input type="password" id="password" name="password" required placeholder="Password" onChange={handlePassword} />
                    </div>
                    
                    <button className="login-btn" type="submit" onClick={login}>Login</button>
                    <div className="login-remember-me">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me"> Remember me </label>
                    </div>

                    <div className="login-page-register-container">
                        <Link className="loging-pg-register-btn" to={"/register"}>Register</Link>
                        <Link className="forget-password-btn" to={"/forget-password"}>forget password?</Link>
                    </div>
                </div>
            </div>
            {loading&&<Loading />}
        </div>
    </>)
}