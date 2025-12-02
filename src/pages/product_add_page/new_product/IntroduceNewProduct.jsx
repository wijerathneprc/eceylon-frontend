import { useState } from 'react';

import axios from 'axios';
import FormData from 'form-data';

import { InputSearchSuggetion } from '../InputSeaarchSuggetion';

import './IntroduceNewProduct.css';


export function IntroduceNewProduct({product, setProduct, setIsShownInputProduct}) {
    const [porductName, setProductName] = useState(product.name?product.name: '')
    const [selectedCategory, setSelectedCategory] = useState(product.category?{name:product.category}:{name:''})
    const [selectedBrand, setSelectedBrand] = useState(product.brand?{name:product.brand}:{name:''})
    const [description, setDescription] = useState(product?product.description:'')

    const formData = new FormData()

    const updateProduct = async () => {
        // console.log(formData.get('name'))
        // console.log(formData.get('category'))
        // console.log(formData.get('brand '))
        // console.log(formData.get('description'))
        const response = await axios.put(`http://127.0.0.1:8000/estore/product/${product.id}/update`, formData)
        setProduct(response.data)
        setIsShownInputProduct(false)
    }
    const saveNewProduct = async () => {
        const response = await axios.post('http://127.0.0.1:8000/estore/product', formData)
        setProduct(response.data)
         setIsShownInputProduct(false)
        
    } 


    const handleIntroduce = async () => {
        formData.append('name', porductName)
        formData.append('category', selectedCategory.name)
        formData.append('brand', selectedBrand.name)
        formData.append('description', description)

            console.log(formData.get('category'))
        console.log(formData.get('brand '))
        product.id ? await updateProduct() : await saveNewProduct()
    }

    const handleProductName = (event) => {setProductName(event.target.value)}

    const handleDescription = (event) => { setDescription(event.target.value) }


    return (<>
        <div className='introduce-new-product'>
            <h1> Introducing a New Product</h1>
            <div className='new-prod-basic-info'>
                <div className='intro-new-prod-name'>
                    <label htmlFor="new-product-name"> Name: </label>
                    <input type="text" id='new-product-name' placeholder='New Product..' onChange={handleProductName} value={porductName} />
                </div>

                <InputSearchSuggetion url={'http://127.0.0.1:8000/estore/category/list'} name={'Category'} setFunc={setSelectedCategory} value={selectedCategory.name} />

                <InputSearchSuggetion url={'http://127.0.0.1:8000/estore/brand/list'} name={'Brand'} setFunc={setSelectedBrand} value={selectedBrand.name}/>

                <div className='new-prod-description'>
                    <label htmlFor=""> Add a description for the new product: </label>
                    <textarea onChange={handleDescription} value={description}> 
                    </textarea>
                </div>
                <button className='new-prod-intro-btn' type="button" onClick={handleIntroduce}>
                    {product.id ? 'Update Product Info' : 'Introduce New Product'}
                </button>
            </div>
        </div>

    </>)
}