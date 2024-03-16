import React from 'react'

const FRInput = React.forwardRef(
    (props, ref) =>(
        <>
            <input type="text" ref={ref}/>
        </>
    )
)
export default FRInput