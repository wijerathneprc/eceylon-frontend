import { useEffect, useState } from 'react';

import axios from 'axios';
import FormData from 'form-data';

import '../ProductAddPage.css';
import './Configurations.css'


export function Configurations({ productId, setIsShownConfigInput }) {
    const [modelName, setModelName] = useState('')
    const [otherName, setOtherName] = useState('');
    const [releaseDate, setReleaseDate] = useState(null)
    const [price, setPrice] = useState('')


    const formData = new FormData()

    const handleSend = async () => {
        formData.append('product', productId)
        formData.append('price', price)
        formData.append('model_name', modelName)
        formData.append('other_name', otherName)
        formData.append('release_date', releaseDate)
   
        const res = await axios.post('http://127.0.0.1:8000/estore/config', formData)
        console.log(res.data)
        setIsShownConfigInput(false)
    }

    const handleModelName = (event) => {
        setModelName(event.target.value)
    }

    const handleOtherName = (event) => {
        setOtherName(event.target.value)
    }

    const handleDate = (event) => {
        setReleaseDate(event.target.value)
    }

    const handlePrice = (event) => {
        setPrice(event.target.value)
    }

    useEffect(()=>{

    },[])

    return (<>
        <h3> configurations of {'Product'}</h3>
        <div className='product-config'>
            <div>
                <input type="text" name="model-name" id="" placeholder='model name' onChange={handleModelName} />
            </div>
            <div>
                <input type="text" name="other-name" id="" placeholder='other name' onChange={handleOtherName} />
            </div>
            <div>
                <input type="date" name="release-date" id="" placeholder='release date' onChange={handleDate} />
            </div>
            <div>
                <input type="text" name="price" id="" onChange={handlePrice} placeholder='base price in $' />
            </div>
            <div>
                <button onClick={handleSend}> submit</button>
            </div>

        </div>

    </>)
}