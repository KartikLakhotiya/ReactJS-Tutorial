import React, { useContext } from 'react'
import { CountCOntext } from '../../../App'

const ComponentF = () => {
    const countContext = useContext(CountCOntext);
    return (
        <div>
            <div>
                <h1>Component F</h1>
                
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentF