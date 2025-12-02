import { useState } from 'react';

import './ProductAddPage.css';

import { Navbar } from '../../components/navbar/Navbar';
import { IntroduceNewProduct } from './new_product/IntroduceNewProduct';
import { ShowNewProduct } from './new_product/ShowNewProduct';
import { ShowProductImages } from './add_image/ShowProductImages';
import { ShowProductConfigs } from './add_config/ShowProductConfigs';
import { Footer } from '../../components/footer/Footer';

export function ProductAddPage() {
    const [isShownInputProduct, setIsShownInputProduct] = useState(true)
    const [product, setProdcut] = useState({})
    const [prodImageList, setProdImageList] = useState([])
    console.log(prodImageList)
    return (<>
        <Navbar />
        <div className='product-add-page'>
            {isShownInputProduct ?
                (<IntroduceNewProduct product={product} setProduct={setProdcut} setIsShownInputProduct={setIsShownInputProduct} />) :
                (<ShowNewProduct product={product} setIsShownInputProduct={setIsShownInputProduct} />)
            }
            {/* {product.id ? (<ShowNewProduct product={product} />) : (<IntroduceNewProduct setProduct={setProdcut} />)} */}
            {product.id && <ShowProductImages productId={product.id} setProdImageList={setProdImageList} prodImageList={prodImageList} />}
            {product.id && <ShowProductConfigs productId={product.id} setProdImageList={setProdImageList} prodImageList={prodImageList} />}
        </div>
        <Footer />
    </>)
}