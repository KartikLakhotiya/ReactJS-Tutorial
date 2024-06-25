import React, { useState } from 'react'

const Form = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const submit = () => {
        console.log(firstname, lastname)
    }
    return (
        <div>
            Firstname : <input type="text" onChange={(e) => setFirstname(e.target.value)} />
            Lastname : <input type="text" name="" id="" onChange={(e) => setLastname(e.target.value)} />
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default Form