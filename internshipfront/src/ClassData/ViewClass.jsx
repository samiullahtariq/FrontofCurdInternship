import Menu from "../components/Menu"
import { useParams ,Link} from "react-router-dom";
import { useEffect , useState } from "react";
import axios from 'axios'

const ViewUser = () => {
  //Using the State hook
   const [user, setUser] = useState({
        subject: "",
        teacherName: "",
        duration: "",
        time :"",
      
      });

      const [populate , setPopulate] = useState({
        name : "",
        email :"",
        dateofbirth :"",
        _id : ""
      })
      // Getting id from useparams hook
      
      const {id} = useParams();
      //Getting data from backend 
      const loadUser = async () => {
        const res = await axios.get(`/api/v1/classes/getSingle/${id}` );
        //Setting Class DAta in it
        setUser(res.data);
        console.log(res.data)
        //Setting Student Data in it
        setPopulate(res.data.student)
        console.log(res.data.student)
      };
      //useEffect hook
      useEffect(() => {
        loadUser();
      }, []);
      return (
          <>
          {/* Navbar Start Here */}
          <Menu/>
        <div className="container py-4">
          <Link className="btn btn-primary" to="/class">
            Back to Class
          </Link>
           {/* All The View Information */}
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>Std Name :</span>    {populate.name}</li>
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>Std Email :</span>   {populate.email}</li>
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>Std DateofBirth :</span>   {populate.dateofbirth}</li>
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>Std ID :</span>   {populate._id}</li>
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>Subject :</span>   {user.subject}</li>
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>TeacherName :</span>   {user.teacherName}</li>
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>Duration :</span>  {user.duration}</li>
          </ul>
          {/* End here */}
        </div>
        </>
      )
}

export default ViewUser
