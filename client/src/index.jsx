import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import { BrowserRouter, Link, Route, Routes ,Switch} from 'react-router-dom'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Items from './components/Items.jsx'
import axios from 'axios'
import Profile from './components/Profile.jsx'


const App = () => {
  const [users,setUsers]=useState([])
  const [upd,setUpd]=useState(false)
  const [items,setItems]=useState([])

  useEffect(()=>{
axios.get("/api/users")
.then((res)=>(setUsers(res.data)))
.catch((err)=>(console.log(err)))
  },[upd])

  useEffect(()=>{
    axios.get("/api/housify")
    .then((res)=>(setItems(res.data)))
    .catch((err)=>(console.log(err)))
      },[upd])



  const addUser = (name,LastName,Age,email,password,img,contact)=>{
    axios.post("/api/users",{FirstName:name,LastName:LastName,Age:Age,email:email,password:password,img:img,contact:contact})
    .then((res)=>(setUpd(!upd)))
    .catch((err)=>(console.log(err)))
  }

  const search = (query) => {
    console.log(query);
let newData = items.filter((e) => {
      return e.for.toLowerCase().includes(query.toLowerCase());
    });
    setItems(newData);
  };

  

  return (
   <div>
    
      <BrowserRouter>
   
    <nav> 
      <ul>    
       <li> <Link to="/"  style={{marginLeft:"30px"}}>Home</Link> </li>  
     <li><Link to="/about"  style={{marginLeft:"30px"}}>About</Link></li>
    <li><Link to="/items"  style={{marginLeft:"30px"}}>Items</Link></li>
   <li> <Link to="/login"  style={{marginLeft:"30px"}}>Login</Link></li>
    <li><Link to="/SignUp"  style={{marginLeft:"30px"}}>SignUp</Link></li>
    </ul>
 
    </nav>
    <Routes>
      <Route exact path="/" element={<Home search={search}/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/items" element={<Items/>}></Route>
      <Route exact path="/login" element={<Login users={users} setUsers={setUsers} />}></Route>
      <Route exact path="/SignUp" element={<SignUp  addUser={addUser}/>}></Route>
      <Route exact path="/Profile" element={<Profile users={users}/>}></Route>
    </Routes>
   
    </BrowserRouter>
    
    <footer>
      <h1> Housify 4 Sell&Buy</h1>
    </footer>
    
   </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
