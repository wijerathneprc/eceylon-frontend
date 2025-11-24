import { useState, useEffect } from 'react';

import axios from 'axios';
import FormData from 'form-data';


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
        // productId&&getImages()

    }, [])

    return (<>
        <div className='add-product-images'>
            <h3> add a new image </h3>
            <div>
                <input type="file" accept='image/*' name="" id="" onChange={handleImageData} />
            </div>
            <div>
                <label htmlFor="color"> color representing the product </label>
                <input type="text" name='product-color' onChange={handleColor} />
            </div>
            <button onClick={handleSend}> add image </button>
        </div>
    </>)
}