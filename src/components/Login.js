import React, { useState } from "react";
import loginImg from "../utils/loginImg.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import md5 from "md5";
import { useNavigate } from "react-router-dom";

const CryptoJS = require('crypto-js')
const Login = () => {
  const {register,handleSubmit}=useForm()
  const navigate=useNavigate()
  const onSubmit=(data)=>{
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/login`,{params:{
        UserPassword:CryptoJS.MD5(data.password).toString(),
        UserID: data.email,
      }}).then((resp)=>{
          if(resp.data.UserRole==='Invigilator'){
            localStorage.setItem('role',resp.data.UserRole)
            navigate('/examVenue')
            
            alert(`logged in as ${resp.data.UserRole}`)
          }
          else if(resp.data.UserRole==='Student'){
            navigate('/home')
          }
      }).catch(function (err){

      })
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div>
        <h2 className="text-3xl font-semibold text-center text-black mt-20 mb-0">
          Exam Management
        </h2>
      </div>
      <div className="w-full p-6 m-auto bg-blue-100 rounded-md shadow-md lg:max-w-xl mt-6">
        <h1 className="text-3xl font-semibold text-center text-black underline">
          Login
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="mb-2">
            <label
              htmlFor="userRole"
              className="block text-sm font-semibold text-gray-800"
            >
              Select Role
            </label>
            <select
              id="userRole"
              {...register('role',{ required:true})}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md border-gray-300  focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="invigilator">Invigilator</option>
            </select>
          </div> */}
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              User Id
            </label>
            <input
              {...register('email',{ required:true})}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md border-gray-300  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              {...register('password',{ required:true})}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md border-gray-300  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
