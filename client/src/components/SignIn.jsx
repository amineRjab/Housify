import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let user = {
    email: email,
    password: password,
  };

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
      console.log(response)
      console.log(response.data.accessToken)
      let token = response.data.accessToken
      console.log("post========>",token)
        localStorage.setItem('bearer', "bearer " +token)
    })
    .catch(err=>{console.log(err)});
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={onSubmitdata}>
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
            <Button className="w-100 mt-4" type="submit ">
              Enzel
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Ma3ndekch Compte!! Fech Testanna !!
      </div>
    </>
  );
};

export default SignIn;
