

import './Specification.css';

export function Specification({ name, specification }) {

    return (
        <>
            <div className='spec-container'>
                <div className='spec-name'>
                    {name}
                </div>
                <div className='spec-description'>
                    {specification}
                </div>
            </div>
        </>
    )

}