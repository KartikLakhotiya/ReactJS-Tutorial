// basic useEffect

import React, { useEffect, useState } from 'react'

const DocTitleCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count ${count}`
    })


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click to Increment Document Title Count</button>
        </div>
    )
}

export default DocTitleCount