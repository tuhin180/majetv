import React from "react";

const Card = ({ cardData }) => {
  const { show } = cardData;
  const { name, image, rating, summary } = show;

  console.log(image);
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
            <p>{summary.slice(0, 200)}</p>
            <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
