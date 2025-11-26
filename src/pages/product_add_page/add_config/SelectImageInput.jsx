import { useState } from 'react'

import './SelectImageInput.css'



export function SelectImageInput({ prodImageList, setSelectedImg, }) {
     const [selectedImgId, setSelectedImgId] = useState('')

    const handleSelectImg = (event) => {
        setSelectedImg(event.target.id)
        setSelectedImgId(event.target.id)
    }
    console.log(selectedImgId)

    return (<>
        <div className='prod-config-input-image'>
            <div>Select a reference image </div>
            <hr />
            <div className='select-prod-image'>{prodImageList.length && prodImageList.map((img) => (<div key={img.id} onClick={handleSelectImg} id={img.id}  className={`${(img.id==selectedImgId)?'selected-img':'not-selected-img'}`}>
                <img src={img.image} id={img.id} alt="" />
            </div>))}</div>
        </div>
    </>)
}