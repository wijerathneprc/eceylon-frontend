

import './NewProductInfo.css'

export function NewProduct({ product }) {

    const handleEdit = () => {}
    const handleDelete = () => {}

    return (<>
        <div className="new-prod-basic-info-container">
            <div className="product-name">{product.name}</div>
            
            <div className="product-category">{product.category}</div>
            <div className="product-brand"> {product.brand}</div>
            <hr />
            <div className="product-description">{product.description}</div>
            <div className="product-info-btn-container">
                <button className="edit-btn" onClick={ handleEdit}>Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </>)
}