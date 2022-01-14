import Menu from '../components/Menu'
import { useState , useEffect } from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'

const About = () => {
    //useState
    const [user, setUser] = useState([])
     //load the Users
     const loadUsers = async ()=>{
      let result = await axios.get("/api/v1/classes/get")
      console.log(result.data)
      setUser(result.data)
    }
    // using The useEffect Hook
    useEffect(() => {
      loadUsers()
    }, [])
    //Deleting the id 
    const deleteClass = async(id)=>{
        await axios.delete(`/api/v1/classes/delete/${id}`)
         loadUsers()
    }
      // Returing Starts Here
    return (
        <>
        {/* Navbar  */}
         <Menu />
         {/* All The Body Starts Here */}
         <div className="container">
      {/* ///////////////////////////////////   // Button for Register Class/////////////////////////////// */}
            <div className="py-4">
            <div className="container">
      <div className="py-4">
      {/* Table Starts Here */}
        <table className="table border shadow">
          <thead className="table-dark">
            <tr >
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">TeacherName</th>
              <th scope="col">Duration</th>
              <th scope="col">Time</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table Body Starts Here */}
          <tbody>
          {/* Showing Data using the map function we get this data from loadUser */}
            {
                user.map((value , index)=>{
                    return(
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{value.subject}</td>
                            <td>{value.teacherName}</td>
                            <td>{value.duration}</td>
                            <td>{value.time}</td>
                            <td>
                            <Link to={`/class/view/${value._id}`} className="btn btn-sm btn-primary" >View</Link>
                            &nbsp;
                            <Link to={`/class/edit/${value._id}`} className="btn btn-sm btn-outline-primary">Edit</Link>
                            &nbsp;
                            <Link to="" className="btn btn-sm btn-danger" onClick={()=>deleteClass(value._id)}>Delete</Link>
                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
            </div>
        </div>  
        </>
    )
}

export default About


