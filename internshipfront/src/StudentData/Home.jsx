import Menu from "../components/Menu"
import axios from "axios"
import { useState , useEffect } from "react"
import { useParams ,Link} from "react-router-dom"



const Home = () => {

  //getting id through params
    const {_id} = useParams()
    //using state hook
    const [user , setUser] = useState([])
    //Getting the user from backend
    const loadUsers = async()=>{
        let result =await axios.get(`/api/v1/students/get`)
        setUser(result.data)
    }
    //refreshing the data
    useEffect(() => {
      loadUsers()
    }, [])
    //Deleting function 
    //The id is which we are getting from map of user
//<!----------------------------------------------------Delete---------------------------------------------------------!>
    //We are commenting this delete cause we will make component for delete

    const deleteUser = async(id)=>{
           await axios.delete(`/api/v1/students/delete/${id}`)
           loadUsers()
    }

    return (
        <>
        {/* Navbar */}
           <Menu/> 
           {/* All the body */}
           <div className="container">
           <Link to="/" className="btn btn-outline-dark m-3">Register User</Link>
            <div className="py-4">
            <div className="container">
      <div className="py-4">
      {/* Table Starts Here */}
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table body starts Here */}
          <tbody>
          {/* Mapping the Data which we got through the loadUser funciton */}
            {
                user.map((value , index)=>{
                  console.log(value)
                    return(
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.facebookProfile}</td>
                            <td>
                            <Link to={`/view/${value._id}`} className="btn btn-sm btn-primary" >View</Link>
                            &nbsp;
                            <Link to={`/edit/${value._id}`} className="btn btn-sm btn-outline-primary">Edit</Link>
                            &nbsp;
                            <Link to={`/class/add/${value._id}`} className="btn btn-sm btn-primary">Add Class</Link>
                            &nbsp;
                            <Link to="" className="btn btn-sm btn-danger" onClick={()=>deleteUser(value._id)}>Delete</Link>
                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
          {/* Table Body Ends Here */}
        </table>
      </div>
    </div>
            </div>
        </div>
        </>
    )
}
export default Home
