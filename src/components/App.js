import React, {useState} from "react";
import '../styles/App.css';
import { Navigate } from "react-router-dom"
//import UserPg from "./UserPg";
const App = () => {
  // const [emailError, setEmailError] = useState('')
  // const [numberValidation,setnumberValidation]=useState("number-validity-true")
  const [nameerr, setnameerr] = useState(false);
    const [emailerr, setemailerr] = useState(false);
    const [gendererr, setgendererr] = useState(false);
    const [numbererr, setnumbererr] = useState(false);
    const [passworderr, setpassworderr] = useState(false);
    const [mandatoryerr, setmandatoryerr] = useState(false);
    const [numberlengtherr, setnumberlengtherr] = useState(false)
    const [show, setShow] = useState(true)

  const [userData, setUserdata] = useState({
    userName: "",
    email: "",
    gender :"",
    phoneNum : "",
    password :"",
  })
  console.log(userData)
  const handleSubmit = () => {
    if (
        userData.userName === "" ||
        userData.email === "" ||
        userData.phoneNum=== "" ||
        userData.password === ""
    ) {
        setmandatoryerr(true);
    }
    const format = /[!@#$%^&*0-9()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!format.test(userData.userName)) {
        setnameerr(true);
    }

    if (userData.email && !userData.email.includes("@")) {
        setemailerr(true);
    }
    if (userData.gender === "") {
        setgendererr(true);
    }
    if (userData.password.length < 6) {
        setpassworderr(true);
    }

    if (!userData.phoneNum) {
        setnumbererr(true)
    }
    let mynumber = "" + userData.phoneNum
    if (mynumber.length === 10) {

        setnumberlengtherr(true)
    }
    else {

        setShow(!show)

    }
  

};

return (
    <>
        

        {!show && <div class="card">

            <div class="card-body">
                <h1 class="card-title" style={{  textAlign:"center"  }}>Hello {userData.email.split("@")[0]}</h1>
                <p class="card-text" style={{textAlign: "center"}}>Form validation is successfull</p>
                <a href="/#" class="btn btn-primary" style={{textAlign: "center"}} onClick={() => [setShow(!show), setUserdata({
                    username: "",
                    email: "",
                    gender: "",
                    number: "",
                    password: ""

                })]}>Go to form page</a>
            </div>
        </div>}





        {show && <div id='main' style={{ width: "500px", height: "650px" }}>
            <h1>SignUp Form</h1>
            <hr></hr>
            {mandatoryerr && (
                <p style={{ color: "red" }}> All fields are mandatory !</p>
            )}
            {/* <div id ='main'> */}
                <div id="user-name" className="content-div">
                    <label className="lable">Name: </label>
                    <input className="input-box" type="alphanumeric" onChange={(e) => [
                                setUserdata({ ...userData, username: e.target.value }),
                                setmandatoryerr(false),
                                setnameerr(false),
                            ]}></input>
                    {nameerr && (
                            <p style={{ color: "red" }}>
                                {" "}
                                Name is not alphanumeric!
                            </p>
                        )}
                </div>
            <div id="user-email" className="content-div">
                <label className="lable">Email: </label>
                <input className="input-box" type="email"
                        onChange={(e) => [
                        setUserdata({ ...userData, email: e.target.value }),
                        setmandatoryerr(false),
                        setemailerr(false),
                    ]}
                    />
                {emailerr && <p style={{ color: "red" }}>email must contain @ !</p>}
            </div>
                <div id="user-email" className="content-div">
                    <label className="lable">Gender: </label>
                    <select onChange={(e) => [
                            setUserdata({ ...userData, gender: e.target.value }),
                            setmandatoryerr(false),
                            setgendererr(false),
                        ]}>
                        <option value=""></option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="others">Others</option>
                    </select>
                    {gendererr && (
                        <p style={{ color: "red" }}>
                            {" "}
                            Please identify as male, female or others !
                        </p>
                    )}
                </div>
                <div id="user-num" className="content-div">
                    <label className="lable">Phone Number: </label>
                    <input className="input-box" type="numberic"  onChange={(e) => [
                                setUserdata({ ...userData, number: parseInt(e.target.value) }),
                                setmandatoryerr(false),
                                setnumbererr(false),
                                setnumberlengtherr(false)
                            ]}></input>
                    {numbererr && <p style={{ color: "red" }}>Phone Number must contain numbers!</p>}
                        {numberlengtherr && <p style={{ color: "red" }}>number length should be of 10 digits !</p>}
                    {/* <p className={numberValidation}>Please enter a valid number</p> */}
                </div>
                <div id="user-pass" className="content-div">
                    <label className="lable">Password: </label>
                    <input className="input-box" type="password"  
                            
                            onChange={(e) => [
                                setUserdata({ ...userData, password: e.target.value }),
                                setmandatoryerr(false),
                                setpassworderr(false),
                            ]}></input>
                    {passworderr && (
                            <p style={{ color: "red" }}> Password must contain atleast 6 letters!</p>
                        )}
                </div>
                <div id="submit-button" className="content-div">
                    {/* <Link to="/user"><button  onClick={handleSubmit}>Submit</button></Link> */}
                    <button  onClick={handleSubmit}>Submit</button>
                </div>
        </div>}
    </>
);
  
}
export default App;
