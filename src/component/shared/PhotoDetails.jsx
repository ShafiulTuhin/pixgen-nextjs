"use client";
import Image from "next/image";
import React from "react";

const PhotoDetails = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>

          {/* Category + Model */}
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
              {data.category}
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full">
              {data.model}
            </span>
          </div>

          {/* Prompt */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Prompt</h3>
            <p className="text-gray-600">{data.prompt}</p>
          </div>

          {/* Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Resolution</p>
              <p className="font-medium">{data.resolution}</p>
            </div>
            <div>
              <p className="text-gray-500">Created</p>
              <p className="font-medium">
                {new Date(data.createdAt).toDateString()}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm">
            <p>❤️ {data.likes} Likes</p>
            <p>⬇️ {data.downloads} Downloads</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              Download
            </button>
            <button className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition">
              Copy Prompt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
