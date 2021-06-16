import React, { useState } from 'react';
import './AddUserForm.css'

const AddUserForm = props => {


    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [invalidCondition, setInvalidCondition] = useState(false)
    const [invalidClass, setInvalidClass] = useState('')

    const usernameInputHandler = data => {
        setUsername(data.target.value)
    }


    const ageInputHandler = data => {
        setAge(data.target.value)
    }

    const formSubmitHandler = data => {
        data.preventDefault();
        props.onAddUser({ user: username, age: age })
        setUsername('')
        setAge('')
        if (username.length === 0) {
            setInvalidCondition(true)
            setInvalidClass('invalid')
        } else {
            setInvalidClass('')
        }
    }

    return (
        <form onSubmit={formSubmitHandler} className='AddUserForm__form-control'>
            <div>
                <div>
                    <label>Username</label>
                    <input className={invalidCondition && invalidClass} type='text' value={username} onChange={usernameInputHandler}></input>
                </div>
                <div>
                    <label>Age (Years)</label>
                    <input min='1' value={age} type='number' onChange={ageInputHandler}></input>
                </div>
                <div>
                    <button type='submit'>Add User</button>
                </div>
            </div>
        </form>


    );


}

export default AddUserForm;