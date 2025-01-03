"use client";

import React from "react";
import Image from "next/image"; // Import for optimized images

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  onReadMore: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, image, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg" 
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{excerpt}</p>
        <button
          onClick={onReadMore}
          className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
