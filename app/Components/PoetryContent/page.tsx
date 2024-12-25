// components/PoetryContent.tsx
'use client'
import React from "react";

interface PoetryContentProps {
  content: string;
}

const PoetryContent: React.FC<PoetryContentProps> = ({ content }) => {
  return (
    <div className="mt-4 text-gray-300 leading-relaxed whitespace-pre-line">
      {content}
    </div>
  );
};

export default PoetryContent;
