import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
    }, [])


    return (
        <div>
            List Of Posts
            {
                posts.map((item, index) => {
                    const { id, title, body } = item
                    return (
                        <div>
                            <p>User ID = {id}</p>
                            <p>Title = {title}</p>
                            <p>Body = {body}</p>
                            <p>___________________</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataFetching