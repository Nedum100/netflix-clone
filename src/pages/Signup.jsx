import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
 const [rememberLogin, setRememberLogin] = useState(true);
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const {user, signUp} = useAuth()
 const navigate = useNavigate()
 
 const handleFormSubmit = async (e) => {
  e.preventDefault()
  try {
    await signUp(email, password)
    navigate("/")
  } catch (error) {
    console.log(error)
  }
 }

  return (
    <div className="relative w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/dc905d8b-0f80-40e4-a471-964ef99dcbf5/NG-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Netflix Sign Up Background"
      />
      <div className="bg-black/70 fixed top-0 w-full h-screen" />

      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-md mx-auto bg-black/80 rounded-lg p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Sign up</h1>

          <form 
          onSubmit={handleFormSubmit}
          className="flex flex-col space-y-4">
            <input
              className="p-3 bg-gray-700 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="p-3 bg-gray-700 rounded"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="bg-red-600 py-3 rounded font-bold">
              Sign Up
            </button>

            <div className="flex justify-between items-center text-gray-600">
              <label className="flex items-center">
                <input 
                type="checkbox"
                 className="mr-2" 
                 checked={rememberLogin}
                 // eslint-disable-next-line no-unused-vars
                 onChange={(e) => setRememberLogin(!rememberLogin)}
                 />
                Remember me
              </label>
              <Link to="/login" className="underline">
                Need Help?
              </Link>
            </div>
          </form>

          <p className="mt-4">
            Already subscribed?{" "}
            <Link to="/login" className="font-bold text-red-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
