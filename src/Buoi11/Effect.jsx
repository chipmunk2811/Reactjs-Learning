import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Effect() {
    const [posts, setPosts] = useState([]);
    const fetchData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((result) => { setPosts(result.data) })
    }

    // Chạy như Component Did Mount dùng để chạy API
    useEffect(() => {
        
        console.log("Effect Run")
        fetchData();

        // Tương tự ComponentWillUnmount chạy trước khi component bị hủy
        return ()=>{
            console.log("Return trong Effect Run")
        }
    }, []);

    console.log("Render Run")
    return (
        //Viết API trong render sẽ bị vòng lặp vô tận
        <div className='container'>
            <h1 className='text-center'>Hook-Effect</h1>
            <p>Call API</p>
            <ul>{posts.map(post => {
                return <li key={post.id}>{post.name}</li>
            })}</ul>
        </div>
    )
}

export default Effect