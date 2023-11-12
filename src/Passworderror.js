import React, {useState} from 'react'
import { FaFrown, FaTimes } from 'react-icons/fa';


const Passworderror = () => {
   const [invalid, setinvalid] = useState("");


   const mypassword = ()=>{
    console.log(mypassword)

    let error = {
        invalid
    }
    console.log(error)
   }

  return (
    <>
        <div style={{
        width: '500px',
        height: '300px',
        border: '1px solid grey',
        borderRadius: '10px',
        margin: 'auto',
        // marginTop: '30px',
        backgroundColor: 'white',
        textAlign: 'center',
        marginTop: '30px'
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
          <FaFrown />
        </h1>


        <h1 style={{
          // marginLeft: '15px',
          padding: '5px',
          // marginBottom: '35px'
        }}>
          Incorrect Password
        </h1>


        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            padding: '15px',
            // border: '1px solid skyblue',
            borderRadius: '5px',
            textAlign: 'center'
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
          placeholder='Enter your new email' 
          onChange={(e)=>setinvalid(e.target.value)}
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
            Submit
          </button>

        </div>
        {/* <p>Forget Password <a href="">Password Reset</a></p> */} 
      </div>
    </>
  )
}

export default Passworderror