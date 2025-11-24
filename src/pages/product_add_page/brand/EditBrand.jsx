import FormData from "form-data"
import axios from "axios";
import { useEffect, useState } from "react";
import { InputSearchSuggetion } from "../InputSeaarchSuggetion";

export function EditBrand(){
    const [data, setData] = useState({})

    const formData = new FormData();
    const submitData = async() =>{
        formData.append('name', data['name'] )
        formData.append('id', data['id'] )
        const response = await axios.put(`http://127.0.0.1:8000/estore/brand/${data.id}/update/`, formData)
        console.log(response.data) 
    }

    const handleBrandData = (event) =>{
        const id = data['id']
        setData({id, name:event.target.value})
    }
    return(
        <>
            <div>
                <InputSearchSuggetion url={'http://127.0.0.1:8000/estore/brand/list'} setDataFunc={setData} addNew={true} />
                <label htmlFor="edit-brand"></label>
                <input type="text" name="brand" id="edit-brand" value={data['name']? data['name']:''} onChange={handleBrandData}  />
                <button onClick={submitData}> Submit </button>
            </div>
        </>
    )
}