import React, { useState } from 'react';
import { FaTimes, FaLock, FaRegEye } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './Vector.jpg';
// import { useParams } from 'react-router-dom';

const App = () => {

  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [allpassword, setallpassword] = useState([] && JSON.parse(localStorage.getItem("List")));
  // const navigate = useNavigate();

  const list = JSON.parse(localStorage.getItem("List"))
  console.log(list);

  const mypassword = () => {
    console.log(password, confirmpassword)

    let confirm = {
      password, confirmpassword
    }
    console.log(confirm);

    setallpassword([...allpassword, password])
  localStorage.setItem("List", JSON.stringify(allpassword))
  }
  
  // let alpassword = []

  // if (password !== confirmpassword) {
  //   setconfirmpassword('passwords do not match')
  // } else{
  //   setconfirmpassword('')
  // }

  return (
    <>
      <div style={{
        width: '400px',
        height: '460px',
        border: '1px solid #5E636C',
        borderRadius: '30px',
        margin: 'auto',
        backgroundColor: 'white',
        textAlign: 'center',
        marginTop: '25px',
        alignContent: 'center',
        display: 'flex',
        // padding: '15px',
        justifyContent: 'center',
        // flexDirection: 'column'
        backGroundColor: '#FAFCFE' 
      }}>

        <div></div>
        <div className='div2'>


          <h4 style={{
            marginLeft: '300px',
            color: '#4460EF'
          }}>
            <FaTimes />
          </h4>


          <h1 style={{
            // marginLeft: '170px',
            padding: '5px',
          }}>
            <FaLock className='icon2'/>
            <img src={image} alt='' />
          </h1>


          <h1 style={{
            // marginLeft: '15px',
            // padding: '5px',
            marginBottom: '35px',
            color: "#011432",
            fontSize: "30px",
            fontFamily: "Mulish",
            fontWeight: "400",
            wordWrap: "break-word"
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

            <label style={{
              color: '#000916',
              fontSize: '14px',
              fontFamily: 'Work Sans',
              fontWeight: '600',
              wordWrap: 'breakWord',
              textAlign: 'left'
            }} htmlFor="">
              Create password
            </label>

            <form className='form'>
            <FaRegEye className='icon'/>
            <input
              style={{
                // margin: '15px',
                height: '40px',
                // padding: '7px',
                width: '120%',
                borderRadius: '5px',
                color: '#5E636C',
                fontSize: '18px',
                fontFamily: 'Mulish',
                fontWeight: '400',
                wordWrap: 'breakWord'

              }}
              type="text"
              name="password" id=""
              placeholder='Enter your new password'
              onChange={((e) => setpassword(e.target.value))}
            />
             
            </form><br />



            <label style={{
              color: '#000916',
              fontSize: '14px',
              fontFamily: 'Work Sans',
              fontWeight: '600',
              wordWrap: 'breakWord',
              textAlign: 'left',
              // marginLeft: '50px'
            }} htmlFor="">
              Confirm Password
            </label>

            <form>
            <FaRegEye className='icon'/>
            <input style={{
              // margin: '10px',
              height: '40px',
              // padding: '7px',
              width: '120%',
              borderRadius: '5px',
              color: '#5E636C',
              fontSize: '18px',
              fontFamily: 'Mulish',
              fontWeight: '400',
              wordWrap: 'breakWord'
            }}
              type="text"
              name="confirm" id=""
              placeholder='Confirm your new password'
              onChange={((e) => setconfirmpassword(e.target.value))}
            />
            </form>
            <button style={{

              width: '120%',
              height: '50px',
              margin: '5px',
              backgroundColor: '#002347',
              border: 'none',
              borderRadius: '5px',
              color: "#FAFCFE",
              fontSize: "27px",
              fontFamily: "Mulish",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: '50px'
            }} onClick={mypassword}>
              Create new password
            </button>

          </div>
        </div>
        {/* <p>Forget Password <a href="">Password Reset</a></p> */}
      </div>

      {/* {
      allpassword.map(e=>(
        <div>
          {e} 
        </div>
      ))
    } */}
    {/* {
      allpassword.map((e)=>{
        <div>
          <h1>
            {e.password}
            {e.confirmpassword}
          </h1>
      </div>
      })
} */}
    </>
  )
}

export default App