import React, { useContext } from 'react'
import { CountCOntext } from '../../../App'

const ComponentD = () => {
    const countContext = useContext(CountCOntext);
    return (
        <div>
            <div>
                <h1>Component D</h1>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentD