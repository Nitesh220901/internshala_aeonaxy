import React, { useEffect, useState } from "react";
import locker from "../assets/locker.png";
import { MoonLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const shuffledCards = shuffleArray(cards);
    const selectedCards = shuffledCards.slice(0, 2);
    setRandomCards(selectedCards);
  }, []);

  const cards = [
    {
      id:1,
      title: "Introductory Math" ,
      desc : "Build your foundational skills in algebra, geometry , and probability" ,
      img: locker,
      rating : 5 ,
    } ,
    {
      id:2,
      title: "Foundational Math" ,
      desc : "Build your foundational skills in algebra, geometry , and probability" ,
      img: locker,
      rating:2
    } ,
    {
      id:3,
      title: "Intermediate Algebra" ,
      desc : "Build your foundational skills in algebra, geometry , and probability" ,
      img: locker,
      rating:3
    } ,
    {
      id:4,
      title: "Calculus Math" ,
      desc : "Build your foundational skills in algebra, geometry , and probability" ,
      img: locker,
      rating:4
    } ,
    {
      id:5,
      title: "Mathematical Thinking" ,
      desc : "Build your foundational skills in algebra, geometry , and probability" ,
      img: locker,
      rating:1
    } ,
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (id) => {
    // if same li clicked again then is will reset it into normalform else border color will change accordingly
    console.log("before", isClicked);
    setIsClicked((prevID) => (prevID === id ? null : id));
    console.log("after", isClicked);
  };
  return (
    <div className="flex items-center justify-center">
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-32 gap-10">
          <MoonLoader color="#d7a136" />
          <h1 className="font-semibold text-center ml-5">Finding learning path recommendations for you based on your responses</h1>
        </div>
      ) : (
        <div className="w-[300px] lg:w-full flex flex-col items-center justify-center">
          <h1 className="md:text-3xl font-bold mb-5">Learning paths based on your answers</h1>
          <p className="text-sm text-center">Choose one to get started. You can switch anytime.</p>

          {/* Render random cards */}
          <div className="flex flex-col  md:flex-row gap-8 m-8">
            {randomCards.map((card) => (
              <div
                key={card.id}
                className={`relative cursor-pointer flex items-center w-[300px] md:w-[400px] ml-8 mt-5 border p-2 rounded-md
                ${
                    isClicked === card.id
                      ? "border rounded-lg border-yellow-400"
                      : ""
                  }
                `}
                onClick={() => handleClick(card.id)}
              >
                <p>
                  <span className="font-bold">{card.title}</span> {card.desc}
                </p>
                <img src={card.img} alt="locker image" className="w-[154px] md:w-[200px]" />
                {card.rating === Math.max(...randomCards.map(card => card.rating)) && (
                  <div className="absolute bg-yellow-500 rounded-full px-3 -top-3 left-20  md:-top-3 md:left-[120px] font-bold">
                    Most Popular
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="bg-black text-white rounded-md px-3 py-1">
            <NavLink to="/">Home</NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
