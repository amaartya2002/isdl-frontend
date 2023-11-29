import React from "react";
import loginImg from '../utils/loginImg.jpg'

const FullScreenImage = () =>{
    return(
        <div className="w-1/2 h-full" >
        <img
          src={loginImg}
          alt="Full Screen"
          className=" bg-cover w-full h-full  opacity-70"
        />
      </div>
    )
}

export default FullScreenImage
