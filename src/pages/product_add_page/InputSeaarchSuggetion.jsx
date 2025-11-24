import { useState, useEffect } from 'react';
import axios from 'axios';
import './InputSearchSuggestion.css';


export function InputSearchSuggetion({ url,name, setFunc}) {
    const [suggestions, setSuggestions] = useState([]);
    const [hide, setHide] = useState('hide')
    const [targetInputVal, setTargetInputVal] = useState('')
    const [addNewData, setAddNewData] = useState(false)

    const fetchSuggetionsData = async (cal) => {
        const response = await axios.get(url, { params: { param: cal } });
        const data = await response.data;
        setSuggestions(data);
    }

    const handleSearchString = async (event) => {
        setTargetInputVal(event.target.value)
        fetchSuggetionsData(event.target.value)
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
    const handleAddNewData = () => {
        if (addNewData) { setAddNewData(false) }
        else { setAddNewData(true) }
    }


    useEffect(() => {
        fetchSuggetionsData('');

    }, [])


    return (<>
        <div className='input-search-suggestion-container'>
            <input type="text" id='' onChange={handleSearchString} onFocus={hideSuggestions} onBlur={hideSuggestions} placeholder={name} value={targetInputVal} />

            <button className={`${(suggestions.length ? 'hide' : 'show')}`} onClick={handleAddNewData}> add new </button>
            <ul id='' className={`suggestions-list ${hide}`} >
                {
                    suggestions.map((suggestion) => {
                        return (
                            <li id={suggestion.id} key={suggestion.id} onClick={handleSelectedData}>{suggestion.name}</li>
                        )
                    })
                }
            </ul>
            <div className={`add-new ${addNewData ? 'show' : 'hide'}`}>

                <h1> add new data</h1>
                <input type="text" name='brand' placeholder='brand' />

            </div>
        </div>
    </>)
}

