// pages/poetry.tsx
import React from "react";
import PoetryList from "../Poetrylist/page"; 

const PoetryPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-black p-6">
      <h1 className="text-4xl font-serif font-bold text-center mb-8">Poetry</h1>
      <PoetryList />
    </div>
  );
};

export default PoetryPage;
