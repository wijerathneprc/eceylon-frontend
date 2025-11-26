import { useState, useEffect } from "react"

import axios from "axios"

export function BrandFilter() {

    // const formData = new FormData()
    const [brandList, setBrandList] = useState([])
    const [show, setShow] = useState(false)
    const [checkedList, setCheckedList] = useState({})
    const getBrandData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/estore/brand/list')
        setBrandList(response.data)
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
        getBrandData()
    },[])
    console.log(checkedList)
    return (<>
        
        <div className='brand-filter-btn'>
            <div onClick={ toggleBrand}> Brands </div>
            <hr />
        </div>

        <form className={`brand-filter ${show?'show':'hide'} `}  >
            {brandList.map((brand) => (
                <div className='option-container'>
                    <input type="checkbox" id={brand.id} name={brand.name} value={brand.name} onChange={handleChecked} />
                    <label htmlFor={brand.id}>{brand.name}</label>
                </div>)
            )}
        </form>
    </>)
}