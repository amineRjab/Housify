
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';


function SignUp(props) {

const navigate=useNavigate()
const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:''
})

const handleChange = (event) => {
    console.log(event.target)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
 
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    props.addUser(formData.name,formData.email,formData.password)
    console.log(formData);
    navigate("/login")
  };

  return (
    <div>
   Name: <input type="text" required onChange={handleChange}  name="name" value={formData.name}/> 
   <br/>
   email: <input type="email" required onChange={handleChange}  name="email" value={formData.email}/>
   <br/>
   password: <input type="password" required onChange={handleChange}  name="password" value={formData.password}/>
<button onClick={handleClick}>JoinUS!</button>
    </div>
  )
}

export default SignUp