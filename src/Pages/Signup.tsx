import React, { ReactEventHandler } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import './styles/Signup.css';

const PasswordErrorMessage = () => { 
  return ( 
    <p className="FieldError">Password should have at least 8 characters</p> 
  ); 
 }; 

const MissingNameMessage =() => {
  return(
      <p className="FieldError">Firstname must be entered</p>
  )
}
export function Signup() { 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState({value: "", 
      isTouched: false, }); 
    const [confpassword, setConfirmPassword] = useState({value: ""}); 

    
   const validateEmail = (email : string) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const getIsFormValid = () => { 
        return ( 
          firstName && 
          validateEmail(email) && 
          password.value.length >= 8 
        ); 
      }; 
      
      

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => { 
        e.preventDefault();
      console.log("Account created!"+" "+firstName+" "+lastName+" "+email); 
    }; 
    
    return ( 
      <div className="SignupForm"> 
        <form> 
          <fieldset> 
            <h2>Sign Up</h2> 
            <div className="FormField"> 
              <label> 
                First name <sup>*</sup> 
              </label> 
              <input 
                value={firstName} 
                onChange={(e) => { 
                  setFirstName(e.target.value); 
                  {firstName !== null ? <div>yes</div> : <div>no</div>}
                  console.log(firstName)
                }} 
                placeholder="First name" 
              /> 
              {firstName === '' && <MissingNameMessage/>}
            </div> 
            <div className="FormField"> 
              <label>Last name</label> 
              <input 
                value={lastName} 
                onChange={(e) => { 
                  setLastName(e.target.value); 
                  console.log(firstName+' '+ lastName)
                }} 
                placeholder="Last name" 
              /> 
            </div> 
            <div className="FormField"> 
              <label> 
                Email address <sup>*</sup> 
              </label> 
              <input 
                value={email} 
                onChange={(e) => { 
                  setEmail(e.target.value); 
                }} 
                placeholder="Email address" 
              /> 
            </div> 
            <div className="FormField"> 
              <label> 
                Password <sup>*</sup> 
              </label> 
              <input 
                value={password.value} 
                type="password" 
                onChange={(e) => { 
                  setPassword({ ...password, value: e.target.value }); 
                  console.log(password.value)
                }} 
                onBlur={() => { 
                  setPassword({ ...password, isTouched: true }); 
                }} 
                placeholder="Password" 
              /> 
            {password.isTouched && password.value.length < 8 ? ( 
                <PasswordErrorMessage /> 
              ) : null} 
            </div> 
            <div className="FormField"> 
            <label> Confirm Password<sup>*</sup> </label>
            <input value={confpassword.value} type="password" 
            onChange={(e) => {
                setConfirmPassword({...confpassword, value: e.target.value});
                {confpassword.value === password.value ?  console.log('ok') : console.log("password didnt match")}
      
            }
            }
            placeholder="Confirm Password" 
            />
            </div>
            <button type="submit" disabled={!getIsFormValid()} onClick={handleSubmit}> 
              Sign Up
            </button> 
            <p className="existingAccount">Already have an account <Link to='/signin'><span>Login here</span></Link> </p>

          </fieldset> 
        </form> 

             </div> 
    ); 
   } 
   
