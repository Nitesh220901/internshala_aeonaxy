import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaLessThan } from "react-icons/fa6";
const MathLvl = () => {
  const designations = [
    {
      id: 1,

      formula: "5 × 1/2 = ?",
      topic: "Arithmetic",
      level: "Introductory",
    },
    {
      id: 2,
      formula: "3x + 5 = 4",
      topic: "Basic Algebra",
      level: "Foundational",
    },
    {
      id: 3,

      formula: "x = (-b ± √b^2-4ac)/2a",
      topic: "Intermediate Algebra",
      level: "Intermediate",
    },
    {
      id: 4,
      formula: "∫x^2 dx = ?",
      topic: "Calculus",
      level: "Advance",
    },
  ];

  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (id) => {
    console.log("before", isClicked);
    setIsClicked((prevID) => (prevID === id ? null : id));
    console.log("after", isClicked);
  };

  return (
    <div className=" relative ml-5 flex flex-col items-center justify-center">
      <div className=" relative   w-[300px] left-2  sm:w-[500px] lg:w-[900px] lg:left-10    top-0   h-1 bg-gray-300 ">
      <button className="text-black absolute -top-1.5 -left-5   ">
        <NavLink to="/rightplace"> <FaLessThan /> </NavLink>
    </button>
        <div className="absolute  w-[250px] sm:w-[400px] lg:w-[720px] h-1 bg-green-500">

        </div>
      </div>
      <h1 className=" font-bold text-2xl mt-10 w-[320px] md:w-[500px] md:ml-14 ">
       What is your math comfort level ?
      </h1>
      <p className="text-xs m-3 w-[320px]  md:w-[500px] md:ml-14">
        choose the highest level you feel confident in - you can always adjust later.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 m-2 gap-4">
        {designations.map((designation) => {
          return (
            <div className="">
              <ul className=" m-2 w-26 ">
                <li
                  key={designation.id}
                  className={`flex flex-col items-center border rounded-lg gap-y-2 cursor-pointer p-4 ${
                    isClicked === designation.id
                      ? "border rounded-lg border-yellow-400"
                      : ""
                  }`}
                  onClick={() => handleClick(designation.id)}
                >

                  <div className="  mb-2">

                     <h1>{designation.formula}</h1> 
                  <h2 className="font-bold ">{designation.topic}</h2>
                  <p className="text-gray-400">{designation.level}</p>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <button>
        {isClicked !== null ? (
          <NavLink to="/review">
            <button className="bg-black   text-white font-bold py-2 px-4 border   rounded">
              Continue
            </button>
          </NavLink>
        ) : (
          <button className="bg-gray-200   text-white font-bold py-2 px-4 border   rounded">
            Continue
          </button>
        )}
      </button>
     
    </div>
  );
};

export default MathLvl;
