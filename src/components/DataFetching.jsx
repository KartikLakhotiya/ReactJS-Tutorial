import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idBtnClick, setIdBtnClick] = useState(1);

    const handleClick = () => {
        setIdBtnClick(id);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/post/${idBtnClick}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
    }, [idBtnClick])


    return (
        <div>
            <input type="text" name="" id="" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
            List Of Posts
            {/* {
                post.map((item, index) => {
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
            } */}
        </div>
    )
}

export default DataFetching