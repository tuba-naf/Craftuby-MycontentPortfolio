// components/PoetryList.tsx
import React from "react";
import PoetryCard from "../PoetryCard/page"; 

const poetryDetails = [
  {
    id: 1,
    title: "Visionary Women",
    description: "",
    image: "/image/Visionary Women.jpg",
  },
  {
    id: 2,
    title: "The Guardians' Hypocricy",
    description: "While the world speaks of human rights, the reality on the ground tells a different story. Palestinian children face a future where the hope for peace is but a distant dream, and their cries are drowned out by the noise of political games.",
    image: "/image/PALESTINE.jpg", // Ensure correct image path
  },
  
  {
    id: 3,
    title: "Hero's Solitude",
    description: "",
    image: "/image/Hero's Solitude.jpg",
  },
];

const PoetryList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {poetryDetails.map((poem) => (
        <PoetryCard
          key={poem.id}
          id={poem.id}
          title={poem.title}
          description={poem.description}
          image={poem.image}
        />
      ))}
    </div>
  );
};

export default PoetryList;
