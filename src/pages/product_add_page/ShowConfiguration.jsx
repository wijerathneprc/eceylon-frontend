

import './ShowConfiguration.css'


export function ShowCofiguration({ configs }) {

    return (
        <>
            <div className='show-config-container'>
                <h3> added configurations</h3>
                {configs && configs.map((config) =>
                    <div className='config'>
                        <div>{config.model_name}</div>
                        <div>{config.other_name}</div>
                        <div>{config.release_date}</div>
                        <div>{config.price}</div>
                    </div>
                )}
            </div>
        </>
    )
}