import { Link } from 'react-router';

import './LoginPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import formData from 'form-data';
// import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8000/api/';

// const register = (username, email, password) => {
//     return axios.post(API_URL + 'register/', { username, email, password });
// };

const login = async (event) => {
    event.preventDefault();
    const formD = new formData(event.currentTarget);
    const username = formD.get('username');
    const password = formD.get('password');
    console.log(username);
    console.log(password);
    const response = await axios.post(API_URL + 'token/', { username, password })
    if (response.data.access) {
        Cookies.set('access_token', response.data.access);
        Cookies.set('refresh_token', response.data.refresh);
        console.log(response.data.refresh)
        console.log(response.data.access)
    }
    return response.data;

    }

// const logout = () => {
//     Cookies.remove('access_token');
//     Cookies.remove('refresh_token');
// };

// ... other functions like token refresh, getting user info

// export default { register, login, logout };

export function LoginPage() {
    // const [token, setToken] = useState('')

    // useEffect(
    //     login(), 
    // )
    return (
        <>
            <div className="login-container">
                <h1><a className="logo-link-h1" href="index.html">eCEYLON</a></h1>

                <form className="login-form" onSubmit={login}>
                    <h2> Login to your account </h2>
                    <input type="text" id="username" name="username" required placeholder="Username" />
                    <input type="password" id="password" name="password" required placeholder="Password" />
                    <button className="login-btn" type="submit">Login</button>
                    <div class="login-remember-me">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label for="remember-me"> Remember me </label>
                    </div>
                </form>

                <div className="login-register-pasword">
                    <Link className="register-btn" to={"/register"}> Register </Link>
                    <a className="forget-password-btn" href="#"> forget password? </a>
                </div>
            </div>

        </>
    )
}