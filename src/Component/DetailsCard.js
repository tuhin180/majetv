import React, { useState } from "react";
import BookingModal from "./BookingModal";

const DetailsCard = ({ singleCard }) => {
  const { name, language, genres, rating, image, summary, premiered } =
    singleCard;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col rounded-xl bg-white bg-transparent bg-clip-border shadow-none p-4">
      <div className="flex">
        <div className="w-1/3 ">
          <img
            className="rounded-lg w-full h-[500px]"
            src={image?.original}
            alt="card"
          />
        </div>
        <div className="text-secondary w-2/3 flex-1 p-6">
          <span className="font-bold uppercase text-blue-500">{name}</span>
          <div>
            <p>Rating: {rating.average}</p>
            <h1>Language: {language}</h1>
            {genres.map((genre) => (
              <span className="mr-4" key={genre}>
                {genre}
              </span>
            ))}
          </div>

          <p className="mb-5 opacity-80">
            {summary}{" "}
            <a href="#" className="text-blue-400">
              Read More
            </a>
            .
          </p>
          <p>{premiered}</p>
          <BookingModal
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
            singleCard={singleCard}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-3 bg-blue-700 px-3 py-2 text-white rounded-lg hover:bg-black focus:outline-none focus:ring focus:ring-violet-300"
          >
            Book a movie ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
