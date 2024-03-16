import React, {useState, useEffect} from 'react'
// import axios from axios

export default function SelectPost(){
    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    const changeHandler =(event)=>{
        setId(
            ()=>(
                id=event.target.value
            )
        )
    }
    useEffect(
        ()=>(
            //componentDidMount
            axios.get(`https://jsonplaceholder.typicode.com/${id}`)
            .then(
                setPost(
                    ()=>(
                        (resposne)=>(
                            post=response.data 
                        )
                    )
                )
            )
            .catch(
                (error)=>(
                    console.log(error)
                )
            )
        ), [id]
    )
    return(
        <React.Fragment>
            <select value={id} onChange={changeHandler}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>

            {
                Object.keys(post).length && <h4>{post.title}</h4> //use shortcrcuit
            }
        </React.Fragment>
    )
}
