import { useState } from 'react';

import './ProductAddPage.css';

import { Navbar } from '../../components/navbar/Navbar';
import { IntroduceNewProduct } from './new_product/IntroduceNewProduct';
import { NewProduct } from './new_product/NewProduct';
import { ShowProductImages } from './add_image/ShowProductImages';
import { ShowProductConfigs } from './add_config/ShowProductConfigs';
import { Footer } from '../../components/footer/Footer';

export function ProductAddPage() {
    const [product, setProdcut] = useState({})
    const [prodImageList, setProdImageList] = useState([])
    console.log(prodImageList)
    return (<>
        <Navbar />
        <div className='product-add-page'>
            {product.id ? (<NewProduct product={product} />) : (<IntroduceNewProduct setProduct={setProdcut} />)}
            {product.id && <ShowProductImages productId={product.id} setProdImageList={setProdImageList} prodImageList={prodImageList}/>}
            {product.id && <ShowProductConfigs productId={product.id} setProdImageList={setProdImageList} prodImageList={prodImageList} />}
        </div>
        <Footer />
    </>)
}