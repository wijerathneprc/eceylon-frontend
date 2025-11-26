import { useEffect, useState } from "react";

import axios from "axios";

import { Button } from "../../../components/button/Button";
import { AddImage } from "./AddImage";

import './ShowProductImages.css';


export function ShowProductImages({ productId, setProdImageList, prodImageList }) {
    const [isShownImgInput, setIsShownImgInput] = useState(false)
    const [imageList, setImageList] = useState([])

    const getProductImages = async () => {
        const response = await axios.get('http://127.0.0.1:8000/estore/image/list', { params: { param: productId } })
        setProdImageList(response.data)
    }

    const handleDelete = async () => {

    }

    const handleAddImage = () => {
        isShownImgInput ? setIsShownImgInput(false) : setIsShownImgInput(true)
    }
  

    useEffect(() => {
        productId && getProductImages()
    }, [isShownImgInput])

    return (<>
        <h3 className="prod-img-galary-heading"> Product Image Galary </h3>
        <div className="prod-img-grid-container">
            {prodImageList.length? (prodImageList.map((img) => (<>
                <div key={img.id} className="prod-img">
                    <img src={img.image} alt="" />
                    <button className="prod-img-delete-btn" onClick={handleDelete}>x</button>
                  
                </div>
            </>))):( '')}
           <div><button className="prod-img-add-btn" onClick={handleAddImage}>+</button></div>
        </div>
        {isShownImgInput && (<AddImage productId={productId} setIsShownImgInput={setIsShownImgInput} />)}
    </>)
}