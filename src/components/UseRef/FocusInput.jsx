import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null);
    console.log(inputRef)
    const click = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            Username <br />
            <input type="text" name="" id="" ref={inputRef} />
            <button onClick={click}>Click to Focus</button>
        </div>
    )
}

export default FocusInput