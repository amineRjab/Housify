import React, { useState } from "react";
import { useNavigate } from 'react-router'
import Profile from './Profile.jsx'
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  let user = {
    email: email,
    password: password,
  };

  const handleClick=()=>{
    const filtred=props.user.filter((e)=>{ 
      return e.email===email})

    console.log(filtred);
    if(!!filtred.length){
      props.setUser(filtred)
      
    }
           
        else alert("T rawwaa7 signUp")
       navigate("/SignIn")}

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onSubmitdata = (e) => {
    e.preventDefault();
    console.log(user);

    let options = {
      ContentType: "Application/json",
    };

    axios.post("/api/items/SignIn", user, options)
    .then(response=>{
      // console.log(response)
      // console.log(response.data.accessToken)
      let token = response.data.accessToken
      console.log("post========>",token)
        localStorage.setItem('bearer', "bearer " +token)
    })
    .catch(err=>{console.log(err)});
    navigate("/Profile")
  };

  return (
    <>
      <Card className="easy"
      style={{ minHeight: "70vh" , width: "50vh"}}>
        <Card.Body className="w-100 h-100"  style={{ maxWidth: "600px" ,marginTop: "33px" }}>
          <img className="loginlogo" src="https://res.cloudinary.com/dsaso2a8g/image/upload/v1676591910/logoC_cscfdg.png"/>
          <Form  className="form" onSubmit={onSubmitdata}>
            <Form.Group className="mb-1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" required onChange={handleEmail} />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={handlePassword}
              />
            </Form.Group>
            <Button onClick={()=>(handleClick())} className="w-100 mt-4" type="submit ">
              LogIn
            </Button>
          </Form>
          <div className="w-100 text-center mt-2" onClick={()=>(navigate("/SignUp"))}>
       If you don't have account you can create account
      </div>
        </Card.Body>
      </Card>
      <p className="disclaimer">with Housify your income will get height until they reach the sky </p>
    </>
  );
};

export default SignIn;
