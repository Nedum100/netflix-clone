import {Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Navbar from "./Components/Navbar"
import ProtectedRutes from "./Components/ProtectedRutes"


const App = () => {
  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Signup/" element={<Signup />} />
        <Route path="/Profile"
         element=
         {<ProtectedRutes>
           <Profile />
          </ProtectedRutes>} />
     </Routes>
     
    </>
  );
}

export default App;





