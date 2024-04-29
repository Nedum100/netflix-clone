import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
 const { user, logout } = useAuth()
 const navigate = useNavigate

const handleLogout = async () => {
  try {
    await logout()
    navigate("/")
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className="absolute w-full p-4 flex items-center justify-between
     z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold
          cursor-pointer text-5xl">
          netflix
        </h1>
      </Link>

      {
        user?. email ? (
          <div>
        <Link to="/profile">
          <button className="capitalize p-4">profile</button>
        </Link>

        
          <button onClick={handleLogout} className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
            logout
          </button>
      </div>
        ) : 
        (
          <div>
        <Link to="/Login">
          <button className="capitalize p-4">login</button>
        </Link>
        <Link to="/Signup">
          <button className="capitalize bg-red-600 px-6 py-2
          rounded cursor-pointer">sign-up</button>
        </Link>
      </div>
        )
      }
    </div>
  );
}

export default Navbar;
