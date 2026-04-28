"use client";

import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
        <div className="max-w-2xl space-y-6">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Generating idea into{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Stunning AI art
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg">
            Generate high-quality images from simple text prompts
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary Button */}
            <button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
              Generate Now
            </button>

            {/* Secondary Button */}
            <button className="px-6 py-3 rounded-lg font-semibold border border-white text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
