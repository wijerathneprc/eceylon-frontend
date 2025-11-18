
import {ProductCard} from './ProductCard';

import './ProductSection.css';

export function ProductSection({title}){
    const url = "./images/apple/ipad/ipad-11-1.png";
    const price = '$123';
    const name = 'Ipad 11';
    
    return(<>
    <div className="product-container prod-discount-container">
        <h2> {title} </h2>
        <div className="product-grid">
            <button className="left-btn" id="left-btn-discount"><img src="/images/icons/arrow-left-red.svg" alt=""/></button>
            <ProductCard name={name} price={price} url={url}/>
            <button className="right-btn" id="right-btn-discount"><img src="images/icons/arrow-right-red.svg"
                    alt=""/></button>
        </div>
    </div>
    
    </>
    )
}
