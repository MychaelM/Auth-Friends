import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5001/api/login`, { username: 'Lambda School', password: 'i<3Lambd4' })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
    <h2>This is the Login Page</h2>
    <form onSubmit={login}>
      <label htmlFor="username">Username: </label>
      <input 
      type="text" 
      name="username" 
      id="username"
      value={formData.username}
      onChange={changeHandler}
      />
      <br/>

      <label htmlFor="password">Password: </label>
      <input 
      type="password" 
      name="password" 
      id="password"
      value={formData.password}
      onChange={changeHandler}
      />
      <br/>

      <button>Submit</button>
    </form>
    </>
  )
}

export default Login;