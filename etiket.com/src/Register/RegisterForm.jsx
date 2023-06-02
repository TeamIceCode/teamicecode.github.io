import React, { useState } from "react";
import apiService from "../api-service/apiService";
import {Container , Alert} from 'react-bootstrap' ;


const RegisterData = ({ handleRegister }) => {
  const [errors, setErrors] = useState({});
  const [isSignedUp, setSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    secretQuestion: "",
    secretAnswer: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    apiService
      .post("/accounts/signup", formData)
      .then((response) => {
        if (!response.data.status) {
          return setErrors({
            name: response.data.errorName,
            message: response.data.message,
          });
        } else {
          setSignUp({});
          setErrors({});

            setTimeout(() => {
              handleRegister(formData);
            }, 4000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  const errorHandler = (name) => {
    return (
      name === errors.name && <div className="error">{errors.message}</div>
    );
  };

  return (
    <>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1 className="title">
          <b>etiket Registration</b>
        </h1>

        <div className="input-container">
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <div className="errors">
            {errorHandler("firstName")}
            {errorHandler("invalidFirstName")}
          </div>
        </div>

        <div className="input-container">
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <div className="errors">
            {errorHandler("lastName")}
            {errorHandler("invalidLastName")}
          </div>
        </div>

        <div className="input-container">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="errors">
            {errorHandler("email")}
            {errorHandler("dupEmail")}
            {errorHandler("invalidFormat")}
          </div>
        </div>

        <div className="input-container">
          <label>Create your secret question:</label>
                <select type="text"
                        name="secretQuestion"
                        value={formData.secretQuestion}
                        onChange={handleChange}>
                <option>Select one from the choices</option>
                <option value="Your childhood hero?">Your childhood hero?</option>
                <option value="Your favorite color?">Your favorite color?</option>
                <option value="Name of grade school you went to?">Name of grade school you went to?</option>
                </select>
          <div className="errors">{errorHandler("secretQuestion")}</div>
        </div>

        <div className="input-container">
          <label>Answer to secret question:</label>
          <input
            type="text"
            name="secretAnswer"
            value={formData.secretAnswer}
            onChange={handleChange}
          />
          <div className="errors">{errorHandler("secretAnswer")}</div>
        </div>

        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="errors">
            {errorHandler("password")}
            {errorHandler("weakPassword")}
          </div>
        </div>

        <div className="input-container">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="errors">{errorHandler("confirmPassword")}</div>
        </div>
        
        <div className="button-container">
          <button className="reg-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
    {isSignedUp && (

        <Container className='p-4'>  
          <Alert variant="success">Registration Successful! ✓ <br/> Redirecting you to Login...</Alert>  
        </Container>  
      )}
    </>
  );
};

export default RegisterData;
