"use client";

import React from "react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  onReadMore: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, image, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
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
