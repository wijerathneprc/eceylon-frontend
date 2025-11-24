import { useState, useEffect } from 'react';
import FormData from 'form-data';
import axios from 'axios';

export function AddImage({ productId }) {
    const [image, setImage] = useState(null)
    const [images, setImages] = useState('')
    const arrs = [1,2,3,4,5,6]

    const formData = new FormData()
    const handleImageData = async (event) => {
        setImage(event.target.files[0])
    }
    const handleSend = async () => {
        formData.append('image', image)
        formData.append('product', productId)
        const res = await axios.post('http://127.0.0.1:8000/estore/image/', formData)
        // console.log(res)
        getImages()
    }

    const getImages = async () => {
        const res = await axios.get('http://127.0.0.1:8000/estore/image/list', {params:{param:productId}})
        setImages(res.data)
    }
    useEffect(() => {
        productId&&getImages()

    }, [])
    console.log(images)
    return (
        <>
            <div className='product-images'>
                <div className='show-product-images'>
                    <h3> all the images of {images&&images.length} </h3>

                    { images&&images.map((img) => <img src={img.image} width={'50px'}/>)}

                    
                </div>
                <div className='add-product-images'>
                    <h3> add a new image </h3>
                    <input type="file" accept='image/*' name="" id="" onChange={handleImageData} />
                    <button onClick={handleSend}> add image </button>
                </div>
            </div>
        </>
    )
}