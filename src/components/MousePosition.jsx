// Mouse coordinates using use effect.

import React, { useEffect, useState } from 'react'

const MousePosition = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0)
    const logMousePosition = (e) => {
        console.log(`Mouse Event`)
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log(`useEffect Called`)
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            <h1>X : {x}</h1>
            <h1>Y:{y}</h1>
        </div>
    )
}

export default MousePosition