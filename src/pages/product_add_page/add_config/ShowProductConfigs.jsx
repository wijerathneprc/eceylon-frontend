import { useEffect, useState } from 'react';

import axios from 'axios';

import { Configurations } from './Configurations';
import { Button } from '../../../components/button/Button';

import './ShowProductConfigs.css';


export function ShowProductConfigs({productId}){
    const [configList, setConfigList] = useState([])
    const [isShownConfigInput, setIsShownConfigInput] = useState(false)

    const getConfigData = async () =>{
        const response = await axios.get('http://127.0.0.1:8000/estore/config/list', {params:{param:productId}})
        setConfigList(response.data)
    }
    const handleDeleteConfig = () =>{

    }
    const handleAddConfig = () =>{
        isShownConfigInput ? setIsShownConfigInput(false) :setIsShownConfigInput(true)
    }

    useEffect(()=>{
        productId&&getConfigData()
    }, [isShownConfigInput])
   
    
    return (<>
    <div className="product-configurations">
                {configList.length && (configList.map((config) => (<>
                    <div key={config.id} className="prod-config">
                        
                        <div> {config.model_name}</div>
                        <div> {config.other_name}</div>
                        <div> {config.release_date}</div>
                        <div> {config.price} </div>
                        <div> <Button name={'delete'} style={'secondary-btn'} handleFunc={handleDeleteConfig} /> </div>
                    </div>
                </>)))}
                <div>
                    <Button name={'+'} style={'secondary-btn add-prod-img-btn'} handleFunc={handleAddConfig} />
                </div>
            </div>
            {isShownConfigInput && (<Configurations productId={productId} setIsShownConfigInput={setIsShownConfigInput} />)}
    
    
    </>)
}