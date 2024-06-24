// useState with array

import React, { useState } from 'react'

const ArrayUseState = () => {

    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    console.log(items)
    console.log(useState)
    return (
        <div>
            <button onClick={addItem}>Add A Number</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default ArrayUseState