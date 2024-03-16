import React, {useState} from 'react'
import axios from a
const HooksObj = ()=>{
    const [name, setName] = useState({firstname: "", lastname: ""})
    const firstNameChangeHandler = (event)=>(
        setName(
            () => (
                {
                    ...name, firstname : event.target.value
                }
            )
        )
    )
    const lastNameChangeHandler = (event) =>(
        setName(
            () => (
                {
                    ...name, lastname: event.target.value
                }
            )
        )
    )
    return (
        <>
            <form>
                <input type="text" value={name.firstname} onChange={firstNameChangeHandler}/>
                <input type="text" value={name.lastname} onChange={lastNameChangeHandler}/>
                <h2>Your firstname is - {name.firstname}</h2>
                <h2>Your lastname is - {name.lastname}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </>
    )
}
export default HooksObj