
import { Menubar } from '../menubar/MenuBar';
import { SearchBar } from '../searchbar/SearchBar';

import './Navbar.css';

export function Navbar() {

    return (
        <>
            <header className='navbar-container'>
                <div className='navbar'>
                    <div className='logo-container'>
                        eCeylon
                    </div>
                    <SearchBar />
                    <Menubar />
                </div>
            </header>

        </>
    )
}