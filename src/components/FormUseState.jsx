// useState with object

import React, { useState } from 'react'

const FormUseState = () => {

    const [name, setName] = useState({
        firstname: "",
        lastname: ""
    })

    return (
        <div>
            <input type="text" value={name.firstname} onChange={e => setName({ ...name, firstname: e.target.value })} />
            <input type="text" name="lastname" value={name.lastname} onChange={e => setName({ ...name, lastname: e.target.value })} />
            <h1>Your Firstname is : {name.firstname}</h1>
            <h1>Your Lastname is : {name.lastname}</h1>
            <p>{JSON.stringify(name)}</p>
        </div>
    )
}

export default FormUseState