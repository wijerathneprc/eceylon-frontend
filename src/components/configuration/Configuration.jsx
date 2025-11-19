
import './Configuration.css';

export function Configuration({ name, values }) {

    return (
        <>
            <div className='configuration'>
                <label htmlFor={name}> Select your {name} </label>
                <select name={name} id={name}>
                    {
                        values.map((value) => {
                            console.log(value)
                            return (
                                <option value={value}>{value}</option>
                            )
                        }) 
                    }
                </select>
            </div>
        </>
    )
}