import { useState, useEffect } from 'react';

import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import axios from 'axios';
import './ProductAddPage.css';


export function Category() {
    const [category, setCategory] = useState([]);
    const [hide, setHide] = useState('hide')
    const [newCat, setNewCat] = useState("")
    const [cat, setCat] = useState("")
    console.log(category)

    const getCatData = async (cat) => {
        const response = await axios.get('http://127.0.0.1:8000/estore/category/list', { params: { cat: cat } });
        const data = await response.data;
        setCategory(data);
    }

    const suggestCat = (event) => {
        getCatData(event.target.value);
        setNewCat(event.target.value);

    }

    const hideSug = (event) => {
        if (event.type === 'focus') {
            setHide('show')
        } else {
            setTimeout(() => setHide('hide'), 100);

        }
    }

    const addNewCat = async (event) => {
        event.preventDefault();
        const catDat = { name: newCat }
        const res = await axios.post('http://127.0.0.1:8000/estore/category/', catDat)



        console.log(res);

    }
    const listClick = (event) => {
        console.log(event.target.innerHTML)

    }


    useEffect(() => {

        getCatData('');

    }, [])


    return (<>

        <form className='category-serch-container autocomplete-container' onSubmit={addNewCat}>
            <input type="text" id="myInput" onChange={suggestCat} onFocus={hideSug} onBlur={hideSug} placeholder={cat || 'category'} />
            <button className={`new-category ${category.length && 'hide'}`} type='submit'>
                add new category
            </button>


            <ul id="suggestions" className={`suggestions-list ${hide}`} >
                {
                    category.map((cat) => {
                        return (
                            <li key={cat.id} onClick={listClick}> {cat.name}</li>
                        )
                    })
                }
            </ul>
        </form>
        <ul>
            <li onClick={listClick}> click 1</li>
            <li onClick={listClick}> click 2</li>
        </ul>



    </>)
}

