

import './ProductCard.css';

export function ProductCard({ name, price, url }) {

    return (
        <>
            <div className="product-card">
                <img src={url} alt="Product 1" />
                <h3>{name}</h3>
                <p>{price}</p>
                <a className="buy-now-button" href="#">Buy Now</a>
            </div>

        </>
    )
}