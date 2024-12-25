"use client";

import React from "react";
import Image from "next/image"; // Import for optimized images

interface ArticleContentProps {
  title: string;
  content: string;
  image: string;
  onBack: () => void;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ title, content, image, onBack }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <button
        onClick={onBack}
        className="mb-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Back
      </button>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="relative w-full h-64 mb-4">
          <Image 
            src={image} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded" 
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

export default ArticleContent;
