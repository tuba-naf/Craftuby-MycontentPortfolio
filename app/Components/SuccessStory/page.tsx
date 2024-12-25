// pages/success-story.tsx
import React from "react";
import SuccessStorySection from "../StorySection/page";

const SuccessStory: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-serif font-bold text-center mb-8">Success Stories</h1>

      <SuccessStorySection
        title="Winning Scientific Poetry"
        description="Our success in the field of scientific poetry is celebrated, showcasing creativity and innovation. Winning this award has been a pivotal moment in highlighting the importance of science in artistic expression."
        image="/image/wi.jpg"  // Replace with actual image path
      />

      <SuccessStorySection
        title="Recognition at Biocon"
        description="Being recognized at Biocon has been an honor, marking a significant achievement in both the scientific and artistic communities. It reflects my commitment to innovation and excellence."
        image="/image/journey.jpg"  // Replace with actual image path
      />

      <SuccessStorySection
        title="Fisrt Position in Poetry Competition"
        description="Awarded first place in a poetry competition conducted by Spirit Enterprises. The competition recognized exceptional creativity, originality, and literary expression. This achievement reflects my ability to craft impactful and evocative poetry, resonating deeply with both the judges and the audience."
        image="/image/award.jpg"  // Replace with actual image path
      />
    </div>
  );
};

export default SuccessStory;
