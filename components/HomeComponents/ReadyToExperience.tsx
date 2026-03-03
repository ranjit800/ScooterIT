"use client"
import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const ReadyToExperience = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.05, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  }

  return (
    <section className="relative z-10 bg-white flex items-center overflow-hidden p-4 md:p-20 w-full">
      <motion.div 
        className="w-full md:w-[80vw] mx-auto min-h-[60vh] md:min-h-[50vh] bg-black rounded-[32px] md:rounded-3xl flex flex-col md:flex-row relative overflow-hidden shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        
        {/* Image - Top on Mobile, Right on Desktop */}
        <motion.div 
          className="relative md:absolute md:right-0 md:top-0 h-[350px] md:h-full w-full md:w-[60%] z-10"
          variants={imageVariants}
        >
          {/* Gradients */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10 hidden md:block"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10 md:hidden"></div>
          <Image 
            src="/Images/ready.png" 
            alt="Ready to Experience" 
            fill 
            className="object-cover object-center md:object-right" 
            priority
          />
        </motion.div>

        {/* Content - Below Image on Mobile, Left on Desktop */}
        <div className="relative z-20 flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 xl:pl-24 xl:pr-10 text-left">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-white mb-4 md:mb-6 leading-tight tracking-wide"
            variants={fadeUpVariants}
          >
            Ready to Experience <br className="md:hidden"/> Unified Mobility?
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-white/70 mb-8 md:mb-10 max-w-sm md:mx-0 font-medium leading-relaxed"
            variants={fadeUpVariants}
          >
            Download ScooterIT today and transform the way you move.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-4 items-start"
            variants={fadeUpVariants}
          >
            <motion.button 
              className="w-fit flex items-center justify-center gap-3 bg-[#C2F865] text-[#1a1a1a] px-6 py-3 rounded-xl font-bold text-[15px] md:text-[16px] md:px-8 md:py-4 hover:bg-[#b5eb5a] transition-colors shadow-lg shadow-black/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 384 512" className="w-5 h-5 shrink-0" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Download App
            </motion.button>
            <motion.button 
              className="w-fit flex items-center justify-center gap-3 bg-white text-[#1a1a1a] px-6 py-3 rounded-xl font-bold text-[15px] md:text-[16px] md:px-8 md:py-4 hover:bg-gray-100 transition-colors shadow-lg shadow-black/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 512 512" className="w-5 h-5 shrink-0" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              Download App
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ReadyToExperience
