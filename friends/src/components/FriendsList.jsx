import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { CircularProgress } from '@material-ui/core';
import Friend from './Friend';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const [formData, setFormData] = useState({
  name: "",
  age: "",
  email: "",
})

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5001/api/friends`)
      .then(res => {
        console.log(res);
        setFriends(res.data)
        console.log(friends)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const changeHandler = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

  const submit = (e) => {
  e.preventDefault();
  setIsLoading(true);
  setTimeout(() => {
  axiosWithAuth()
    .post(`http://localhost:5001/api/friends`, formData)
    .then((res) => {
      console.log(res.data);
      setFriends(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  setFormData({
    name: "",
    age: "",
    email: "",
  })
  setIsLoading(false);
}, 2000)
}

  if(isLoading) {
    return <CircularProgress/>;
  }

  return (
    <>
  <h2>Add New Friends</h2>
    <form onSubmit={submit}>
      <label htmlFor="name">Name: </label>
      <input 
      type="text" 
      name="name" 
      id="name"
      value={formData.name}
      onChange={changeHandler}
      />
      <br/>

      <label htmlFor="age">Age: </label>
      <input 
      type="age" 
      name="age" 
      id="age"
      value={formData.age}
      onChange={changeHandler}
      />
      <br/>

      <label htmlFor="email">Email: </label>
      <input 
      type="email" 
      name="email" 
      id="email"
      value={formData.email}
      onChange={changeHandler}
      />
      <br/>

      <button>Submit</button>
    </form>

    <h2>My Friends</h2>
    <div>
    {friends.map(friend => {
     return (
       <Friend key={friend.id} data={friend}/>
     )
    })}
    </div>
  </>
  )
}

export default FriendsList;