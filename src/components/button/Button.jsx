
import './Button.css';


export function Button({ name, style, handleFunc }) {

    return (<>
        <button className={style} onClick={handleFunc}>
            {name}
        </button>
    </>)
}