
import {Link} from 'react-router';
import './RegisterPage.css';

export function RegisterPage(){

    return(
        <>
        <div className='register-page'>
            <h2> eCEYLON </h2>
            <div> Register Your Account </div>
            <form className='register-form'>
                <div >
                    <input type="text" name="first-name" id="" placeholder='first name' />
                    <input type="text" name='last-name' placeholder='Last Name' />
                </div>
                <div>
                    <input type="email" name='email' placeholder='Email' />
                </div>
                <div>
                    <input type="password"  name='password' placeholder='password'/>
                    <input type="password" name="password" id=""  placeholder='retype password'/>
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
            <div>
                <Link to={'/login'}> already have an account? </Link>
            </div>

        </div>
        
        </>
    )
}