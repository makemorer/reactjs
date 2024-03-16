import React from 'react'
import ReactDOM from 'react-dom'

const PortalOne=()=>(
        ReactDOM.createPortal(
        (()=>(
            <React.Fragment>
                <h3>I am Ubong</h3>
            </React.Fragment>
        ))(), document.getElementById('portal1')
    )
)
export default PortalOne