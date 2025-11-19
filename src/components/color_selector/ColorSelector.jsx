

import './ColorSelector.css';

export function ColorSelector({ colors }) {

    return (
        <>
            <div className='color-selection-container'>
                {
                    colors.map((color) => {
                        return (
                            <div key={color.id}>
                                <input type="radio" id={color.name} name="fav_language" value="HTML" />
                                <label htmlFor={color.name}>{color.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}