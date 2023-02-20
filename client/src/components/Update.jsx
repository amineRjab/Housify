import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';



function update(props) {


	console.log(props.user);

	const navigate = useNavigate()
	const [firstname,Setfirstname]=useState("")
	const [lastname,Setlastname]=useState("")
	const [contact,Setcontact]=useState("")
	const [email,Setemail]=useState("")
	const [password,Setpassword]=useState("")
	const [age,Setage]=useState("")
	const [img,Setimg]=useState("")


	const handelclick = ()=>{
axios.put(`/api/items/${props.user[0]._id}`, {
	FirstName : firstname,
	LastName: lastname,
	Age:age,
	email:email,
	password:password,
	contact:contact
}).then((result)=>{console.log(result);}).catch((err)=>{console.log(err)})}

  return (


	


    <div className='UpdatePage'>


<aside>
  <p> Menu </p>
  <a onClick={()=>(navigate("/profile"))}>
    <i className="fa fa-user-o" aria-hidden="true"></i>
     Profile
  </a>
  <a onClick={()=>{navigate("/addproudect")}}>
    <i className="far fa-edit" aria-hidden="true"></i>
	Sell or Rent house
  </a>
  <a onClick={()=>(navigate("/update"))}>
    <i className="fa fa-clone" aria-hidden="true"></i>
   Update  Profile
  </a>
  <a onClick={()=>(navigate("/userPosts"))}>
    <i className="fa fa-star-o" aria-hidden="true"></i>
    My all houses
  </a>
  <a >
    <i className="fa fa-trash-o" aria-hidden="true"></i>
    Delete  account
  </a>
</aside>



	<div className="containerUpdate">
	<header>
		<h1>
			<a >
				<img src="https://res.cloudinary.com/dsaso2a8g/image/upload/v1676591910/logoC_cscfdg.png" alt="Authentic Collection"/>
			</a>
		</h1>
	</header>
	
	<form className="registration-form">
		<label className="col-one-half">
			<span className="label-text">First Name</span>
			<input onChange={(e)=>(Setfirstname(e.target.value))} type="text" name="firstName" required/>
		</label>
		<label className="col-one-half">
			<span className="label-text">Last Name</span>
			<input  onChange={(e)=>(Setlastname(e.target.value))} type="text" name="lastName" required/>
		</label>
		<label>
			<span className="label-text">Email</span>
			<input onChange={(e)=>(Setemail(e.target.value))} type="text" name="email" required/>
		</label>
		<label>
			<span className="label-text">age</span>
			<input  onChange={(e)=>(Setage(e.target.value))} type="text" name="age" required/>
		</label>
		<label>
			<span className="label-text">contact</span>
			<input  onChange={(e)=>(Setcontact(e.target.value))} type="text" name="contact" required/>
		</label>

		<label className="password">
			<span className="label-text">Password</span>
			<input  onChange={(e)=>(Setpassword(e.target.value))} type="password" name="password" required/>
		</label>
		
		<div className="text-center">
			<button onClick={()=>{handelclick(),navigate("/SignIn") }} className="submit" name="update">Update</button>
			<button onClick={()=>(navigate("/Profile"))} className="submit" name="back">back</button>
		</div>
	</form>


	


</div>
</div>
  )
}

export default update
