import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Profile from './Profile.jsx'

function Login(props) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [data,setData]=useState([])

   const navigate=useNavigate()

   const handleClick=()=>{
    const filtred=props.users.filter((e)=>{ 
      return e.email===email}
      
    )
    console.log(filtred);
    if(!!filtred.length){
      props.setUsers(filtred)
      
        if(filtred[0].password===password) navigate("/Profile")
             else alert("WrongPass!!!!!")
    }
   else alert("T rawwaa7 signUp")
   }
   

  return (
    <div>
        Email : <input onChange={(e)=>(setEmail(e.target.value))}/>
        password : <input onChange={(e)=>(setPassword(e.target.value))}/>
        <button onClick={handleClick}>logIn!</button>
    </div>
  )
}

export default Login