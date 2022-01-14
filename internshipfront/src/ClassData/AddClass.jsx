import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Menu from "../components/Menu"
import axios from "axios"


const AddClass = () => {
  
  //using params hook
 const {id} = useParams()

  //using Navigate Hook
    const navigate =useNavigate()
     //using State hook
    const [user, setUser] = useState({
        subject :"",
        teacherName : "",
        duration : "",
        time : ""
    })
      //Destructuring The user 
    const {subject , teacherName , duration , time} = user
      // input function that gets the form value
    const InputChange = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }
      //Submit the data through form
    const Submit = async(e)=>{
        e.preventDefault()
       await axios.post(`/api/v1/classes/${id}` , user)
         navigate("/class")
    }
      //Returnig the data
    return (
        <> 
          {/* Navbar */}
         <Menu/>
         {/* All The body  */}
         <div className="container">
      <div className="w-75 mx-auto shadow p-5" style={{marginTop : "60px"}}>
        <h2 className="text-center mb-4">Class Registeration</h2>
        {/* Form Starts Here */}
        <form onSubmit={e => Submit(e)}>
        {/* Subject */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Subject Name"
              name="subject"
              value={subject}
              onChange={e => InputChange(e)}
            />
          </div>         
         {/* teacher */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your teacher Name here"
              name="teacherName"
              value={teacherName}
              onChange={e => InputChange(e)}
            />
          </div>
          {/* duration */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your class duration in Minutes"
              name="duration"
              value={duration}
              onChange={e => InputChange(e)}
            />
          </div>
          {/* time */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Starting Class Time"
              name="time"
              value={time}
              onChange={e => InputChange(e)}
            />
          </div>
         {/* BUTTON  */}
          <div className="d-grid m-2">
          <button className="btn btn-primary">Add Class Data</button>
          </div>
        </form>
      </div>
    </div>  
        </>
    )
}

export default AddClass
