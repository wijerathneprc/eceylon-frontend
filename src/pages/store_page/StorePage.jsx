import { useEffect, useState } from 'react';

import axios from 'axios';

import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import { ProductCard } from '../../components/product_section/ProductCard';

import './StorePage.css';
import { ProdCard } from './ProdCard';
import { Sidebar } from './SideBar';


export function StorePage(){
    // const [productList, setProductList] = useState([])
    // const [btn, setBtn] =useState(false)
  

    const prod ={
        url: "./images/apple/ipad/ipad-11-1.png",
        name: 'Ipad 11',
        price: 75000,
        description: 'iPad mini has everything there is to love about iPad in a delightfully light, compact design.'
    }

    // const getProductData = async () =>{
    //     const response = await axios.get('http://127.0.0.1:8000/estore/prod/list')
    //     setProductList(response.data)
    //     console.log(response.data.length)
    // }
    // const handleBtn = ()=>{
    //     btn?setBtn(false):setBtn(true)
    // }

    // useEffect(() =>{
    //     getProductData()

    // }, [btn])
    return(
        <>
        <Navbar />
        <div className='store-page'>
            <div className='sidebar-store'>
                <Sidebar />

            </div>
            <div className='main-container-store'>
               <ProdCard prod={prod} />
               <ProdCard prod={prod} />
               <ProdCard prod={prod} />
               <ProdCard prod={prod} />
               <ProdCard prod={prod} />
               <ProdCard prod={prod} />
            </div>
            

        </div>
        <Footer />
        </>
    )
}