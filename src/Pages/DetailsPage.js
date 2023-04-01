import React from "react";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "../Component/DetailsCard";

const DetailsPage = () => {
  const singleCard = useLoaderData();
  return (
    <div>
      <DetailsCard singleCard={singleCard} />
    </div>
  );
};

export default DetailsPage;
