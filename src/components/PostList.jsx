import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PostList = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        const data = axios.get('https://jsonplaceholder.typicode.com/posts')
        data.then((obj) => {
            console.log(obj.data)
            setPosts(obj.data)
            console.log(posts)
        })

    }

    useEffect(() => {
        fetchPosts();
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

export default PostList