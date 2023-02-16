import React from 'react'
import {useNavigate} from "react-router-dom"
import Search from './Search.jsx'
import Sliders from './Sliders.jsx'
const Home = (props) => {
// const navigate= useNavigate()

// const hand=()=>{
//   navigate("/about")
// }



  return (
    <div>
     <div className='home'></div>
     <Sliders />
    <Search search={props.search}/>
    
    </div>
   
  )
}

export default Home