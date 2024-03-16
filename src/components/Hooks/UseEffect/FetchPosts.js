import React, {useState, useEffect} from 'react'
import axios from axios
const FetchPosts ()=>{
    const [posts, setPosts] = useState([])
    useEffect(
        ()=>(
            //componentDidMount
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(
                (res)=>(
                    setPosts(
                        ()=>(
                            posts= res.data
                        )
                    )
                )
            )
            .catch(
                (error)=>(
                    console.log(error)
                )
            )
        ), []
    )
    return(
        <>
            <ul>
                {
                   posts.length ? posts.map((post, index, array)=><li key={post.id}>{post.title}</li>): null
                }
            </ul>
        </>
    )
}
export FetchPosts as default