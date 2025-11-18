

import './LoginPage.css';

export function LoginPage() {
    return (

        <>
            <div className="login-container">
                <h1><a className="logo-link-h1" href="index.html">eCEYLON</a></h1>

                <form className="login-form" action="/login" method="post">
                    <h2> Login to your account </h2>
                    <input type="text" id="username" name="username" required placeholder="Username" />
                    <input type="password" id="password" name="password" required placeholder="Password" />
                    <button class="login-btn" type="submit">Login</button>
                    <div class="login-remember-me">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label for="remember-me"> Remember me </label>
                    </div>
                </form>

                <div className="login-register-pasword">
                    <a className="register-btn" href="register.html"> Register </a>
                    <a className="forget-password-btn" href="#"> forget password? </a>
                </div>
            </div>

        </>
    )
}