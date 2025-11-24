
import { useState, useEffect } from 'react';

import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import axios from 'axios';
import './ProductAddPage.css';
import FormData from 'form-data';

import { Configurations } from './Configurations';
import { InputSearchSuggetion } from './InputSeaarchSuggetion';
import { AddNewBrand } from './brand/AddNewBrand';
import { EditBrand } from './brand/EditBrand';
import { AddImage } from './add_image/AddImage';
import { ShowCofiguration } from './ShowConfiguration';



export function ProductAddPage() {
    const [productName, setProductName] = useState('')
    const [brand, setBrand] = useState({});
    const [category, setCategory] = useState({})
    const [product, setProdcut] = useState({})
    const [description, setDescription] = useState('')

    const formData = new FormData()

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleProductName = (event) => {
        setProductName(event.target.value)
    }

    const handleSend = async () => {
        formData.append('brand', brand.name)
        formData.append('category', category.name)
        formData.append('description', description)
        formData.append('name', productName)
        const res = await axios.post('http://127.0.0.1:8000/estore/product/', formData)
        setProdcut(res.data)
    }

    return (
        <>
            <Navbar />
            <div className='product-add-page'>
                <div className='product-basic'>
                    <h2> Introduce a New Product </h2>

                    <div>
                        <label htmlFor="product-name">Name of the Product </label>
                        <input id='product-name' type="text" name='product-name' placeholder='Product Name' onChange={handleProductName} />
                    </div>
                    <div>
                        <label htmlFor="category"> select a category for the product</label>
                        <InputSearchSuggetion url={'http://127.0.0.1:8000/estore/category/list'} setFunc={setCategory} name={'Category'} />

                    </div>
                    <div>
                        <label htmlFor="brand"> select a brand for the product </label>
                        <InputSearchSuggetion url={'http://127.0.0.1:8000/estore/brand/list'} setFunc={setBrand} name={'Brand'} />
                    </div>


                    <div>
                        <label htmlFor="description">give a little description of the product</label>
                        <textarea name='description' onChange={handleDescription}></textarea>
                    </div>

                    <button onClick={handleSend}> Submit </button>
                </div>
                <div className='product-images'>

                    <AddImage productId={product.id} />

                </div>

                <div className='product-configs'>
                    <ShowCofiguration productId={product.id} />
                    <Configurations productId={product.id} />
                </div>
                <div>
                    <button> add a new {'product'} configuration </button>
                </div>
            </div>
            <Footer />
        </>
    )
}