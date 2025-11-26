

import './ProdCard.css';


export function ProdCard({prod}){

    return(<>
    <div className='prod-card'>
        <div className='prod-image-container'>
            <img src={prod.url} alt="" />
        </div>
        <div className='prod-detail-container'>
            <h3 className='prod-name'>{prod.name}</h3>
            <div>{prod.description}</div>
            <div> Rs. {prod.price}</div>
            <div className='btn-container'>
                <button className='prod-card-primary-btn'>Add to cart</button>
                <button className='prod-card-secondary-btn'>More options</button>

            </div>
            
        </div>
    </div>
    
    
    </>)
}