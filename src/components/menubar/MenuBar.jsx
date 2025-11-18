
import { Link } from "react-router";

import cartIconWhite from '../../assets/icons/shopping-cart-white.svg';
import accoutIconWhite from '../../assets/icons/account-circle-white.svg';
import './Menubar.css';

export function Menubar(){

    return(
    <>
        <nav className='menu-bar-container'>
            <Link to='/estore'>
                eStore
            </Link>
            <Link to={'/cart'}>
                <img src={cartIconWhite} alt="" />
            </Link>
            <Link to={'/login'} >
                <img src={accoutIconWhite} alt="" />
            </Link>


        </nav>
    
    </>
    )
}