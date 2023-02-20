import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItems/AddItem';
import Home from './Components/Home/Home';
import AddRemove from './Components/Home/ItemSection/AddRemove';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Navbar from './Components/Shared/Navbar';
import RequireAuth from './Components/Shared/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems'; 
import NotFound from './Components/Shared/NotFound';
import Blogs from './Components/Shared/Blogs';

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/blogs" element={<Blogs />} ></Route>

        <Route path="/addItem" element={<RequireAuth><AddItem /></RequireAuth>} ></Route>
        <Route path="/addRemove/:id" element={<RequireAuth><AddRemove></AddRemove></RequireAuth>} ></Route>
        <Route path="/manageItems" element={<RequireAuth><ManageItems></ManageItems></RequireAuth>} ></Route>
        <Route path="/myItems" element={<RequireAuth><MyItems></MyItems></RequireAuth>} ></Route>

        <Route path="*" element={<NotFound />} ></Route>

        <Route path="/signup" element={<SignUp />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
      <ToastContainer />
       
    </div>
  );
}

export default App;
