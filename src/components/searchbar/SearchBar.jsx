
import searchIconBlack from '../../assets/icons/search-black.svg';
import './SearchBar.css';

export function SearchBar(){

    return(
        <>
        <div className='search-bar-container'>
            <input type="text" name="search-bar" id="search-bar"  placeholder='Search'/>
            <button> 
                <img src={searchIconBlack} alt="" />
            </button>
        </div>
        
        </>
    )
}