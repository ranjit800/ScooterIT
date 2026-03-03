"use client"
import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const BuiltForFleet = () => {
  const features = [
    "Monitor fleet status",
    "Analyze revenue (Daily / Weekly / Monthly)",
    "Manage disputes",
    "Control user access & roles",
    "Access detailed activity logs"
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  }

  return (
    <section className="relative z-10 min-h-screen bg-white flex items-center overflow-hidden p-4 md:p-20 w-full">
      {/* Background Container */}
      <motion.div 
        className='w-full md:w-[80vw] mx-auto h-full min-h-[63vh] bg-[#F6F6F6] rounded-[32px] md:rounded-[48px] flex flex-col lg:flex-row overflow-hidden gap-3 md:gap-12'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        
        {/* Left Content Area (Mobile: Top, Desktop: Left) */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:pr-8 pl-0'>
          <div className="w-full lg:max-w-[420px]">
           <motion.div 
             className='px-6 pt-6 md:pt-0 md:px-0 mx-auto lg:mx-0'
             variants={fadeUpVariants}
           >
             <h2 className="text-2xl md:text-[32px] font-bold text-[#2F401A] leading-tight mb-2 md:mb-4">
              Built for Fleet Operators & <br className="hidden md:block"/> Smart Cities
            </h2>
            <p className="text-base md:text-[15px] text-[#2F401A]/80 font-medium mb-4 md:mb-8">
              ScooterIT provides a powerful partner dashboard:
            </p>
           </motion.div>

            {/* Mobile-only Image (between subtitle and features) */}
            <motion.div 
              className='lg:hidden relative w-full h-[220px] mb-4'
              variants={imageVariants}
            >
              <Image 
                src="/Images/b.png" 
                alt="Partner Dashboard Mobile" 
                fill 
                className="object-contain"
                priority
              />
            </motion.div>

            <div className='w-full h-full px-6 pb-6 md:p-0 mx-auto lg:mx-0'>
              <motion.ul 
                className="space-y-3 md:space-y-3 mb-6 md:mb-8"
                variants={containerVariants}
              >
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-3 md:gap-4"
                  variants={fadeUpVariants}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#758E4F] flex items-center justify-center">
                    <Check className="text-white w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <span className="text-base md:text-[15px] font-semibold text-[#758E4F] ">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button 
              className="w-full md:w-auto bg-[#2F401A] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#3d5225] transition-colors shadow-lg shadow-black/10 mt-2 md:mt-0"
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Partner Access
            </motion.button>
            </div>
          </div>
        </div>

        {/* Right Content Area (Desktop only) */}
        <motion.div 
          className='hidden lg:w-1/2 lg:flex justify-center items-end p-8 lg:p-0'
          variants={imageVariants}
        >
          <Image 
            src="/Images/BuiltForFleetImg.png" 
            alt="Partner Dashboard" 
            width={1000}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>

      </motion.div>
    </section>
  )
}

export default BuiltForFleet
