import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import linechart from "../assets/line-chart.png";
import explore from "../assets/explore.png";
import think from "../assets/think.png";
import target from "../assets/target.png";
import eyes from "../assets/eyes.png";
 
import { FaLessThan } from "react-icons/fa6";
const Interested = () => {
  const designations = [
    {
      id: 1,
      
      img: linechart,
      description: "Learning specific skills to advance my career",
    },
    {
      id: 2,
      
      img: explore,
      description: "Explore new topics i'm intereseted in ",
    },
    {
      id: 3,
       
      img: think,
      description: "Refreshing my math foundation",
    },
    {
      id: 4,
      img:target,
      description: "Exercising my brain to stay sharp",
    },
    {
      id: 5,
      img: eyes,
      description: "Something else",
    },
  
  ];

  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (id) => {
    // if same li clicked again then is will reset it into normalform else border color will change accordingly
    console.log("before", isClicked);
    setIsClicked((prevID) => (prevID === id ? null : id));
    console.log("after", isClicked);
  };

  return (
    <div className=" relative ml-5 flex flex-col items-center justify-center">
    <div className=" relative   w-[300px]  left-2   sm:w-[450px] md:w-[500px] lg:w-[900px] lg:left-10
     top-0   h-1 bg-gray-300 ">
      <button className="text-black absolute -top-1.5 -left-5   ">
        <NavLink to="/"> <FaLessThan /> </NavLink>
    </button>
        <div className="absolute w-[120px] sm:w-[180px] lg:w-[270px]      h-1 bg-green-500">

        </div>
      </div>


      <div className="w-[300px] md:w-[500px]">

  
      <h1 className=" font-bold text-2xl m-5 p-1    ">Which are you most interested in ?</h1>
      <p className="text-xs m-3 p-2">
       choose just one. This will help us get you started but wont limit your experience
      </p>
      <div>
        {designations.map((designation) => {
          return (
            <div className="">
              <ul className="m-2   lg:w-96  ">
                <li
                  key={designation.id}
                  className={`flex items-center border rounded-lg gap-y-2 cursor-pointer p-4 ${
                    isClicked === designation.id
                      ? "border rounded-lg border-yellow-400"
                      : ""
                  }`}
                  onClick={() => handleClick(designation.id)}
                >
                  <img
                    className="mr-3"
                    src={designation.img}
                    alt="student icon"
                  ></img>
 

                  {designation.description}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      </div>
      <button>
        {isClicked !== null ? (
          <NavLink to="/rightplace">
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

export default Interested;

