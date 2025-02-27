import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import { setUserData } from "../Redux/slice/userSlice";

const Signin = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const[email , setEmail] = useState("")

  const handleSave =(e)=>{
    e.preventDefault();
    if(email==""){
      alert("Email Cant Empty")
      
    }else{
      dispatch(
        setUserData(email)
      );
      navigate("/home")
    }
  }
  console.log(email);
  return (
    <form className="max-w-sm mx-auto bg-black/10 p-10">
      <div className="mb-5">
        <h1
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          Your email
        </h1>
        <input
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div className="mb-5">
        <h1
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </h1>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <h1
          for="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </h1>
      </div>
      {/* <Link to={"/home"}> */}
        {" "}
        <button
          type="submit"
          onClick={handleSave}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      {/* </Link> */}
    </form>
  );
};

export default Signin;
