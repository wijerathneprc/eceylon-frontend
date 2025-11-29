

import './Address.css'

export function Address() {
    return (<>
        <div className='profile-address'>
            <p>
                udathula, Kandegedarawatta, Pelmadulla, sambraragamuwa, 70070
            </p>
            <div className='show-address-btn-container'>
                <div>
                    <input type="checkbox" name="default-address" id="default-address" />
                    <label htmlFor="default-address">defualt</label>
                </div>
                <p>|</p>
                <button>edit</button>
                <p>|</p>
                <button>delete</button>
            </div>
        </div>
    </>)
}