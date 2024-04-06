import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { AiOutlineStar } from "react-icons/ai";
const Star = ({ stars }) => {
  const ratingStars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
   
    return (
      <span>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  console.log("your stars -> ", stars);
  return <div  className="flex text-yellow-500  text-2xl mb-2  ">{ratingStars}</div>;
};

export default Star;
