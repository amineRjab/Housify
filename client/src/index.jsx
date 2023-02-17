import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Routes ,Switch} from 'react-router-dom'
import $ from 'jquery'
import SignUp from './components/SignUp.jsx'
import { Container } from 'react-bootstrap'
import SignIn from './components/SignIn.jsx'
import Items from './components/Items.jsx'
import axios from 'axios'
import Profile from './components/Profile.jsx'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Search from './components/Search.jsx'



const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      headers : {"authorization" : localStorage.getItem("bearer")},
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

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
      <li><Link to="/about"  style={{marginLeft:"30px"}}>About us</Link></li>
     <li><Link to="/items"  style={{marginLeft:"30px"}}>Posts</Link></li>
    <li> <Link to="/SignIn"  style={{marginLeft:"30px"}}>Login</Link></li>
     <li><Link to="/SignUp"  style={{marginLeft:"30px"}}>SignUp</Link></li>
     </ul>
    <Search search={search}/>
     </nav>
     <Routes>
       <Route exact path="/" element={<Home />}></Route>
       <Route exact path="/about" element={<About/>}></Route>
       <Route exact path="/items" element={<Items/>}></Route>
       <Route exact path="/SignIn" element={<SignIn  />}></Route>
       <Route exact path="/SignUp" element={<SignUp  />}></Route>
       <Route exact path="/Profile" element={<Profile />}></Route>
     </Routes>
    
     </BrowserRouter>
     
     {/* <footer>
       <h1> Housify 4 Sell&Buy</h1>
     </footer> */}
     
    </div>
   )

  // return (
  //   <Container
  //     className="d-flex align-items-center
  //   justify-content-center"
  //     style={{ minHeight: "100vh" }}
  //   >
  //     <div className="w-100" style={{ maxWidth: "600px" }}>
       
  //       <List items={items}/>
  //       <SignUp/> 
  //       <SignIn/>
  //     </div>
  //   </Container>
  
  // )
}

ReactDOM.render(<App />, document.getElementById('app'))
