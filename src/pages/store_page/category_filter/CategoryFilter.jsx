



import { useState, useEffect } from "react"

import axios from "axios"

import './CategoryFilter.css'

export function CategoryFilter() {

    // const formData = new FormData()
    const [categoryList, setCategoryList] = useState([])
    const [show, setShow] = useState(false)
    const [checkedList, setCheckedList] = useState({})
    const getCategoryData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/estore/category/list')
        setCategoryList(response.data)
        // setCheckedList(response.data)
        const brand = response.data.map((brand) => brand.name)
        console.log(brand)
        
    }
    const toggleBrand =()=>{
        show?setShow(false):setShow(true)
        // getBrandData()
    }
    const handleChecked = (event) =>{
        // const id = event.target.id
        const value = event.target.value
        const checked = event.target.checked
        setCheckedList(prevCheckList =>({...prevCheckList, [value]:checked}))
    }
    useEffect(()=>{
        getCategoryData()
    },[])
    console.log(checkedList)
    return (<>
        
        <div className='category-filter-btn'>
            <div onClick={ toggleBrand}> Category </div>
            <hr />
        </div>

        <form className={`brand-filter ${show?'show':'hide'} `}  >
            {categoryList.map((category) => (
                <div className='option-container'>
                    <input type="checkbox" id={category.id} name={category.name} value={category.name} onChange={handleChecked} />
                    <label htmlFor={category.id}>{category.name}</label>
                </div>)
            )}
        </form>
    </>)
}