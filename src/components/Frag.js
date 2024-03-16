import React, {PureComponent, Fragment} from 'react'

class Frag extends PureComponent{
    constructor(props){
        super(props)
    }
    render = () =>{
        const names = ['Ubong', 'Ukpe', 'Sunday']
        const namelist = names.map((name, index, array) => (
            <Fragment key={index}><h4>{name}</h4></Fragment>
        ))
        return(
            <>{namelist}</>
        )
    }
}
export default Frag