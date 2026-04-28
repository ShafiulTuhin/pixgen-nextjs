"use client";
import { Button, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
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
          sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
          className="rounded-xl object-cover"
        />
        <Chip className="absolute top-2 left-2">{data.category}</Chip>
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
      <Link href={`/all-photos/${data.id}`}>
        <Button className="w-full mt-5 bg-gradient-to-r from-purple-500 to-pink-500 font-bold py-3 cursor-pointer">
          View
        </Button>
      </Link>
    </div>
  );
};

export default PhotoCard;
