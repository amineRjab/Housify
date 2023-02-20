import { Key } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';




function Profile(props) {

  const navigate = useNavigate()
const [Details,SetDetails]=useState(true)
const [idd,Setidd]=useState("")



  const handelclick = ()=>{
	axios.delete(`http://localhost:3000/api/housify/${props.user[0]._id}`).then
	((result)=>{console.log(result)}).catch((err)=>{console.log(err);})
  }
  
  return (

<div>
  
    {Details && <> <div> 

   <div className='allprofiles'>



<aside>
  <p> Menu </p>
  <a onClick={()=>(navigate())}>
    <i className="fa fa-user-o" aria-hidden="true"></i>
    Profile
  </a>
  <a onClick={()=>(navigate("/addproudect"))} >
    <i  className="far fa-edit" aria-hidden="true"></i>
    A Sell or Rent house
  </a>
  <a onClick={()=>(navigate("/Update"))} >
    <i className="fa fa-clone" aria-hidden="true"></i>
   Update  Profile
  </a>
  <a onClick={()=> (navigate("/userPosts"))}>
    <i className="fa fa-star-o" aria-hidden="true"></i>
   My all houses
  </a>
  <a onClick={()=>{handelclick()}} >
    <i className="fa fa-trash-o" aria-hidden="true"></i>
    Delete account
  </a>
</aside>


    

{ props.data.map((ele,index)=>{
   
   return (
   
   <div key={index} className="container">
       <div className="cardI">
           <figure className="card__thumb">
               <img src={ele.images[0]} alt="" className="card__image"/>
               <figcaption className="card__caption">
                   <h2 className="card__title">{ele.Adress}</h2>
           <h2 className="card__title">${ele.Price}</h2>
                   <p className="card__snippet">{ele.description}</p>
                   <a onClick={()=>{ SetDetails(!Details) , Setidd(ele._id) ;
                      }} className="card__button">Read more</a>
               </figcaption>
           </figure>
       </div>
     </div> 

 
   
   )})}
  <p className="disclaimer">with Housify your income will got height initul they reach the sky </p>

    </div>
    </div></>}


{!Details && <> <div>
  <div className='allprofiles'>
  
  
  <aside>
  <p> Menu </p>
  <a  onClick={()=>{SetDetails(!Details)}}>
    <i className="fa fa-user-o" aria-hidden="true"></i>
     Profile
  </a>
  <a onClick={()=>(navigate("/addproudect"))} >
    <i  className="far fa-edit" aria-hidden="true"></i>
    Sell or Rent house
  </a>
  <a onClick={()=>(navigate("/Update"))} >
    <i className="fa fa-clone" aria-hidden="true"></i>
   Update  Profile
  </a>
  <a onClick={()=>{navigate("/userPosts")}}>
    <i className="fa fa-star-o" aria-hidden="true"></i>
    My House
  </a>
  <a onClick={()=>{handelclick()}} >
    <i className="fa fa-trash-o" aria-hidden="true"></i>
    Delete  account
  </a>
</aside>
  
 
 
{props.data.filter((element)=> ( element._id === idd)).map((element,index)=> {
  return (
   
  <>
  <div key={index} className='detailcards'>
  {element.images.map((ele,index)=>{ return (
 <img key={index} src= {ele} alt="" />

  )})}
<h5 >{element.type}</h5>
<h2>{element.Adress}</h2>
<p>{element.description}</p>
<h4>{element.for}</h4>
<h3>NbofBeds : {element.NbofBeds}</h3>
<h3> NbofBathrooms : {element.NbofBathrooms}</h3>
<h3> NbofKitchen : {element.NbofKitchen}</h3>
<h4 id='h4' >{element.Area}m2</h4>
<h4 id='h4P'>${element.Price}</h4>
<button onClick={()=>(navigate("/aganse"))}>Sell</button>
<button>Rent</button>

  </div></>)})}
  
</div> </div></>}


    </div>
  )
}

export default Profile
