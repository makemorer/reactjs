import React from 'react'

const ChildComponent = ({greetHandler: g}) => (
    <div>
        <button onClick={()=> g("Ubong")}>child greet</button>
    </div>
)

export default ChildComponent