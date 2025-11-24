import { useState, useEffect } from 'react';
import axios from 'axios';
import './InputSearchSuggestion.css';


export function AddNewSuggetion({ url, setDataFunc }) {
    const [suggestions, setSuggestions] = useState([]);
    const [hide, setHide] = useState('hide')
    const [targetInputVal, setTargetInputVal] = useState('')


    const fetchSuggetionsData = async () => {
        const response = await axios.get(url, { params: { param: targetInputVal } });
        const data = await response.data;
        setSuggestions(data);
    }

    const handleSearchString = (event) => {
        setTargetInputVal(event.target.value)
        fetchSuggetionsData()
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
        setDataFunc(data)
    }


    useEffect(() => {
        fetchSuggetionsData();

    }, [])


    return (
        <>
            <div className='input-search-suggestion-container'>
                <input type="text"  id='' onChange={handleSearchString} onFocus={hideSuggestions} onBlur={hideSuggestions} placeholder={'category'} value={targetInputVal} />
                <p> add new </p>
                <button> add new</button>
                <p> add others </p>
                <ul id='' className={`suggestions-list ${hide}`} >
                    {
                        suggestions.map((suggestion) => {
                            return (
                                <li id={suggestion.id} key={suggestion.id} onClick={handleSelectedData}>{suggestion.name}</li>
                            )
                        })
                    }
                </ul>

                <button>add new</button>
            </div>
        </>
    )
}