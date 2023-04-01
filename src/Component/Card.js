import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardData }) => {
  const { show } = cardData;
  const { name, image, rating, summary, language, id } = show;

  return (
    <div className="w-[300px] h-[420px]  bg-transparent cursor-pointer group perspective ">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <img src={image?.medium} alt="hello" className="w-full h-full " />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="my-2"> Rating: {rating?.average}</p>
            <p className="my-2"> language: {language}</p>
            <p>{summary.slice(0, 200)}...</p>

            <Link
              to={`/shows/${id}`}
              className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
            >
              MoreDetails
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
