"use client";

import React from "react";

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
        <img src={image} alt={title} className="w-full h-64 object-cover rounded mb-4" />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

export default ArticleContent;
