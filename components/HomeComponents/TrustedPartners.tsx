"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { Check } from 'lucide-react';
import Marquee from "react-fast-marquee";

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
  
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div ref={containerRef} className="relative z-10 bg-black overflow-hidden">
      <section 
        className="bg-white rounded-t-3xl md:pt-24 pt-10 md:pb-24 pb-10 px-3 md:px-12 relative overflow-hidden"
      >
        <div className="container mx-auto max-w-[1280px]">
          {/* Partners Header & Logo Section */}
          <div className="text-center mb-32">
            <motion.p 
              className="text-[#00000099] font-semibold text-xl md:mb-16 mb-8 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeUpVariants}
            >
              Our Trusted Partners
            </motion.p>
            
            {/* Desktop View: Grid */}
            <motion.div 
              className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-16 items-center justify-items-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={containerVariants}
            >
              {partnerLogos.map((logo, index) => (
                <motion.div 
                  key={index} 
                  className="w-full flex justify-center transition-all duration-500 hover:scale-110 cursor-pointer"
                  variants={fadeUpVariants}
                >
                  <Image 
                    src={logo} 
                    alt={`Partner ${index + 1}`} 
                    width={180} 
                    height={60} 
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile View: Marquee */}
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            >
              <Marquee gradient={false} speed={40} pauseOnHover={true}>
                {partnerLogos.map((logo, index) => (
                  <div key={index} className="mx-8 flex justify-center items-center h-16">
                    <Image 
                      src={logo} 
                      alt={`Partner ${index + 1}`} 
                      width={120} 
                      height={40} 
                      className="object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </motion.div>
          </div>

          <div className="w-full bg-white">
            {/* ==================== THE PROBLEM SECTION ==================== */}
            <motion.div 
              className="relative bg-gray-50 rounded-[30px] shadow-sm border border-gray-100 mb-14 overflow-visible"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariants}
            >
              {/* Badge / Tab - Center on mobile, offset on desktop */}
              <motion.div 
                className="absolute -top-7 left-1/2 -translate-x-1/2 lg:left-14 lg:translate-x-0 z-20"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-[#C2F865] text-gray-900 px-8 py-3 rounded-xl shadow-sm whitespace-nowrap">
                  The Problem
                </div>
              </motion.div>

              <div className="flex flex-col lg:flex-row items-center md:p-6 p-4 lg:p-12 pt-10 md:pt-16 lg:pt-16 md:pb-0 pb-7 gap-10">
                {/* Image Side */}
                <motion.div 
                  className="w-full lg:w-1/2"
                  variants={slideInLeft}
                >
                  <div className="relative rounded-2xl overflow-hidden">
                     <img 
                      src="/Images/ProblemSolutionImages/problem.png" 
                      alt="Urban mobility fragmentation problem" 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                </motion.div>

                {/* Text Side */}
               
                <motion.div 
                  className="w-full lg:w-1/2 space-y-6"
                  variants={containerVariants}
                >
                  <motion.h2 
                    className="text-3xl lg:text-3xl font-bold text-[#2F401A] leading-tight"
                    variants={fadeUpVariants}
                  >
                    Urban Mobility Is Fragmented
                  </motion.h2>
                  <motion.p 
                    className="text-[#2F401A]/80 text-lg leading-relaxed"
                    variants={fadeUpVariants}
                  >
                    Cities today operate with multiple scooter providers – each requiring separate apps, pricing models, and ride rules.
                  </motion.p>

                  <motion.ul className="space-y-4 mt-4" variants={containerVariants}>
                    {[
                      "Switching between apps wastes time",
                      "Inconsistent pricing creates confusion",
                      "Fleet operators lack centralized oversight",
                      "Cities struggle with compliance tracking"
                    ].map((text, idx) => (
                      <motion.li key={idx} className="flex items-start" variants={fadeUpVariants}>
                        <div className="flex-shrink-0 mt-1 mr-4 w-6 h-6 rounded-full bg-[#728955] flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                        </div>
                        <span className="text-[#2F401A] md:text-lg text-base">{text}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>

            {/* ==================== THE SOLUTION SECTION ==================== */}
            <motion.div 
              className="relative bg-[#2C3B24] rounded-[30px] shadow-xl text-white overflow-visible"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariants}
            >
              {/* Badge / Tab (Right Side) - Center on mobile, offset on desktop */}
              <motion.div 
                className="absolute -top-7 left-1/2 -translate-x-1/2 lg:left-auto lg:right-14 lg:translate-x-0 z-20"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-[#C2F865] text-gray-900 px-8 py-3 rounded-xl shadow-sm whitespace-nowrap">
                  The Solution
                </div>
              </motion.div>

              <div className="flex flex-col lg:flex-row items-center md:p-6 p-4 lg:p-12 pt-10 md:pt-16 lg:pt-16 md:pb-0 pb-7 gap-10">
                {/* Text Side (Left on Desktop) */}
                <motion.div 
                  className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6"
                  variants={containerVariants}
                >
                  <motion.h2 
                    className="text-3xl lg:text-3xl font-bold text-[#FFFFFF] leading-tight"
                    variants={fadeUpVariants}
                  >
                    All Scooters. One Intelligent Platform.
                  </motion.h2>
                  <motion.p 
                    className="text-[#FFFFFF]/80 text-lg leading-relaxed"
                    variants={fadeUpVariants}
                  >
                    ScooterIT aggregates multiple providers into a single real-time ecosystem.
                  </motion.p>

                  <motion.ul className="space-y-4 mt-4" variants={containerVariants}>
                     {[
                      "Real-time availability",
                      "Transparent pricing",
                      "Secure payments",
                      "Seamless unlocking"
                    ].map((text, idx) => (
                      <motion.li key={idx} className="flex items-start" variants={fadeUpVariants}>
                        {/* Lighter circle for dark background */}
                        <div className="flex-shrink-0 mt-1 mr-4 w-6 h-6 rounded-full bg-[#9ECB5D] flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-[#FFFFFF]" strokeWidth={4} />
                        </div>
                        <span className="text-[#FFFFFF] md:text-lg text-base">{text}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                {/* Image Side */}
                <motion.div 
                  className="w-full lg:w-1/2 order-1 lg:order-2"
                  variants={slideInRight}
                >
                  <div className="relative rounded-2xl overflow-hidden">
                     <img 
                      src="/Images/ProblemSolutionImages/solution.png" 
                      alt="Unified scooter platform solution" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrustedPartners
