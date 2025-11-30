

import { useState } from 'react';

import FormData from 'form-data';

// import api from '../../../api'

import api from '../../../api'

import './AddNewAddress.css';
import { ACCESS_TOKEN } from "../../../constants";

export function AddNewAddress({ setAddNewAddress, provinceChoices, districtChoices, edit }) {

   

    // const token = localStorage.getItem(ACCESS_TOKEN)
    //         console.log('hello')
    //         console.log(token)

    const [province, setProvince] = useState(edit?edit.province:'')
    console.log(province)
    const [district, setDistrict] = useState(edit?edit.district:'')
    const [city, setCity] = useState(edit?edit.city:'')
    const [line1, setLine1] = useState(edit?edit.street_line_01:'')
    const [line2, setLine2] = useState(edit?edit.street_line_02:'')
    const [postalCode, setPostalCode] = useState(edit?edit.postal_code:'')
   

    const formData = new FormData()

    const handleSubmit = async () => {

        formData.append('province', province)
        formData.append('district', district)
        formData.append('city', city)
        formData.append('street_line_01', line1)
        formData.append('street_line_02', line2)
        formData.append('postal_code', postalCode)
        // formData.append('user', 1)
        console.log('response')

        // const response = await api({method:'OPTIONS', url:'/estore/address'})

        const response = await api.post('/estore/address', formData)
        console.log('response')


        setAddNewAddress(false)
    }

    // console.log(provinceChoices)

    return (<>
        <div className="address-form-container">
            <div className='address-form'>
                <h2> Add a New Address </h2>
                <div>
                    <label htmlFor="">Province</label>
                    {/* <input type="text" name="provice" onChange={e => setProvince(e.target.value)} /> */}
                    <select name="province" onChange={e => setProvince(e.target.value)}>
                        {provinceChoices.map((prov) =><option value={prov.value} selected={prov.value==province}>{prov.display_name}</option>)}
                       
                    </select>
                </div>
                <div>
                    <label htmlFor="">District</label>
                    {/* <input type="text" name="district" onChange={e => setDistrict(e.target.value)} /> */}
                    <select name="district" onChange={e => setDistrict(e.target.value)}>
                        {districtChoices.map((dist) =><option value={dist.value} selected={dist.value==district}>{dist.display_name}</option>)}
                       
                    </select>
                </div>
                <div>
                    <label htmlFor=""> City</label>
                    <input type="text" name="city" onChange={e => setCity(e.target.value)} value={city} />
                </div>
                <div>
                    <label htmlFor="">Address Line 1</label>
                    <input type="text" name="line-1" onChange={e => setLine1(e.target.value)} value={line1}/>

                </div>
                <div>
                    <label htmlFor="">address line 2</label>
                    <input type="text" name="line-2" onChange={e => setLine2(e.target.value)} value={line2}/>
                </div>
                <div>
                    <label htmlFor="">postal code</label>
                    <input type="text" name="postal-code" onChange={e => setPostalCode(e.target.value)} value={postalCode} />
                </div>
                <button className='add-address-submit-btn' onClick={handleSubmit}>submit</button>
                <button className='add-address-close-btn' onClick={() => setAddNewAddress(false)}>X</button>
            </div>
        </div>
    </>)
}