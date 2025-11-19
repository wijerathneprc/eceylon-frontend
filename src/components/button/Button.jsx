

import './Button.css';


export function Button({ name, style}) {

    return (
        <>
            <button className={style}>
                {name}
            </button>

        </>
    )
}