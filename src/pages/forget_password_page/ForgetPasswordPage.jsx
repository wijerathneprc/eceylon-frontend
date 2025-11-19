
import { Link } from 'react-router';

import './ForgetPasswordPage.css';


export function ForgetPasswordPage(){

    return(<>
        <div className='forget-password-page'>
            <h2> eCEYLON </h2>
            <div> Reset Password </div>
            <form className='forget-password-form'>

                <div>
                    <input type="email" name='email'placeholder='email' />
                </div>
                <div>
                    <input type="password" name='new-password' placeholder='new password'/>
                    <input type="password" name="retype-password" id="" placeholder='retype-password'/>
                </div>
                <div>
                    <button>reset password</button>
                </div>
            </form>
            <Link to={'/login'}> remember my password</Link>

        </div>
    
    </>)
}