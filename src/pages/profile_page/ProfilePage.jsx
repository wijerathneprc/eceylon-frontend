


import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import { Link } from 'react-router';
import './ProfilePage.css';
import { ProfileImage } from './profile_image/ProfileImage';
import { Address } from './address/Address';
import { AddNewAddress } from './address/AddNewAddress';
import { useState } from 'react';

export function ProfilePage() {
    const [addNewAddress, setAddNewAddress] = useState(false)
    console.log(addNewAddress)

    return (<>
        <Navbar />
        <div className='profile-page'>
            <div className='profile-pg-main-container'>
                <h1>Profile</h1>
                <div className='profile-container'>
                    <div className='profile-img-container'>
                        <ProfileImage />
                    </div>
                    <div className='profile-info-container'>
                        <h2> Rishan Chathuranga </h2>
                        <div>
                            <p>email: wijerathne@gmail.com</p>
                            <p>phone no: +94704645780</p>
                        </div>

                    </div>
                    <button className='profile-edit-btn'> edit</button>
                </div>
              

                <div className='profile-pg-address'>
                    <div className='profile-add-new-address-btn-container'>
                        <h3>Addresses: </h3>
                        <button onClick={() => addNewAddress ? setAddNewAddress(false) : setAddNewAddress(true)}>+ Address </button>
                    </div>
                    <div className='profile-address-container'>
                        <Address />
                        <Address />
                       
                    </div>
                    
                    {addNewAddress ? <AddNewAddress setAddNewAddress={setAddNewAddress} /> : null}
                </div>

                <div className='profile-pg-order'>

                    <div className='profile-pg-order-heading'>
                        <h3>Orders: </h3>
                        <Link to={'/orders'}>Vist order history page</Link>
                    </div>
                </div>
            </div>
            <div className='profile-pg-sidebar'>
                Sidebar
            </div>
        </div>
        <Footer />
    </>)
}