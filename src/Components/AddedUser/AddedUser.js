import React, { useState } from 'react';
import './AddedUser.css'

const AddedUser = props => {

    const usersArray = props.addedUsers;

    return (

        <ul>
            {usersArray.map(data => {
               return <li 
               key={data.key} 
               id={data.key}>
                    {data.user + ' ' + data.age} 
                </li>
            })}
        </ul>
    )

}

export default AddedUser