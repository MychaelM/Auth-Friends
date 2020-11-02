import React, { useState } from 'react';

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

  return (
    <>
    <h2>This is the Login Page</h2>
    <form>
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