import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import user_data from '../components/Assets/user_data';
import './styles/Signin.css';


const Signin = () => {
   let navigate = useNavigate();
   const [isAuthenticated, setIsAuthenticated] = useState(false); 
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const user = user_data.find((e:any)=> (e.email===username && e.password===password));
  
   
  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
    console.log(username)
    console.log(user)
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    console.log(password)
  }

  const validateEmail = (username : string) => {
    return String(username)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const getIsFormValid = () => { 
    return ( 
      validateEmail(username) && 
      password.length >= 8 
    ); 
  }; 
 

  const handleSubmit =(e:any) =>{
    console.log(user?.password)

    if (user !== undefined){
      setIsAuthenticated(true)
    }
    if(getIsFormValid() && isAuthenticated===true){
      navigate('/');
    }
    else{
      alert( "Invalid username and password")
    }
  };

    
  return (
    <div className="signin">
         <div className="signinContainer">
            <h1> Sign In</h1>
            <div className="signinField">
            <input type="email" value={username} placeholder="Enter your email id" onChange={handleUsernameChange}/>
            <input type="password" value={password}placeholder="Password" onChange={handlePasswordChange} />
            <button className='submitButton' onClick={handleSubmit}> Sign In</button>
            </div>
          </div>
          {/* {(!getIsFormValid() && isAuthenticated===false)&& <h1>Invalid username/password</h1>} */}
    </div>
  )
}
export default Signin;