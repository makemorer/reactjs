import React from 'react'

function Person(props){
    return (
        <div>
            <h2 className='bg'> I am {props.person}</h2>
        </div>
    )
}
export default Person