import React, { useState } from 'react'

const CounterHook = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click To Increment</button>
        </div>
    )
}

export default CounterHook