

import './CustomerCard.css';

export function CustomerCard({ customer }) {

    return (<>
        <div className="review-card">
            <img className="customer-image" src={customer.url} alt="" />
            <p>{customer.review}</p>
            <h3> {customer.name}</h3>
            <h3> {customer.location} </h3>
        </div>
    </>)
}
