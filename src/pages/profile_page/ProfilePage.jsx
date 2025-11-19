

import '.ProfilePage.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';

export function ProfilePage(){

    return(
        <>
        <Navbar />
        <div className='profile-page'> 
            <div className='main-container'>
                <div className='profile-image-conatainer'>
                    <img src="'images/customers/person-2.jpg'" alt="" />
                </div>
                <div className='customer-detail'>
                    <div>
                        Name: Rishan 
                        <button> change </button>
                    </div>
                    <div>
                        Address: Colombo, Sri Lanka
                        <button>change</button>
                    </div>
                </div>

                <div className='Order-history'>
                    Oder History 
                </div>

            </div>
            <div className='sidebar'>
                Sidebar
            </div>

        </div>
        <Footer />
        </>
    )
}