import { useState, useEffect } from 'react';
import axios from 'axios';
import './InputSearchSuggestion.css';
import { Link } from 'react-router';


export function InputSearchSuggetion({ url, name, setFunc,value }) {

    const [initialSugList, setInitialSugList] = useState([]);   //Initial Suggestion List
    const [sugList, setSugList] = useState([]);                 // Suggestion List for input query 
    const [isShownSuggetionList, setIsShownSuggetionList] = useState(false);
    const [targetInputVal, setTargetInputVal] = useState(value?value:'');
    console.log(value)  

    const fetchSuggetionsData = async () => {
        const response = await axios.get(url);
        const data = await response.data;
        setInitialSugList(data);
        setSugList(data);   //don't use initialSugList. it still has tha value of function clouser for the 'fetchSuggetionsData' 
    }

    const handleSearchString = (event) => {

        const data = initialSugList.filter((sug) => sug.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
        setSugList(data)
        setTargetInputVal(event.target.value)
    }

    const hideSuggestions = (event) => {
        (event.type === 'focus') ?
        setIsShownSuggetionList(true) :
        (setTimeout(() => setIsShownSuggetionList(false), 300))
    }

    const handleSelectedData = (event) => {
        const data = {
            id: event.target.id,
            name: event.target.innerHTML,
        }
        setSugList(Array(data))
        setTargetInputVal(event.target.innerHTML)
        setFunc(data)
    }

    useEffect(() => {
        fetchSuggetionsData();
    }, [])

    return (<>
        <div className='search-select-option-container'>
            <label htmlFor={`${name}-search-select`}>{`${name}:`}</label>
            <input type="text" id={`${name}-search-select`} onChange={handleSearchString} onFocus={hideSuggestions} onBlur={hideSuggestions} placeholder={`Select ${name}`} value={targetInputVal} />

            {isShownSuggetionList ?
                (<ul className='suggestion-list' >
                    {sugList.map((sug) => (<li id={sug.id} key={sug.id} onClick={handleSelectedData}>{sug.name}</li>))}
                </ul>) : null
            }

            {sugList.length < 1 && <p>For adding a new {name.toLowerCase()}, please visit the <Link to={'/' + name}>{name.toLowerCase() + ' page'}</Link>.</p>}
            {sugList.length === 1 && <p>For editing or deleting exitsting {name.toLowerCase()}, please visit <Link to={'/' + name}>{name.toLowerCase() + ' page'}</Link>.</p>}
        </div>

    </>)
}

