'use client'
import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="bg-[#ddd9d9] py-8 px-4 mt-12">
      {/* About Section */}
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/image/ME.png" // Replace this with your actual image path
            alt="About Us"
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            I am Tuba Nafees, a passionate learner, enthusiastic writer, and artistic soul. Academically, I hold a degree in Biotechnology from the University of Karachi, where I was honored with two Gold medals. Since childhood, I have nurtured my artistic interests, and after graduation, I delved deeper into expressing them through my literary pieces. I firmly believe that words possess life-changing potential. They empower my thoughts and bless me with the freedom of expression, empowering me as a strong woman.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
