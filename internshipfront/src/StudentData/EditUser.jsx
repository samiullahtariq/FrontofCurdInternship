import axios from "axios"
import { useState ,useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import Menu from "../components/Menu"

const EditUser = () => {

  // Getting id Through params
    const {id} =useParams()
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
    //loadusers
    const loadusers = async()=>{
      const result =  await axios.get(`/api/v1/students/getSingle/${id}`)
        setUser(result.data)
    }
    //useEffect
       useEffect(() => {
        loadusers()
    }, [])

    //OnChange Event to get Data
    let InputChange = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }
   
    //Submit Form
    const Submit = async (e)=>{
        e.preventDefault()
       await axios.put(`/api/v1/students/update/${id}`, user)
       //after posting data we will navigate to home page
       navigate("/student")
    }
    
  return (
      <>
       {/* Navbar */}
      <Menu/>
      {/* All Body */}
    <div className="container ">
      <div className="w-75 mx-auto shadow p-5" style={{marginTop : "60px"}}>
        <h2 className="text-center mb-4">Update User</h2>
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
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Date"
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
          <button className="btn btn-primary">Update Student</button>
          </div>
        </form>
        {/* Form Ended */}
      </div>
    </div>
    </>
  );  
}

export default EditUser

