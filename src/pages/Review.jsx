import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cheers from "../assets/cheers.png";
import Star from "../components/Star";
import { FaLessThan } from "react-icons/fa6";

const Review = () => {
 

  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (id) => {
    console.log("before", isClicked);
    setIsClicked((prevID) => (prevID === id ? null : id));
    console.log("after", isClicked);
  };

  const stars = 4;

  return (
    <div className=" ml-5 relative w-11/12 flex flex-col items-center justify-center">
      <div className=" relative   w-[300px] left-2  md:w-[500px] sm:mr-36 md:ml-48   lg:w-[900px] lg:left-8    top-0   h-1 bg-gray-300 ">
        <button className="text-black absolute -top-1.5 -left-5   ">
          <NavLink to="/mathlvl">
            {" "}
            <FaLessThan />{" "}
          </NavLink>
        </button>
        <div className="absolute w-[300px] sm:w-[500px] lg:w-[900px] h-1 bg-green-500"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center   ">
        <div className="w-1/2 h-[40vh] md:h-[70vh] md:mt-10 flex items-center justify-center  ">
          <img src={cheers} alt="cheer image" className="w-[250px]" />
        </div>
        <div className=" sm:w-[500px] -mt-10  sm:mt-32 ">
          <h1 className="text-3xl  font-bold mb-10 ">You're on your way!</h1>

          <Star stars={stars} />

          <p className="font-semibold mb-5 ">
            "Through its engaging and well-structred courses, Brilliant has taught me mathematical concepts that I previously struggled to understand .I now feel confident approaching both technical job interviews and real world problem solving situations." 
          </p>
          <span className="font-semibold  ">- Jacob S.</span>
        </div>
      </div>

      <button>
        <NavLink to="/success">
          <button className="bg-black   text-white font-bold py-2 px-4 border   rounded">
            Continue
          </button>
        </NavLink>
      </button>
    </div>
  );
};

export default Review;
