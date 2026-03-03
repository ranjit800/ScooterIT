"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react';
const partnerLogos = [
  "/Images/PartnersImages/partnersOne.png",
  "/Images/PartnersImages/partnersTwo.png",
  "/Images/PartnersImages/partnersThree.png",
  "/Images/PartnersImages/partnersFour.png",
  "/Images/PartnersImages/partnersFive.png",
  "/Images/PartnersImages/partnersSix.png",
]

const TrustedPartners = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth parallax rise effect that creates the "overlap" feel
  const translateY = useTransform(scrollYProgress, [0, 0.4], [250, 0])

  return (
    <div ref={containerRef} className="relative z-10 bg-black ">
      <section 
        className="bg-white rounded-t-3xl pt-32 pb-24 px-6 md:px-12  relative"
      >
        <div className="container mx-auto max-w-[1280px]">
          {/* Partners Header & Logo Grid */}
          <div className="text-center mb-32">
            <p className="text-[#00000099] font-bold text-xl mb-16 uppercase tracking-[0.2em]">Our Trusted Partners</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 items-center justify-items-center px-4">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="w-full flex justify-center  transition-all duration-500 hover:scale-110 cursor-pointer">
                  <Image 
                    src={logo} 
                    alt={`Partner ${index + 1}`} 
                    width={180} 
                    height={60} 
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

<div className="w-full  bg-white">
      
      {/* ==================== THE PROBLEM SECTION ==================== */}
      <div className="relative bg-gray-50 rounded-[30px] shadow-sm border border-gray-100 mb-14 overflow-visible">
        
        {/* Badge / Tab - Center on mobile, offset on desktop */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 lg:left-14 lg:translate-x-0 z-20">
          <div className="bg-[#C2F865] text-gray-900 px-8 py-3 rounded-xl shadow-sm whitespace-nowrap">
            The Problem
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:p-6 p-4 lg:p-12 pt-10 md:pt-16 lg:pt-16 md:pb-0 pb-7  gap-10">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden">
               <img 
                src="/Images/ProblemSolutionImages/problem.png" 
                alt="Urban mobility fragmentation problem" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-3xl font-bold text-[#2F401A] leading-tight">
              Urban Mobility Is Fragmented
            </h2>
            <p className="text-[#2F401A]/80 text-lg leading-relaxed">
              Cities today operate with multiple scooter providers – each requiring separate apps, pricing models, and ride rules.
            </p>

            <ul className="space-y-4 mt-4">
              {[
                "Switching between apps wastes time",
                "Inconsistent pricing creates confusion",
                "Fleet operators lack centralized oversight",
                "Cities struggle with compliance tracking"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 w-6 h-6 rounded-full bg-[#728955] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                  </div>
                  <span className="text-[#2F401A]  md:text-lg text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ==================== THE SOLUTION SECTION ==================== */}
      <div className="relative bg-[#2C3B24] rounded-[30px] shadow-xl text-white overflow-visible">
        
        {/* Badge / Tab (Right Side) - Center on mobile, offset on desktop */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 lg:left-auto lg:right-14 lg:translate-x-0 z-20">
          <div className="bg-[#C2F865] text-gray-900 px-8 py-3 rounded-xl shadow-sm whitespace-nowrap">
            The Solution
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:p-6 p-4 lg:p-12 pt-10 md:pt-16 lg:pt-16 md:pb-0 pb-7  gap-10">
          
          {/* Text Side (Left on Desktop) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl lg:text-3xl font-bold text-[#FFFFFF] leading-tight">
              All Scooters. One Intelligent Platform.
            </h2>
            <p className="text-[#FFFFFF]/80 text-lg leading-relaxed">
              ScooterIT aggregates multiple providers into a single real-time ecosystem.
            </p>

            <ul className="space-y-4 mt-4">
               {[
                "Real-time availability",
                "Transparent pricing",
                "Secure payments",
                "Seamless unlocking"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  {/* Lighter circle for dark background */}
                  <div className="flex-shrink-0 mt-1 mr-4 w-6 h-6 rounded-full bg-[#9ECB5D] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#FFFFFF]" strokeWidth={4} />
                  </div>
                  <span className="text-[#FFFFFF] md:text-lg text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden">
               <img 
                src="/Images/ProblemSolutionImages/solution.png" 
                alt="Unified scooter platform solution" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
        </div>
      </section>
    </div>
  )
}

export default TrustedPartners