import { useState, useEffect } from 'react';
import axios from 'axios';
import './InputSearchSuggestion.css';


function AddNew({ name }) {
    return (<>
        <div className={'add-new'}>
            <h3> add new data</h3>
            <input type="text" name='brand' placeholder={name} />
            <button> add new </button>
        </div>
    </>)
}

function Edit({ name }) {
    return (<>
        <div className={'edit'}>
            <h3> Edit </h3>
            <input type="text" name='brand' placeholder={name} />
        </div>
    </>)
}


export function InputSearchSuggetion({ url, name, setFunc }) {
    const [initialSugList, setInitialSugList] = useState([]);   //Initial Suggestion List
    const [sugList, setSugList] = useState([]);                 // Suggestion List for input query 
    const [hide, setHide] = useState('hide');
    const [targetInputVal, setTargetInputVal] = useState('');

    const fetchSuggetionsData = async () => {
        const response = await axios.get(url);
        const data = await response.data;
        setInitialSugList(data);
        setSugList(data);   //don't use initialSugList. it still has tha value of function clouser for the 'fetchSuggetionsData' 
    }

    const handleSearchString = async (event) => {
        const data = initialSugList.filter((sug) => sug.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
        setSugList(data)
        setTargetInputVal(event.target.value)
    }

    const hideSuggestions = (event) => {
        if (event.type === 'focus') {
            setHide('show')
        } else {
            setTimeout(() => setHide('hide'), 100);
        }
    }

    const handleSelectedData = (event) => {
        const data = {
            id: event.target.id,
            name: event.target.innerHTML,
        }
        setTargetInputVal(data.name)
        setFunc(data)
    }

    useEffect(() => {
        fetchSuggetionsData();
    }, [])

    return (<>
        <div className='input-search-suggestion-container'>
            <input type="text" id='' onChange={handleSearchString} onFocus={hideSuggestions} onBlur={hideSuggestions} placeholder={name} value={targetInputVal} />
            <ul id='' className={`suggestions-list ${hide}`} >
                {sugList.map((sug) => (<li id={sug.id} key={sug.id} onClick={handleSelectedData}>{sug.name}</li>))}
            </ul>
        </div>
    </>)
}

