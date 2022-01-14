import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
    //using navigate
    let navigate = useNavigate()
    //useState
    const [user, setUser] = useState({
        name : "",
        email : "",
        password : "",
        dateofbirth: "",
        facebookProfile: ""
    })
    //Destructuring
    const {name , email , password , dateofbirth , facebookProfile} = user
    //ONChange Event
    let InputChange = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }
    //Submit function to send Data to backend 
    const Submit = async (e)=>{
        e.preventDefault()
         await axios.post("/api/v1/students", user)
       //after posting data we will navigate to student page
       navigate("/student")
    }
    
  return (
    //All the body Starting Here
    <div className="container ">
      <div className="w-75 mx-auto shadow p-5" style={{marginTop : "60px"}}>
        <h2 className="text-center mb-4">Student Registeration</h2>
        {/* Form Starts Here */}
        <form onSubmit={e => Submit(e)}>
        {/* NAME FIELD */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => InputChange(e)}
            />
          </div>
         {/* EMAIL FIELD */}
          <div className="form-group m-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your email"
              name="email"
              value={email}
              onChange={e => InputChange(e)}
            />
          </div>
          {/* PASSWORD FIELD */}
          <div className="form-group m-2">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              value={password}
              onChange={e => InputChange(e)}
            />
          </div>
          {/* DATE OF BIRTH */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your DateofBirth"
              name="dateofbirth"
              value={dateofbirth}
              onChange={e => InputChange(e)}
            />
          </div>
        {/* FACEBOOK PROFILE */}
        <div className="form-group m-2">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="Enter Your facebook url"
              name="facebookProfile"
              value={facebookProfile}
              onChange={e => InputChange(e)}
            />
          </div>
         {/* BUTTON  */}
          <div className="d-grid m-2">
          <button className="btn btn-primary">Register Student</button>
          </div>
        </form>
      </div>
    </div>
  );  
}
export default Register
