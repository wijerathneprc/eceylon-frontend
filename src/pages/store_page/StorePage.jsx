
import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import { ProductCard } from '../../components/product_section/ProductCard';
import './StorePage.css';

export function StorePage(){
    const url = "./images/apple/ipad/ipad-11-1.png";
    const price = '$123';
    const name = 'Ipad 11';
    return(
        <>
        <Navbar />
        <div className='store-page'>
            <div className='main-container'>
                <ProductCard name={name} price={price} url={url}/>
                <ProductCard name={name} price={price} url={url}/>
                <ProductCard name={name} price={price} url={url}/>
                <ProductCard name={name} price={price} url={url}/>

            </div>
            <div className='sidebar'>
                sidebar

            </div>

        </div>
        <Footer />
        </>
    )
}