import { CustomerCard } from './CustomerCard';
import './CustomerSection.css';

export function CustomerSection() {
    const review = '"Wide range of products and competitive prices. I found exactly what I was looking for!"';
    const name = 'Nadeesha Silva';
    const location = 'Colombo';
    const url = 'images/customers/person-2.jpg'
    const customer = { review, location, url, name}

    return (

        <>
            <div className="customer-review-container">
                <h2> Customer Reviews </h2>
                <div className="customer-grid">
                    <button className="left-btn" id="left-btn-customer"><img src="/images/icons/arrow-left-red.svg" alt="" /></button>

                    <CustomerCard customer = {customer} />
                    
                    
                    <button className="right-btn" id="right-btn-customer"><img src="images/icons/arrow-right-red.svg"
                        alt="" /></button>
                </div>



            </div>


        </>
    )
}