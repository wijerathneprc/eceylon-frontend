import { useEffect, useState } from 'react';

import axios from 'axios';
import FormData from 'form-data';

import '../ProductAddPage.css';
import './Configurations.css'
import { SelectImageInput } from './SelectImageInput';


export function Configurations({ productId, setIsShownConfigInput, prodImageList}) {
    const [modelName, setModelName] = useState('')
    const [otherName, setOtherName] = useState('');
    const [releaseDate, setReleaseDate] = useState(null)
    const [price, setPrice] = useState('')
    const [configImg, setConfigImg] = useState('')
    const [isHiddenSelectImageInput, setIsHiddenSelectInput] = useState(true)

    const formData = new FormData()

    const handleSend = async () => {
        formData.append('product', productId)
        formData.append('price', price)
        formData.append('model_name', modelName)
        formData.append('other_name', otherName)
        formData.append('release_date', releaseDate)
        formData.append('image', configImg)

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
    const handleSelectImage = () =>{
        isHiddenSelectImageInput?setIsHiddenSelectInput(false):setIsHiddenSelectInput(true)
    }

    console.log(configImg)
    useEffect(() => {
        // getProductImages()

    }, [])

    return (<>
        <h3 className='prod-config-input-header'> Add a new product configuration </h3>
        <div className='prod-config-input-container'>
            <div className='prod-config-input-info'>
                <div>
                    <label >Model Name: </label>
                    <input type="text" name="model-name" id="" placeholder='model name' onChange={handleModelName} />
                </div>
                <div>
                    <label >Other Name: </label>
                    <input type="text" name="other-name" id="" placeholder='other name' onChange={handleOtherName} />
                </div>
                <div>
                    <label>Release Date: </label>
                    <input type="date" name="release-date" id="" placeholder='release date' onChange={handleDate} />
                </div>
                <div>
                    <label >Price: </label>
                    <input type="text" name="price" id="" onChange={handlePrice} placeholder='base price in $' />
                </div>
                <div>
                    <label>Select a reference image: </label>
                    <input type="button" value="Image" onClick={handleSelectImage} className='prod-config-select-img-btn'/>
                </div>

                <div>
                    <input type="button" value="Submit" onClick={handleSend} className='prod-config-save-btn' />
                </div>
            </div>

            { isHiddenSelectImageInput&&(
               <SelectImageInput prodImageList={prodImageList} setSelectedImg={setConfigImg} />
            ) }


        </div>

    </>)
}