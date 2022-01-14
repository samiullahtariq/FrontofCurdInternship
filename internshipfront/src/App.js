import {Routes , Route} from "react-router-dom"

//STudent 
import Register from './StudentData/Register';
import Home from './StudentData/Home';
import ViewUser from './StudentData/ViewUser';
import EditUser from './StudentData/EditUser';

//Class
import ViewClass from './ClassData/ViewClass';
import About from './ClassData/About';
import AddClass from './ClassData/AddClass';
import EditClass from './ClassData/EditClass';



function App() {
  return (
   <>
    <Routes>
     
     {/* Student Routes */}
      <Route  path="/" element={<Register/>} />
      <Route  path="/student" element={<Home/>} />
      <Route  path="/edit/:id" element={<EditUser/>} />
      <Route  path="/view/:id" element={<ViewUser/>} />

      {/* Class Route */}
      <Route  path="/class" element={<About/>} />
      <Route  path="/class/add/:id" element={<AddClass/>} />
      <Route  path="/class/edit/:id" element={<EditClass/>} />
      <Route  path="/class/view/:id" element={<ViewClass/>} />
    </Routes>
   </>
  );
}

export default App;
