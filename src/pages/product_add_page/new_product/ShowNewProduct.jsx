
import axios from 'axios'

import './ShowNewProduct.css'

export function ShowNewProduct({ product, setIsShownInputProduct }) {

    const handleDelete = async () => {
        const response = await axios.delete(`http://127.0.0.1:8000/estore/product/${product.id}/delete`)
        console.log(response.data)
    }

    return (<>
        <div className="show-new-product-container">
            <h1>{product.name}</h1>
            <div className='show-new-product-info'>
                <div className="show-new-product-category">
                    {product.category}
                </div>
                <div className="product-brand">
                    {product.brand}
                </div>
                <div className="product-description">
                    {product.description}
                </div>
            </div>

            <div className="show-new-product-btn">
                <button className="edit-btn" onClick={() => setIsShownInputProduct(true)}>Edit</button>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </>)
}