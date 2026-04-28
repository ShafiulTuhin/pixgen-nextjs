import PhotoDetails from "@/component/shared/PhotoDetails";
import { getData } from "@/lib/api";
import Image from "next/image";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const aiData = await getData();

  const data = aiData.find((d) => d.id == id);
  console.log(data);

  return (
    <div>
      <PhotoDetails data={data} />
    </div>
  );
};

export default PhotoDetailsPage;
