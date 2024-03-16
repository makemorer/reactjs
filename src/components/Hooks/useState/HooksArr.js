import React, {useState} from 'react'

const HooksArr = ()=>{
    const [items, setItems] = useState([]) //array of objects

    const addItemHandler = ()=>(
        setItem(
            ()=>(
                [...items, {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }]
            )
        )
    )
    return(
        <>
            <ul>
                {
                    items.map((item, index, array)=><li key={item.id}>{item.value}</li>)
                }
            </ul>
            <button onClick={addItemHandler}>Add Item</button>
        </>
    )
}
export default HooksArr