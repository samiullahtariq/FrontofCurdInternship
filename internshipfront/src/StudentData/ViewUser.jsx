import Menu from "../components/Menu"
import { useParams ,Link} from "react-router-dom";
import { useEffect , useState } from "react";
import axios from 'axios'


const ViewUser = () => {
  //Using State Hook
   const [user, setUser] = useState({
        name: "",
        email: "",
        facebookProfile: "",
      });
  //Getting id Throught params
      const { id } = useParams();
    //Loading the Data from Backend of Single user  
      const loadUser = async () => {
        const res = await axios.get(`/api/v1/students/getSingle/${id}`);
        console.log(res)
        setUser(res.data);
      };
      //Using The useEffect Hook
      useEffect(() => {
        loadUser();
      }, []);


      return (
          <>
          {/* Navbar */}
          <Menu/>
          {/* All The Body Starting Here */}
        <div className="container py-4">
          <Link className="btn btn-primary" to="/student">
            back to Student Page
          </Link>
          {/* Displaying The Fetched Data */}
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item"><span style={{ fontWeight : "bolder" }}> Name :</span> {user.name}</li>
            <li className="list-group-item"><span style={{ fontWeight : "bolder" }}> Email :</span> {user.email}</li>
            <li className="list-group-item"><span style={{ fontWeight : "bolder" }}> FacebookProfile :</span> {user.facebookProfile}</li>
          </ul>
        </div>
        </>
      )
}
export default ViewUser
