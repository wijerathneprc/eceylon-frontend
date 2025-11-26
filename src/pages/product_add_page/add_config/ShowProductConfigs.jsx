import { useEffect, useState } from 'react';

import axios from 'axios';

import { Configurations } from './Configurations';
import { Button } from '../../../components/button/Button';

import './ShowProductConfigs.css';


export function ShowProductConfigs({ productId, prodImageList }) {
    const [configList, setConfigList] = useState([])
    const [isShownConfigInput, setIsShownConfigInput] = useState(false)

    const getConfigData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/estore/config/list', { params: { param: productId } })
        setConfigList(response.data)
    }
    const handleDeleteConfig = () => {

    }
    const handleEditConfig = () => {}
    const handleAddConfig = () => {
        isShownConfigInput ? setIsShownConfigInput(false) : setIsShownConfigInput(true)
    }

    useEffect(() => {
        productId && getConfigData()
    }, [isShownConfigInput])
    console.log(prodImageList)
    console.log(configList.map((config) => console.log(config)))
    return (<>
        <h3 className='prod-config-heading'> Product configurations</h3>
        <div className="prod-config-grid">
            {configList.length ? (configList.map((config) => (<>
                <div key={config.id} className="prod-config-container">
                    <div className='prod-config-img'>
                        <img src={(prodImageList.filter((img) => img.id === config.image))[0].image} lt="" />
                    </div>
                    <div className='prod-config-info'>
                        <div> Model: {config.model_name}</div>
                        <div> Other Name: {config.other_name}</div>
                        <div> Release Date: {config.release_date}</div>
                        <div> Price: {config.price} </div>
                        <div className='prod-config-btn-container'> 
                            <button className='edit-btn' onClick={handleEditConfig}>Edit</button>
                            <button className='delete-btn' onClick={handleDeleteConfig}>Delete</button>
                        </div>
                    </div>
                </div>
            </>))) : ('')}
            <div className='prod-config-add-btn-container'>
                <button className='prod-config-add-btn' onClick={handleAddConfig}>+</button>
            </div>
        </div>
        {isShownConfigInput && (<Configurations productId={productId} setIsShownConfigInput={setIsShownConfigInput} />)}


    </>)
}