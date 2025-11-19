
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import './ProductPage.css';
import { Quantity } from '../../components/quantity/Quantity';
import { Button } from '../../components/button/Button';
import { ColorSelector } from '../../components/color_selector/ColorSelector';
import { Configuration } from '../../components/configuration/Configuration';
import { Specification } from '../../components/specification/Specification';




export function ProductPage() {
    const colors = [{ name: 'green', id: 1 }, { name: 'red', id: 2 }]
    const price = 44340.03;
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti porro veritatis at soluta aliquid.';
    const title = ' Idea Pad Mini';

    const configs = [{ name: 'ram', values: ['4GB', "6GB", "8GB", "12GB"] },
    { name: 'storage', values: ['128GB', "256GB", "512GB", "1TB"] }]

    const specs = [{ id: 1, name: 'Camera', specification: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem, omnis ipsum quos hic tempore nihil ea debitis iste, eligendi laborum facere minus ipsa id dicta doloremque delectus tenetur ab.' },
    { id: 2, name: 'Battery', specification: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem, omnis ipsum quos hic tempore nihil ea debitis iste, eligendi laborum facere minus ipsa id dicta doloremque delectus tenetur ab.' },

    ]

    return (
        <>
            <Navbar />
            <div className='product-page'>

                <div className="product-main-container">
                    <div className="product-image-container">
                        <div className='product-image'>
                            <h2 className='product-name'> {title} </h2>
                            <img src="./images/apple/ipad/ipad-11-1.png" alt="" />
                            <ColorSelector colors={colors} />
                        </div>
                    </div>
                    <div className="detail-container">

                        <div className='price-container'>
                            <Quantity />
                            <h3  > Rs {price} </h3>
                        </div>

                        <div className='buy-add-btn-container'>
                            <Button name='Buy it Now' style='primary-btn' />
                            <Button name='Add to cart' style='secondary-btn' />
                        </div>
                        {/* <p>{description}</p> */}

                    </div>
                    <div className='configuration-container'>
                        <h3> Select Your Configuration </h3>
                        {
                            configs.map((config) => {
                                return (<>
                                    <Configuration key={config.name} name={config.name} values={config.values} />
                                </>)
                            })
                        }
                    </div>
                    <div> {description}</div>
                     <div className='spec-title'> Device Specifications </div>
                   
                    {
                        
                        specs.map((spec) => {
                            console.log(spec)
                            return (<>
                                <Specification key={spec.id} name={spec.name} specification={spec.specification} />
                            </>)
                        })
                    }
                </div>
                <div className="sidebar">
                    SIDEBAR
                </div>
            </div>

            <Footer />
        </>
    )
}