import { useState } from 'react';

import axios from 'axios';
import FormData from 'form-data';

import {Button} from '../../../components/button/Button'
import { InputSearchSuggetion } from '../InputSeaarchSuggetion';

import './IntroduceNewProduct.css';


export function IntroduceNewProduct({setProduct}){
    const [porductName, setProductName] = useState('')
    const [selectedCategory, setSelectedCategory] = useState({})
    const [selectedBrand, setSelectedBrand] = useState({})
    const [description, setDescription] = useState('')

    const formData = new FormData()


    const saveNewProduct = async () =>{
        const response = await axios.post('http://127.0.0.1:8000/estore/product/', formData)
        setProduct(response.data)
    }

    const handleIntroduce = async () => {
        formData.append('name', porductName)
        formData.append('category', selectedCategory.name)
        formData.append('brand', selectedBrand.name)
        formData.append('description', description)
        saveNewProduct()
    }

    const handleProductName = (event) => {
        setProductName(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    return(<>
        <div className='introduce-new-product'>
            <div className='intro-new-prod-name'>
                <label htmlFor="new-product-name"> Name of the new product introducing in eCEYLON</label>
                <input type="text"id='new-product-name' placeholder='New Product..' onChange={handleProductName}/>
            </div>
            <div className='new-prod-categry'>
                <label htmlFor="" > add a category for the new product</label>
                <InputSearchSuggetion url={'http://127.0.0.1:8000/estore/category/list'} name={'Category'} setFunc={setSelectedCategory} />
            </div>
            <div className='new-prod-brand'>
                <label htmlFor=""> add a brand for the new product</label>
                <InputSearchSuggetion url={'http://127.0.0.1:8000/estore/brand/list'} name={'Brand'} setFunc={setSelectedBrand} />
            </div>
            <div className='new-prod-description'>
                <label htmlFor=""> add a description for the new product</label>
                <textarea onChange={handleDescription}> 
                </textarea>
            </div>
            <Button name={'Introduce'} style={'primary-btn'} handleFunc={handleIntroduce}/>
        </div>
    </>)
}