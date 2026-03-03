"use client";

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import HeroImg from '@/public/Images/HeroImg.gif'
import HeroImgUpperLayer from '@/public/Images/HeroImgUpperLayer.png'
import downloadIcon from '@/public/Images/Icons/downlodeAppIcon.png'
import partnerIcon from '@/public/Images/Icons/becomAIcon.png'

const Herosection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="sticky top-0 h-[calc(100vh-1vh)] z-0 bg-black pl-3 pr-3 pt-3 pb-3">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-4xl">
        {/* Background GIF */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image 
            src={HeroImg} 
            alt="Hero Background" 
            fill 
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Upper Layer Image/Overlay */}
        <motion.div 
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <Image 
            src={HeroImgUpperLayer} 
            alt="Hero Overlay" 
            fill 
            className="object-cover"
          />
        </motion.div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-brand-lime/20 to-transparent z-15"></div>

        {/* Content */}
        <motion.div 
          className="relative z-20 container mx-auto px-6 text-center max-w-4xl pt-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight mb-6 drop-shadow-sm"
            variants={itemVariants}
          >
            One Platform. Every Scooter. <br className="hidden md:block" /> Across the City.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-brand-dark/90 font-medium mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Access multiple scooter providers in one seamless mobility experience – built for users, operators, and smart cities.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-brand-lime text-brand-dark px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg w-full sm:w-auto"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src={downloadIcon} 
                alt="Download App Icon" 
                width={24} 
                height={24} 
              />
              <span>Download the App</span>
            </motion.button>

            <motion.button 
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg w-full sm:w-auto"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src={partnerIcon} 
                alt="Become Partner Icon" 
                width={24} 
                height={24} 
              />
              <span>Become a Fleet Partner</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Herosection

