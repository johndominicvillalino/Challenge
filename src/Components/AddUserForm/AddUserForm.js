import React, { useState } from 'react';
import './AddUserForm.css'

const AddUserForm = props => {


    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    const usernameInputHandler = data => {
        setUsername(data.target.value)
    }


    const ageInputHandler = data => {
        setAge(data.target.value)
    }

    const formSubmitHandler = data => {
        data.preventDefault();
           props.onAddUser({user: username,age: age})
        setUsername('')
        setAge('')
    }

    return (
        <form onSubmit={formSubmitHandler} className='AddUserForm__form-control'>
            <div>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={usernameInputHandler}></input>
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