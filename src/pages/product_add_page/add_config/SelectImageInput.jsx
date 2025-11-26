

import './SelectImageInput.css'



export function SelectImageInput({ prodImageList, setSelectedImg }) {
    //  const [selectedImg, setSelectedImg] = useState('')

    const handleSelectImg = (event) => {
        setSelectedImg(event.target.id)
        console.log(event.target.id)
    }

    return (<>
        <div className='prod-config-input-image'>
            <div>Select a reference image: </div>
            <div className='select-prod-image'>{prodImageList.length && prodImageList.map((img) => (<div key={img.id} onClick={handleSelectImg} id={img.id}>
                <img src={img.image} id={img.id} alt="" />
            </div>))}</div>
        </div>
    </>)
}