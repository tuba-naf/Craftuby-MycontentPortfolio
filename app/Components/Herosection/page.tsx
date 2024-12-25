'use client'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white flex items-center justify-center sm:pt-4 md:pt-4 lg:pt-4">
        <div className="flex items-center justify-center w-full">
          <Image
            src="/image/COVERPAGE.png"
            alt="Hero Image"
            layout="intrinsic"
            width={800}
            height={450}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/image/ME.png"// Replace this with your image path
              alt="About Us"
              layout="intrinsic"
              width={400}
              height={400}
              className="object-cover rounded-lg"
              
            />
          </div>

          

  {/* Text Section */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
    <h2 className="text-2xl font-bold mb-4">Do You Want to Know More?</h2>
    <p className="text-gray-700 text-base leading-relaxed text-justify">
      I am Tuba Nafees, a passionate learner, enthusiastic writer, and artistic soul. Academically, I hold a degree in Biotechnology from the University of Karachi, where I was honored with two Gold medals. Since childhood, I have nurtured my artistic interests, and after graduation, I delved deeper into expressing them through my literary pieces. I firmly believe that words possess life-changing potential. They empower my thoughts and bless me with the freedom of expression, empowering me as a strong woman.
    </p>
  </div>
</div>

        </div>
      </div>
    
  )
}

export default Hero
