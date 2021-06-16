import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import AddUserForm from './Components/AddUserForm/AddUserForm';
import AddedUser from './Components/AddedUser/AddedUser'

function App() {

  const sampleData = [{
    user: 'John',
    age: 20,
    key: 'k10'
  },]

  const [users, setUsers] = useState(sampleData);

  const onAddUserHandler = usersData => {

    if (usersData.user.length === 0) {
      return;
    }

    setUsers(prevData => {
      const updatedUsers = [...prevData]
      updatedUsers.unshift({ user: usersData.user, age: usersData.age, key: Math.random().toString() })
      return updatedUsers
    })

    console.log(users)

  }

  return (
    <div>
      <section id='addUser-form'>
        <AddUserForm onAddUser={onAddUserHandler} />
      </section>

      <section id='addedUser-list'>
        <AddedUser addedUsers={users} />
      </section>
    </div>
  );
}

export default App;
