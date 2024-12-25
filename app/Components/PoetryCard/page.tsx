import React from "react";

interface PoetryCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const PoetryCard: React.FC<PoetryCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-gray-800 text-white p-8 mb-8 rounded-lg shadow-lg">
      {/* Vertical layout with centered elements */}
      <div className="flex flex-col items-center justify-center">
        {/* Title and Description Section */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-300 mt-2">{description}</p>
        </div>

        {/* Image Section - ensure whole image shows */}
        <img
          className="w-full max-w-lg h-auto object-contain rounded-lg mt-4" // Adjust width and height dynamically
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default PoetryCard;
