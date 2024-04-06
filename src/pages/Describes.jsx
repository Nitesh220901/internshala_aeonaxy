import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import student from "../assets/student.png";
import parent from "../assets/parents.png";
import professional from "../assets/professionals.png";
import other from "../assets/boy.png";
import lifelong from "../assets/lifelong-learning.png";
import teacher from "../assets/teacher.png";
const Describes = () => {
  const designations = [
    {
      id: 1,
      title: "Student",
      img: student,
      description: "or soon to be enrolled",
    },
    {
      id: 2,
      title: "Professional",
      img: professional,
      description: "pursuing a career",
    },
    {
      id: 3,
      title: "Parent",
      img: parent,
      description: "of a school-age child",
    },
    {
      id: 4,
      img: lifelong,
      title: "Lifelong learner",
    },
    {
      id: 5,
      img: teacher,
      title: "Teacher",
    },
    {
      id: 6,
      img: other,
      title: "other",
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
      <div className=" relative   w-[300px] left-2  sm:w-[500px] lg:w-[900px] lg:left-10    top-0   h-1 bg-gray-300 ">
        <div className="absolute w-[100px] h-1 bg-green-500"></div>
      </div>
      <h1 className=" font-bold text-2xl m-4 ">Which describes you best ?</h1>
      <p className="text-xs m-2">
        this will help us personalize your experience.
      </p>
      <div>
        {designations.map((designation) => {
          return (
            <div className="w-[300px ] md:w-[500px]  ">
              <ul className="m-1 w-86 ">
                <li
                  key={designation.id}
                  className={`flex items-center border rounded-lg   cursor-pointer p-3     ${
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
                  <div>
                    <span className="font-bold mr-1">
                      {`${designation.title}  `}{" "}
                    </span>
                    {designation.description}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <button>
        {isClicked !== null ? (
          <NavLink to="/interested">
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

export default Describes;
