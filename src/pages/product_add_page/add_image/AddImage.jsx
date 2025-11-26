import { useState, useEffect } from 'react';

import axios from 'axios';
import FormData from 'form-data';

import './AddImage.css'


export function AddImage({ productId, setIsShownImgInput }) {
    const [image, setImage] = useState(null)
    const [color, setColor] = useState('any color')

    const formData = new FormData()

    const handleImageData = async (event) => {
        setImage(event.target.files[0])
    }

    const handleColor = (event) => {
        setColor(event.target.value)
    }

    const handleSend = async () => {
        formData.append('image', image)
        formData.append('product', productId)
        formData.append('color', color)

        const res = await axios.post('http://127.0.0.1:8000/estore/image/', formData)
        console.log(res.data)
        setIsShownImgInput(false)
    }

    useEffect(() => {

    }, [])

    return (<>
        <h3 className="prod-img-input-heading"> Add a new image to product Image Galary </h3>
        <div className='prod-img-input-container'>
            <div>
                <input type="file" accept='image/*' name="" id="" onChange={handleImageData} />
            </div>
            <div>
                <label htmlFor="prod-color-input"> Color representing the product: </label>
                <input id='prod-color-input' type="text" name='prod-color' onChange={handleColor} defaultValue={'Any Color'} />
            </div>
            <button onClick={handleSend} className='prod-img-upload-btn'> Upload </button>
        </div>
        <hr />
    </>)
}