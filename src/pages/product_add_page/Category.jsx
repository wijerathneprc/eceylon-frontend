import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductAddPage.css';


export function Category({url, setFunc}) {
    const [suggetions, setSuggetions] = useState([]);
    const [hide, setHide] = useState('hide')
    const [selection, setSelection] = useState("")
    const [targetVal, setTargetVal] = useState('')
   

    const fetchSuggetionsData = async (searchString) => {
        const response = await axios.get(url, { params: { param: searchString } });
        const data = await response.data;
        setSuggetions(data);
    }

    const handleSearchString = (event) => {
        // console.log(event.target.value)
        setTargetVal(event.target.value)
        fetchSuggetionsData(event.target.value);
    }

    const hideSug = (event) => {
        if (event.type === 'focus') {
            setHide('show')
        } else {
            setTimeout(() => setHide('hide'), 100);
        }
    }

    const handleSelectSuggestion = (event) => {
        

        const data = {
            id: event.target.id,
            name:event.target.innerHTML,
        }
        // console.log(data)
        setFunc(data)
        setSelection(event.target.innerHTML);
        setTargetVal(data.name)
    }


    useEffect(() => {
        fetchSuggetionsData('');

    }, [])


    return (<>

        <form className='input-serch-container '>
            <input type="text" id="myInput" onChange={handleSearchString} onFocus={hideSug} onBlur={hideSug} placeholder={selection || 'category'} value={targetVal}/>
            <ul id="suggestions" className={`suggestions-list ${hide}`} >
                {
                    suggetions.map((suggestion) => {
                        return (
                            <li id={suggestion.id} key={suggestion.id} onClick={handleSelectSuggestion}>{suggestion.name}</li>
                        )
                    })
                }
            </ul>
        </form>
       
    </>)
}

