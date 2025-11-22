
import { useState, useEffect } from 'react';

import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import axios from 'axios';
import './ProductAddPage.css';
import FormData from 'form-data';

// import { FormData } from 'form-data'


import { Category } from './Category';
import { Configurations } from './Configurations';



export function ProductAddPage() {
    const [productName, setProductName] = useState('')
    const [brand, setBrand] = useState({});
    const [category, setCategory] = useState({})
    const [image, setImage] = useState(null)
    const [releaseDate, setReleaseDate] = useState(null)
    const [description, setDescription] = useState('')
    const [basePrice, setBasePrice] = useState(0)
    const formData = new FormData()
    
    const handleImageData = async (event) =>{
        setImage(event.target.files[0])  
    }
    const handleDescription = (event) =>{
        setDescription(event.target.value)
    }
    const handelPrice = (event) =>{
        setBasePrice(event.target.value)
    }

    const handleProductName = (event) =>{
        setProductName(event.target.value)
    }
    const handleDate = (event)=>{
        setReleaseDate(event.target.value)
    }

    const handleSend = async () =>{
        formData.append('image', image)
        formData.append('brand', brand.name)
        formData.append('category', category.name)
        formData.append('base_price', basePrice)
        formData.append('description', description)
        formData.append('name', productName)
        formData.append('release_date', releaseDate)
        
         const res = await axios.post('http://127.0.0.1:8000/estore/product/', formData)
         console.log(formData)
    
        
    }
    return (
        <>
            <Navbar />
            <div className='product-add-page'>

                <h2> Add a New Product </h2>


                <div>
                    <label htmlFor="product-name">Name of the Product </label>
                    <input id='product-name' type="text" name='product-name' placeholder='Product Name' onChange={handleProductName} />
                
                </div>
                
                <Category url={'http://127.0.0.1:8000/estore/category/list'}  setFunc={setCategory}  />

                <Category url={'http://127.0.0.1:8000/estore/brand/list'} setFunc={setBrand} />
                <form>
                    <input type="file" accept='image/*' name="" id="" onChange={handleImageData} />
                </form>
                <div>
                    <input type="date" name="release-date" id="" onChange={handleDate} />
                </div>
                <div>
                    <textarea onChange={handleDescription}></textarea>
                </div>
                <div> <input type="text" name="base-price" id=""  placeholder='base price in $' onChange={handelPrice} /></div>
                <button onClick={handleSend}> submit </button>
            </div>
            <Configurations />
            <Footer />
        </>
    )
}