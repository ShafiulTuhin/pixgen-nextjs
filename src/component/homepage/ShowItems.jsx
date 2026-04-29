import { getData } from "@/lib/api";
import React from "react";
import PhotoCard from "../shared/PhotoCard";

const ShowItems = async () => {
  const aiData = await getData();

  return (
    <div className="px-4 lg:px-0 container mx-auto py-10">
      <h2 className="text-center font-bold text-3xl  bg-clip-text text-transparent">
        Top Generations
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-5">
        {aiData.slice(0, 9).map((data) => (
          <PhotoCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ShowItems;
