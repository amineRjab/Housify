import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import SignUp from "./components/SignUp.jsx"
import { Container } from 'react-bootstrap'
import SignIn from './components/SignIn.jsx'
import ListItem from './components/ListItem.jsx'


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

  return (
    <Container
      className="d-flex align-items-center
    justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        {/* <SignUp /> */}
        <List items={items}/>
        <SignIn/>
      </div>
    </Container>
  
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
