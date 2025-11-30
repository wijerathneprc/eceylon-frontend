
import api from '../../../api'
import './Address.css'

export function Address({address}) {

    const handleDelete = async () =>{
        const response = await api.delete(`/estore/address/${address.id}/delete`)
        console.log(response.data)
    }

    const handleEdit =() =>{}

    return (<>
        <div className='profile-address'>
            <p>
                {address.street_line_01}, {address.street_line_02}, {address.city}, {address.district}, {address.province}, {address.postal_code}
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
        </div>
    </>)
}