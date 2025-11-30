
import api from '../../../api'
import { AddNewAddress } from './AddNewAddress'
import { useState } from 'react'
import './Address.css'

export function Address({address, setAddressList, provinceChoices, districtChoices}) {
    const [addNewAddress, setAddNewAddress] = useState(false)

    const handleDelete = async () =>{
        const response = await api.delete(`/estore/address/${address.id}/delete`)
        console.log(response.data)

        setAddressList((prevList) => prevList.filter( (list)=> list.id!=address.id) )
    }
    console.log(address.id)

    const handleEdit =() =>{addNewAddress ? setAddNewAddress(false) : setAddNewAddress(true)}

    return (<>
        <div className='profile-address'>
            <p>
                {address.street_line_01}, {address.street_line_02}, {address.city}, {address.district_display}, {address.province_display}, {address.postal_code}
            </p>
            <div className='show-address-btn-container'>
                <div>
                    <input type="checkbox" name="default-address" id={address.id} />
                    <label htmlFor={address.id}>defualt</label>
                </div>
                <p>|</p>
                <button onClick={handleEdit}>edit</button>
                <p>|</p>
                <button onClick={handleDelete}>delete</button>
            </div>
            {addNewAddress ? <AddNewAddress setAddNewAddress={setAddNewAddress} provinceChoices={provinceChoices} districtChoices={districtChoices} edit={address}/> : null}
        </div>
    </>)
}