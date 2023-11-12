import React, { useState } from 'react';
import { FaLock, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {

const [password, setpassword] = useState("");
const [confirmpassword, setconfirmpassword] = useState("");
const [allpassword, setallpassword] = useState([]);
// const navigate = useNavigate();



const mypassword = ()=> {
  console.log(password, confirmpassword)

  let confirm = {
    password, confirmpassword
  }
  console.log(confirm)
  
  setallpassword([...allpassword, password])
  
}


// if (password !== confirmpassword) {
//   setconfirmpassword('passwords do not match')
// } else{
//   setconfirmpassword('')
// }

  return (
    <>
      <div style={{
        width: '500px',
        height: '360px',
        border: '1px solid grey',
        borderRadius: '10px',
        margin: 'auto',
        backgroundColor: 'white',
        textAlign: 'center',
        marginTop: '25px'
      }}>

        <h4 style={{
          marginLeft: '450px'
        }}>
          <FaTimes />
        </h4>


        <h1 style={{
          // marginLeft: '170px',
          padding: '5px',
        }}>
          <FaLock />
        </h1>


        <h1 style={{
          // marginLeft: '15px',
          padding: '5px',
          // marginBottom: '35px'
        }}>
          Create a new passwords
        </h1>


        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            padding: '15px',
            // border: '1px solid skyblue',
            borderRadius: '5px',
            textAlign: 'center',
            // marginBottom: '10px'
        }}>
            <label htmlFor=""></label>
          <input 
            style={{
              margin: '5px',
              height: '40px',
              padding: '7px',
              width: '450px',
              borderRadius: '5px'
            }}
          type="text" 
          name="password" id="" 
          placeholder='Enter your new password' 
          onChange={(e)=>setpassword(e.target.value)}
          />


          <input style={{
            margin: '5px',
            // height: '40px',
            padding: '8px',
            width: '450px',
            borderRadius: '5px'
          }}
          type="text" 
          name="confirm" id="" 
          placeholder='Confirm your new password' 
          onChange={(e)=>setconfirmpassword(e.target.value)}
          />
          

          <button 
            style={{
              width: '450px',
              margin: '5px',
            height: '40px',
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: '5px'
            }}            
            onClick={mypassword}>
            Create new password
          </button>

        </div>
        {/* <p>Forget Password <a href="">Password Reset</a></p> */} 
      </div>
    </>
  )
}

export default App