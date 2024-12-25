"use client";

import React from "react";
import Image from "next/image"; // Import for optimized images

// Define the props interface
interface PoetryCardProps {
  title: string;
  description: string;
  image: string;
}

const PoetryCard: React.FC<PoetryCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 text-white p-8 mb-8 rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-300 mt-2">{description}</p>
        </div>
        <Image
          className="rounded-lg mt-4"
          src={image}
          alt={title}
          width={400} // Adjust dimensions for optimal loading
          height={300}
        />
      </div>
    </div>
  );
};

export default PoetryCard;
