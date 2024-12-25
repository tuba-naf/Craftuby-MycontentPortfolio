import React from "react";
import Image from "next/image"; // Import Image component from next/image

interface SuccessStorySectionProps {
  title: string;
  description: string;
  image: string;
}

const SuccessStorySection: React.FC<SuccessStorySectionProps> = ({
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
        <Image
          className="w-full max-w-lg h-auto object-contain rounded-lg mt-4"
          src={image}
          alt={title}
          width={800} // Define width (adjust as needed)
          height={450} // Define height (adjust as needed)
        />
      </div>
    </div>
  );
};

export default SuccessStorySection;
