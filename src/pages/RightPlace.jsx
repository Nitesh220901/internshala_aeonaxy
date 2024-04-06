import React, { useState } from "react";
import { NavLink } from "react-router-dom";
 
import { FaLessThan } from "react-icons/fa6";

import weighing from "../assets/weighing-scale.png"
const RightPlace = () => {
 

  return (
    <div className=" relative  flex flex-col items-center justify-center">
       <div className=" relative   w-[300px] left-5  sm:w-[500px] lg:w-[900px] lg:left-10    top-0   h-1 bg-gray-300 ">
      <button className="text-black absolute -top-1.5 -left-5   ">
        <NavLink to="/interested"> <FaLessThan /> </NavLink>
    </button>
        <div className="absolute w-[150px] sm:w-[300px] lg:w-[500px]   h-1 bg-green-500">

        </div>
      </div>
       <div className="flex  gap-5  m-20 sm:w-2/4 ">
        <div className=" w-36  lg:w-1/2   ">
      <img src={weighing} alt="weighing machine icon" />
      
        </div>
        <div className="w-1/2">
            <h1 className="font-bold text-2xl">You're in the right place </h1>
            <p>Brilliant gets you hand-on to help improve professional skills and knowledge, You'll interact with concepts and solve fun problem in math,science, and computer science</p>
        </div>
       </div>
       

      <button className="bg-black   text-white font-bold py-2 px-4 border   rounded">
        <NavLink to="/mathlvl">

              Continue
        </NavLink>
            </button>
     
    </div>
  );
};

export default RightPlace;


