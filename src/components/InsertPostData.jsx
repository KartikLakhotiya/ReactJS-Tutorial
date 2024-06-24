import React, { useState } from 'react'
import axios from 'axios'

const InsertPostData = () => {

    const [userData, setUserData] = useState({
        userid: '',
        title: '',
        body: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", userData)
            .then(res => console.log('Data Posted', res.data))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <input type="text" name="userid" placeholder='Enter User ID' id="" value={userData.userid} onChange={handleChange} />
            <input type="text" name="title" placeholder='Enter Title' id="" value={userData.title} onChange={handleChange} />
            <input type="text" name="body" placeholder='Enter Body' id="" value={userData.body} onChange={handleChange} />
            <input type="submit" name="" id="" onClick={submit} />
        </div>
    )
}

export default InsertPostData