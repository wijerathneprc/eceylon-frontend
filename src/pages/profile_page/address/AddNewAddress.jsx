import { useState } from 'react';

import FormData from 'form-data';

import api from '../../../api'

import './AddNewAddress.css';

export function AddNewAddress({ setAddNewAddress, provinceChoices, districtChoices, edit }) {

    const [province, setProvince] = useState(edit ? edit.province : '')
    const [district, setDistrict] = useState(edit ? edit.district : '')
    const [city, setCity] = useState(edit ? edit.city : '')
    const [line1, setLine1] = useState(edit ? edit.street_line_01 : '')
    const [line2, setLine2] = useState(edit ? edit.street_line_02 : '')
    const [postalCode, setPostalCode] = useState(edit ? edit.postal_code : '')

    const handleSubmit = async () => {
        const formData = new FormData()

        const createNewAddress = async () => {
            const response = await api.post('/estore/address', formData)
            console.log(response.data)
        }

        const updateAddress = async () => {
            const response = await api.put(`/estore/address/${edit.id}/update`, formData)
            console.log(response.data)
        }

        formData.append('province', province)
        formData.append('district', district)
        formData.append('city', city)
        formData.append('street_line_01', line1)
        formData.append('street_line_02', line2)
        formData.append('postal_code', postalCode)

        edit ? await updateAddress() : await createNewAddress()
        
        setAddNewAddress(false)
    }

    return (<>
        <div className="address-form-container">
            <div className='address-form'>
                <h2> Add a New Address </h2>
                <div>
                    <label htmlFor="">Province</label>
                    <select name="province" onChange={e => setProvince(e.target.value)}>
                        {provinceChoices.map((prov) => <option value={prov.value} selected={prov.value == province}>{prov.display_name}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="">District</label>
                    <select name="district" onChange={e => setDistrict(e.target.value)}>
                        {districtChoices.map((dist) => <option value={dist.value} selected={dist.value == district}>{dist.display_name}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor=""> City</label>
                    <input type="text" name="city" onChange={e => setCity(e.target.value)} value={city} />
                </div>
                <div>
                    <label htmlFor="">Address Line 1</label>
                    <input type="text" name="line-1" onChange={e => setLine1(e.target.value)} value={line1} />

                </div>
                <div>
                    <label htmlFor="">address line 2</label>
                    <input type="text" name="line-2" onChange={e => setLine2(e.target.value)} value={line2} />
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