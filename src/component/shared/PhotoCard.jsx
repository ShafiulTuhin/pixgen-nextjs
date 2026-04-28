import { Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { SlCloudDownload } from "react-icons/sl";

const PhotoCard = ({ data }) => {
  return (
    <div className="border p-2">
      <div className="relative w-full aspect-square">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="rounded-lg"
        />
      </div>

      <h2 className="font-medium text-2xl text-[#424242] my-4">{data.title}</h2>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-1">
          <AiOutlineLike /> {data.likes}
        </p>
        <Separator orientation="vertical" />
        <p className="flex items-center gap-1">
          <SlCloudDownload /> {data.downloads}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
