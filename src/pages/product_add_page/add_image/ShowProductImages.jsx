import { useEffect, useState } from "react";

import axios from "axios";

import { Button } from "../../../components/button/Button";
import { AddImage } from "./AddImage";

import './ShowProductImages.css';


export function ShowProductImages({ productId }) {
    const [isShownImgInput, setIsShownImgInput] = useState(false)
    const [imageList, setImageList] = useState([])

    const getProductImages = async () => {
        const response = await axios.get('http://127.0.0.1:8000/estore/image/list', { params: { param: productId } })
        setImageList(response.data)
    }

    const handleDelete = async () => {

    }

    const handleAddImage = () => {
        isShownImgInput ? setIsShownImgInput(false) : setIsShownImgInput(true)
    }

    useEffect(() => {
        productId && getProductImages()
    }, [isShownImgInput])
    console.log('imageList')
    console.log(imageList)
    return (<>
        <div className="product-images">
            {imageList.length && (imageList.map((img) => (<>
                <div key={img.id} className="prod-img">
                    <img src={img.image} alt="" />
                    <Button name={'x'} style={'secondary-btn delete-btn'} handleFunc={handleDelete} />
                </div>
            </>)))}
            <div>
                <Button name={'+'} style={'secondary-btn add-prod-img-btn'} handleFunc={handleAddImage} />
            </div>
        </div>
        {isShownImgInput && (<AddImage productId={productId} setIsShownImgInput={setIsShownImgInput} />)}
    </>)
}