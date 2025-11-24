import FormData from "form-data"
import axios from "axios";
import { useState } from "react";

export function AddNewBrand(){
    const [brand, setBrand] = useState('')

    const formData = new FormData();
    const submitData = async() =>{
        formData.append('name', brand )
        const response = await axios.post('http://127.0.0.1:8000/estore/brand/', formData)
        console.log(response.data) 
    }

    const handleBrandData = (event) =>{
        setBrand(event.target.value)
    }

    return(
        <>
            <div>
                <label htmlFor="new-brand"></label>
                <input type="text" name="brand" id="new-brand" placeholder="add a new brand" onChange={handleBrandData}/>
                <button onClick={submitData}> Submit </button>
            </div>
        </>
    )
}