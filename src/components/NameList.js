import React from 'react'
import Person from './Person'
import "./myStyles.css"

//Inline styling
const fontweight = {
    fontWeight: "700"
}

const NameLists = (props) => {
    let className = props.primary ? "txtDecor" : " "
    const persons = [
        "Ubong", "Sunday", "Ubong", "Ukpe"
    ]
    //Person having access to myStyles.css
    const namelist = persons.map((person, index, array) => <Person key={index} person={person} />)
    return <div className={` ${className} txtIt font-xl`}>{namelist}
    <p style={fontweight}>I am</p></div>
}
export default NameLists