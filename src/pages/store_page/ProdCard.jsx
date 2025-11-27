

import './ProdCard.css';


export function ProdCard({prod}){

    return(<>
    <div className='prod-card'>
        <div className='prod-image-container'>
            <img src={prod.image&&prod.image.image} alt="" />
        </div>
        <div className='prod-detail-container'>
            <h3 className='prod-name'>{prod.product.name}</h3>
            <div><div>{prod.product.brand}</div> <div>{prod.model_name}</div></div>
            <div> Rs. {prod.price}</div>
            <div className='btn-container'>
                <button className='prod-card-primary-btn'>Add to cart</button>
                <button className='prod-card-secondary-btn'>More options</button>

            </div>
            
        </div>
    </div>
    
    
    </>)
}