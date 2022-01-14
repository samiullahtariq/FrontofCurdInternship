import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate ,useParams } from "react-router-dom"
import Menu from "../components/Menu"


const EditClass = () => {
      //Getting the id throught params hook
    const {id} = useParams()
     // using navigate hook
    const navigate =useNavigate()
       //using State hook
    const [user, setUser] = useState({
        subject :"",
        teacherName : "",
        duration : "",
        time : ""
    })
    //Destructuring
    const {subject , teacherName , duration , time} = user
      // input Funtion used in form fields
    const InputChange = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }
    //Getting the data from backend single user comming
    const loadData = async()=>{
      const loadedData = await axios.get(`/api/v1/classes/getSingle/${id}`)
      console.log(loadedData.data)
      setUser(loadedData.data)
  }
   // using the useEffect hook to Refresh data
    useEffect(() => {
       loadData()
    }, [])
  // update the date by submiting
    const Submit = (e)=>{
        e.preventDefault()
         axios.put(`/api/v1/classes/update/${id}` , user)
         navigate("/class")
    }

  //Returning Starts Here
    return (
        <> 
        {/* Navbar */}
         <Menu/>
         {/* All the body Start here */}
         <div className="container ">
      <div className="w-75 mx-auto shadow p-5" style={{marginTop : "60px"}}>
        <h2 className="text-center mb-4">Updating the Class Fields</h2>
        {/* Form Starts Here */}
        <form onSubmit={e => Submit(e)}>
        {/* Subject */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
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
              placeholder="Enter Your class duration"
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
              placeholder="Enter Your time"
              name="time"
              value={time}
              onChange={e => InputChange(e)}
            />
          </div>
         {/* BUTTON  */}
          <div className="d-grid m-2">
          <button className="btn btn-primary">Update Class Data</button>
          </div>

        </form>
        {/* Form ends here */}
      </div>
    </div>  
        </>
    )
}

export default EditClass
