import React, { useState } from 'react';
import RegisterData from '../Register/RegisterForm';
import apiService from '../api-service/apiService';
import Clock from '../components/clock';


function LoginData({accounts}){
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loggedInUser, setUser] = useState('');
  const [showRegForm, setShowRegForm ] = useState(false);
  const reload = () => window.location.reload(true);
  const errors = {
    inputEmail: "Invalid email address!",
    inputPassword: "Incorrect password!"
  };
    const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const { inputEmail, inputPassword } = event.target.elements;
    // Find user login info
    const accountName = accounts.find((account) => account.email === inputEmail.value);
    const accountPassword = accounts.find((account) => account.password === inputPassword.value);

      apiService.post('/accounts/login', accountName && accountPassword)
      .then(res => {
          console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      })

    // Compare user info
    if (accountName) {
      if (!accountPassword) {
        // Invalid password
        setErrorMessages({ name: "inputPassword", message: errors.inputPassword });
      } else {
        setIsSubmitted(true);
        setUser(accountName.firstName);
        setErrorMessages({})
      }
    } else {
      // Username not found
      setErrorMessages({ name: "inputEmail", message: errors.inputEmail });
    }
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) => 
  name === errorMessages.name && (<div className="error">{errorMessages.message}</div>);
  
  const handleRegClick = () => {
    setErrorMessages({}); 
    setShowRegForm(true);
  };

  const handleRegister = (formData) => {
    console.log('Sign-up form data:', formData);
    setShowRegForm(false);
    accounts.push(formData);
    console.log(accounts);
  }

  return (
    <>
    {isSubmitted ? 
    <div className='createLabel'> Welcome <b className='user'>{loggedInUser}</b>, you have successfully logged in!
    <br/>
    <button className="reload-button" onClick={reload}>Continue to website</button>
    </div> : showRegForm ?
    (
      <RegisterData handleRegister={handleRegister} />
    ) :
    (

        <div className="form">
                <div><Clock /></div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <h1 className='title'>Please Login to<br/> make reservations.</h1>
                <label>Email: </label>
                <input type="email" name="inputEmail" required/>
                <div className="errors">
                {renderErrorMessage("inputEmail")}
                </div>
                </div>
                <div className="input-container">
                <label>Password: </label>
                <input type="password" name="inputPassword" required/>
                <div className="errors">
                {renderErrorMessage("inputPassword")}
                </div>
                </div>
                <div className="button-container">
                <input className="reg-button" type="submit" />
                <p className='createLabel'>No account yet?</p> 
                <button className="reg-button" type='button' onClick={handleRegClick}>Create Account</button>
                </div>
            </form>
        </div>
    )}
        </>
  )
}
export default LoginData;