import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
function Addproudect(props) {

    const navigate = useNavigate()
    const [price,Setprice]=useState("")
    const [adress,Setadress]=useState("")
    const [type,Settype]=useState("")
    const [fore,Setfore]=useState("")
    const [descreption,Setdescreption]=useState("")
    const[area,Setarea]=useState("")
    const [NbofBeds,SetNbofBeds]=useState("")
    const[NbofBathrooms,SetNbofBathrooms]=useState("")
    const [NbofKitchen,SetNbofKitchen]=useState("")
    const [img, setImg] = useState("")

 
    

 const handelclick = ()=>{
 axios.post(`/api/housify/${props.user[0]._id}`,  {
        Price: price,
        type: type,
        for: fore,
        NbofBeds : NbofBeds,
        NbofBathrooms: NbofBathrooms,
        NbofKitchen: NbofKitchen ,
        Area: area,
        description:descreption,
        Adress:adress,
        images:img
        
      }
     ).then((result)=>{props.setrelod(!relod)}).
     catch((err)=>{console.log(err);});

 }
   
    
  


  return (


    <div  className='UpdatePage'>
      <aside>
  <p> Menu </p>
  <a onClick={()=>(navigate("/profile"))}>
    <i className="fa fa-user-o" aria-hidden="true"></i>
     Profile
  </a>
  <a  onClick={()=>(navigate("/"))} >
    <i  className="far fa-edit" aria-hidden="true"></i>
   Sell or Rent house
  </a>
  <a onClick={()=>(navigate("/Update"))}>
    <i className="fa fa-clone" aria-hidden="true"></i>
   Update your Profile
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

<div className="containerAdd"> 
	<header>
		<h1>
			<a >
				<img src="https://res.cloudinary.com/dsaso2a8g/image/upload/v1676591910/logoC_cscfdg.png" alt="Authentic Collection"/>
			</a>
		</h1>
	</header>
	
	<form className="registration-form">
		<label className="col-one-half">
			<span className="label-text">Adress</span>
			<input onChange={(e)=>{Setadress(e.target.value)}} type="text" name="Adress" />
		</label>
		<label className="col-one-half">
			<span className="label-text">Price</span>
			<input  onChange={(e)=>{Setprice(e.target.value)}} type="text" name="price"/>
		</label>
		<label>
			<span className="label-text">description</span>
			<input  onChange={(e)=>{Setdescreption(e.target.value)}} type="text" name="description"/>
		</label>
		<label>
			<span className="label-text">for</span>
			<input  onChange={(e)=>{Setfore(e.target.value)}} type="text" name="for" />
		</label>
		<label>
			<span className="label-text">Area</span>
			<input  onChange={(e)=>{Setarea(e.target.value)}} type="text" name="area" />
		</label>

        <label>
			<span className="label-text">type</span>
			<input  onChange={(e)=>{Settype(e.target.value)}} type="text" name="type" />
		</label>

        <label>
			<span className="label-text">NbofBeds</span>
			<input  onChange={(e)=>{SetNbofBeds(e.target.value)}} type="text" name="NbofBeds" />
		</label>

        <label>
			<span className="label-text">NbofBathrooms</span>
			<input  onChange={(e)=>{SetNbofBathrooms(e.target.value)}}type="text" name="NbofBathrooms" />
		</label>

        <label>
			<span className="label-text">NbofKitchen</span>
			<input  onChange={(e)=>{SetNbofKitchen(e.target.value)}} type="text" name="NbofKitchen" />
		</label>


		<label >
			<span className="label-text">images</span>
			<input  type="text" name="images" onChange={(e)=>{setImg(e.target.value)}}/>
		</label>
		
		<div className="text-center">
			<button onClick={()=>{ handelclick() }} className="submit" name="add">add</button>
			<button onClick={()=>(navigate("/Profile"))} className="submit" name="back">back</button>
		</div>
	</form>

    </div>
    
    </div>
  )
}

export default Addproudect
