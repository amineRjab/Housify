import React from 'react'
import { useNavigate } from 'react-router';
import Search from './Search.jsx';

function Userposts(props) {

    const navigate=useNavigate()
    const handelclick = ()=>{
        axios.delete(`/api/items/${props.user[0]._id}`).then
        ((result)=>{console.log(result)}).catch((err)=>{console.log(err);})
      }
  return (

    <div>

<div className='allcard'>



<aside>
  <p> Menu </p>
  <a onClick={()=>(navigate("/Profile"))}>
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
  <a onClick={()=> (navigate("/userPosts"))}>
    <i className="fa fa-star-o" aria-hidden="true"></i>
    My all Houses
  </a>
  <a onClick={()=>{handelclick()}} >
    <i className="fa fa-trash-o" aria-hidden="true"></i>
    Delete  account
  </a>
</aside>


    

{ props.data.filter((element)=>(element.user === props.user[0]._id)).map((ele,index)=>{
   
   return (
   
   <div key={index} className="container">
   
        <div className="cardI">
            <figure className="card__thumb">
                <img src={ele.images[0]} alt="Picture by Kyle Cottrell" className="card__image"/>
                <figcaption className="card__caption">
                    <h2 className="card__title">{ele.Adress}</h2>
            <h2 className="card__title">${ele.Price}</h2>
                    <p className="card__snippet">{ele.description}</p>
                    <a href="" className="card__button">Read more</a>
                </figcaption>
            </figure>
        </div>
      </div>
 
   
   )})}
  <p className="disclaimer">with Housify your income will get height until they reach the sky</p>

    </div>
    </div>
   
    
    )
}
   



export default Userposts
