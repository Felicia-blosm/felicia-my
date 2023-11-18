import React, {useState} from 'react';

const Fhorge = () => {

    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [allpassword, setallpassword] = useState([]  && JSON.parse(localStorage.getItem("List")));

   const list = json.parse(localStorage.getItem("List"))
   console.log(list);

    const mypassword = ()=> {
        console.log(mypassword)        
        setallpassword([...allpassword, password])
        localStorage.setItem("List", JSON.stringify(allpassword))
        
      }
      
    return (
        <div>

            <div
                style={{
                    width: "100%",
                    height: '100%',
                    position: "relative",
                    backGround: "#FAFCFE",
                    borderRadius: "30px",
                    overflow: "hidden",
                    border: "1px #8E8E8E solid"
                }}>

                <div
                    style={{
                        left: "93px",
                        top: "156px",
                        position: "absolute",
                        textAlign: "center",
                        color: "#011432",
                        fontSize: "60px",
                        fontFamily: "Mulish",
                        fontWeight: "700",
                        wordWrap: "breakWord"
                    }}>
                    Create a new password</div>


                <div
                    style={{
                        paddingLeft: "128px",
                        paddingRight: "128px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        left: "112px",
                        top: "794px",
                        position: "absolute",
                        backGround: "#002347",
                        borderRadius: "5px",
                        overflow: "hidden",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "16px",
                        display: "inline-flex"
                    }}>


                    <div
                        style={{
                            color: "#FAFCFE",
                            fontSize: "37px",
                            fontFamily: "Mulish",
                            fontWeight: "700",
                            wordWrap: "breakWord"
                        }}>
                        Create new password</div>
                </div>



                <div
                    style={{
                        width: "27.87px",
                        height: "27.87px",
                        left: "767px",
                        top: "41px",
                        position: "absolute",
                        background: "#4460EF"
                    }}>
                </div>


                <div
                    style={{
                        width: "189px",
                        height: "189px",
                        left: "338px",
                        top: "282px",
                        position: "absolute"
                    }}>


                    <div
                        style={{
                            width: "66.15px",
                            height: "72.76px",
                            left: "61.42px",
                            top: "9.45px",
                            position: "absolute",
                            border: "24px #66798F solid"
                        }}>
                    </div>


                    <div
                        style={{
                            width: "118.12px",
                            height: "118.12px",
                            left: "35.44px",
                            top: "63.79px",
                            position: "absolute",
                            background: "#8BB7F0"
                        }}>
                    </div>



                    <input
                        style={{
                            width: "122.85px",
                            height: "122.85px",
                            left: "33.08px",
                            top: "61.42px",
                            position: "absolute",
                            backGround: "#4E7AB5"
                        }}

                    />

                    <input
                        style={{
                            width: "75.60px",
                            height: "75.60px",
                            left: "56.70px",
                            top: "85.05px",
                            position: "absolute",
                            backGround: "#DBF2FF"
                        }}
                        placeholder='Enter your new password'
                        onChange={(e) => setpassword(e.target.value)}

                    />



                    <input
                        style=
                        {{
                            width: "9.45px",
                            height: "23.62px",
                            left: "89.78px",
                            top: "122.85px",
                            position: "absolute",
                            backGround: "#36404D"
                        }}
                        type="text" name="" id=""
                        placeholder='Confirm your new password'
                        onChange={(e) => setconfirmpassword(e.target.value)}

                    />

                </div>
            </div>

        </div>
    )
}

export default Fhorge