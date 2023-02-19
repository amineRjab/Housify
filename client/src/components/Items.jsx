import React from 'react'
import { Navigate, useNavigate } from 'react-router';

function Items(props) {
  const navigate = useNavigate()

console.log(props.user);


  return (
<div className='allcard'>
 <>
 
{props.data.map((ele,index)=>{

return (

<div key={index} className="container">
	<div className="cardI">
		<figure className="card__thumb">
			<img src={ele.images[0]} alt="Picture by Kyle Cottrell" className="card__image"/>
			<figcaption className="card__caption">
				<h2 className="card__title">{ele.Adress}</h2>
        <h2 className="card__title">${ele.Price}</h2>
				<p className="card__snippet">{ele.description}</p>
				<a onClick={()=>(navigate("/SignUp"))} className="card__button">Read more</a>
			</figcaption>
		</figure>
	</div>
  </div>



)




})}
 
 
 
 
 
 </>
</div>
  )}

export default Items