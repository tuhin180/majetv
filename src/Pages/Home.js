import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Component/Card";
const Home = () => {
  const [tvData, setTvData] = useState();
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setTvData(response.data))
      .catch((error) => console.error(error));
  }, []);
  if (!tvData)
    return (
      <div className="flex justify-center items-center text-xl mt-2">
        Loading <span className="animate-pulse">...</span>
      </div>
    );

  return (
    <div className="w-11/12 mx-auto my-3">
      <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tvData
          .filter(
            (cardData) =>
              cardData.show.image &&
              (cardData.show.image.medium || cardData.show.image.regular)
          )
          .map((cardData, index) => (
            <Card key={index} cardData={cardData} />
          ))}
      </div>
    </div>
  );
};

export default Home;
