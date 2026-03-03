"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion, Variants } from 'framer-motion'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import BackgroudImg from '@/public/Images/HowItWorksImages/backgroundImg.png'
import Step1Img from '@/public/Images/HowItWorksImages/cardOne.png'
import Step1ImgSub from '@/public/Images/HowItWorksImages/SubCardOne.png'
import Step2Img from '@/public/Images/HowItWorksImages/cardTwo.png'
import Step2ImgSub from '@/public/Images/HowItWorksImages/subCardTwo.png'
import Step3Img from '@/public/Images/HowItWorksImages/cardThree.png'
import Step3ImgSub from '@/public/Images/HowItWorksImages/subCardThree.png'
import Step4Img from '@/public/Images/HowItWorksImages/cardFour.png'
import Step4ImgSub from '@/public/Images/HowItWorksImages/SubCardFour.png'

const steps = [
  {
    title: "Find Nearby",
    description: "Open the app and view scooters from multiple providers around you.",
    mainImg: Step1Img,
    subImg: Step1ImgSub,
    stepLabel: "Step 1",
  },
  {
    title: <>Unlock<br/>Instantly</>,
    description: "Scan QR or connect via Bluetooth to start your ride.",
    mainImg: Step2Img,
    subImg: Step2ImgSub,
    stepLabel: "Step 2",
  },
  {
    title: <>Ride<br/>Seamlessly</>,
    description: "Live tracking, pause anytime, follow smart parking zones.",
    mainImg: Step3Img,
    subImg: Step3ImgSub,
    stepLabel: "Step 3",
  },
  {
    title: "Pay Securely",
    description: "Automatic billing with clear ride summary.",
    mainImg: Step4Img,
    subImg: Step4ImgSub,
    stepLabel: "Step 4",
  }
]

const StepCard = ({ step, index }: { step: any, index: number }) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1 
      }
    }
  }

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: index * 0.1 + 0.3 }
    }
  }

  const subImageVariants: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        type: "spring",
        stiffness: 100,
        delay: index * 0.1 + 0.5 
      }
    }
  }

  return (
    <motion.div 
      className="w-[33vh] h-[38vh] rounded-2xl flex flex-col relative shrink-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0 }}
      variants={cardVariants}
    >
      {/* Step Badge Overlap */}
      <motion.div 
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30"
        whileHover={{ scale: 1.1 }}
      >
        <div className="bg-[#C2F865] text-[#2F401A] px-10 py-3 rounded-xl font-medium text-base shadow-md whitespace-nowrap">
          {step.stepLabel}
        </div>
      </motion.div>

      {/* Top Section (White Border around Black Inner) */}
      <div className="relative w-full h-1/2 bg-white pl-0.5 pr-0.5 pt-0.5 rounded-t-2xl">
        <div className="relative bg-black w-full h-full rounded-t-2xl">
          {/* Image Container - h-[27vh] centered absolutely */}
          <div className="absolute bottom-0 w-full h-[27vh] z-30">
            {/* Main Phone Image */}
            <motion.div 
              className="absolute bottom-0 w-full h-[90%] z-10"
              variants={imageVariants}
            >
              <Image 
                src={step.mainImg} 
                alt={step.stepLabel} 
                fill 
                className="object-contain object-bottom" 
              />
            </motion.div>
            {/* Sub Image (Offset UI Card) */}
            <motion.div 
              className="absolute left-[60%] top-1/2 w-[85%] z-20"
              variants={subImageVariants}
            >
              <Image 
                src={step.subImg} 
                alt="Detail UI" 
                width={100} 
                height={100} 
                quality={100} 
                className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]" 
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section (White) */}
      <div className="w-full h-1/2 bg-white rounded-b-2xl p-6 pb-14 grow text-left relative flex flex-col justify-start">
        <h3 className="text-xl font-bold text-[#2F401A] mb-3 leading-tight ">
          {step.title}
        </h3>
        <p className="text-[#2F401A]/80 text-sm font-medium leading-normal">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="relative z-10 bg-black py-24 px-4 overflow-hidden">
      {/* Background with Dark Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <Image 
          src={BackgroudImg} 
          alt="How It Works Background" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-28 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={headerVariants}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-wider">How It Works</h2>
          <p className="text-lg md:text-2xl  opacity-90">It's More Than a Scooter App.</p>
        </motion.div>

        {/* Desktop View: Flex Grid */}
        <div className="hidden lg:flex justify-center gap-4 xl:gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet View: Swiper Slider */}
        <div className="lg:hidden w-full pb-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={"auto"}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="how-it-works-swiper overflow-visible!"
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <StepCard step={step} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .how-it-works-swiper .swiper-pagination-bullet {
          background: #C2F865;
          opacity: 0.5;
        }
        .how-it-works-swiper .swiper-pagination-bullet-active {
          background: #C2F865;
          opacity: 1;
        }
        .how-it-works-swiper .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
