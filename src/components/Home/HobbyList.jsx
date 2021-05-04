import React from 'react'
import './HobbyList.css'
function HobbyList(props) {
    const {hobbyList}  = props
    return (
        <div className="hobbyListItem">
            <h3>Hobby List</h3>
            {
                hobbyList.map(hobby => (
                    <li key={hobby.id}>{hobby.title}</li>
                ))
            }
        </div>
    )
}

export default HobbyList

