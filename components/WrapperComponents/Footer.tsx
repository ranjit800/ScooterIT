"use client"
import React from 'react'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

import logo from "@/public/Images/logo.png"
import downloadIcon from "@/public/Images/Icons/downlodeAppIcon.png"
import footerBg from "@/public/Images/footerbottomLayer.png"
import footerGraphic from "@/public/Images/FooterBottomImage.png"

const Footer = () => {
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

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const footerGraphicVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 }
    }
  }

  return (
    <footer className="relative z-10 bg-white pt-16 md:pt-24 overflow-hidden w-full">
      <motion.div 
        className="w-full md:w-[80vw] mx-auto px-6 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        
        {/* Main Content Area: 3 Columns on Desktop, Stacked on Mobile */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 md:mb-24">
          
          {/* Column 1: Brand Info & Buttons (Desktop) */}
          <motion.div 
            className="w-full lg:max-w-[400px] flex flex-col"
            variants={fadeUpVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className=" p-3 rounded-lg">
                <Image 
                  src={logo} 
                  alt="ScooterIT Logo" 
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-[#1a1a1a]/70 text-sm md:text-base font-medium mb-10 leading-relaxed max-w-sm">
              Access multiple scooter providers in one seamless mobility experience – built for users, operators, and smart cities.
            </p>

            {/* Buttons (Hidden on mobile here, shown at the bottom instead) */}
            <div className="hidden lg:flex flex-row gap-3 w-fit">
              <motion.button 
                className="bg-[#C2F865] text-[#1a1a1a] px-6 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg whitespace-nowrap min-w-max"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                 <Image 
                   src={downloadIcon} 
                   alt="Download App Icon" 
                   width={20} 
                   height={20} 
                 />
                 <span className="text-[13px] md:text-sm">Download the App</span>
              </motion.button>
             
              <motion.button 
                className="flex items-center justify-center bg-[#2F401A] text-white px-6 py-3.5 rounded-lg font-semibold text-[13px] md:text-sm hover:bg-[#3d5225] transition-colors whitespace-nowrap min-w-max"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Fleet Partner
              </motion.button>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            className="flex flex-col w-full lg:w-auto"
            variants={fadeUpVariants}
          >
            <h4 className="text-[#1a1a1a] font-semibold text-sm md:text-base mb-4 md:mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {["About", "Partners", "Contact", "Privacy Policy", "Terms"].map((link) => (
                <motion.a 
                  key={link}
                  href="#" 
                  className="text-[#1a1a1a]/80 hover:text-[#2F401A] transition-colors text-sm md:text-base font-semibold w-fit"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Address & Support */}
          <motion.div 
            className="flex flex-col w-full lg:max-w-[300px]"
            variants={fadeUpVariants}
          >
            {/* Address */}
            <div className="mb-8 md:mb-10">
              <h4 className="text-[#1a1a1a] font-semibold text-sm md:text-base mb-3 md:mb-4">Address</h4>
              <p className="text-[#1a1a1a]/80 text-sm md:text-base font-semibold leading-relaxed mb-1">
                <span className="underline decoration-1 underline-offset-2">ScooterIT Mobility FZ-LLC</span>
              </p>
              <p className="text-[#1a1a1a]/80 text-sm md:text-base font-medium leading-relaxed">
                Office 1204, Marina Plaza Dubai Marina<br/>
                Dubai, United Arab Emirates
              </p>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[#1a1a1a] font-semibold text-sm md:text-base mb-3 md:mb-4">Support</h4>
              <div className="flex flex-col gap-3">
                <motion.a 
                  href="tel:+97140000000" 
                  className="flex items-center gap-2 text-[#1a1a1a]/80 hover:text-[#2F401A] transition-colors text-sm md:text-base font-semibold w-fit"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4 text-[#1a1a1a]/60" />
                  +971 4 000 0000
                </motion.a>
                <motion.a 
                  href="mailto:hello@scooterit.com" 
                  className="flex items-center gap-2 text-[#1a1a1a]/80 hover:text-[#2F401A] transition-colors text-sm md:text-base font-semibold w-fit"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4 text-[#1a1a1a]/60" />
                  hello@scooterit.com
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Mobile Only: Buttons at the bottom of the content area */}
          <motion.div 
            className="flex lg:hidden flex-col gap-4 w-full mt-2"
            variants={fadeUpVariants}
          >
            <motion.button 
              className="w-full flex items-center justify-center gap-2 bg-[#C2F865] text-[#1a1a1a] px-6 py-4 rounded-xl font-semibold text-[15px] hover:bg-[#b5eb5a] transition-colors"
              whileTap={{ scale: 0.98 }}
            >
              <svg viewBox="0 0 384 512" className="w-4 h-4 shrink-0" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Download the App
            </motion.button>
            <motion.button 
              className="w-full flex items-center justify-center bg-[#2F401A] text-white px-6 py-4 rounded-xl font-semibold text-[15px] hover:bg-[#3d5225] transition-colors"
              whileTap={{ scale: 0.98 }}
            >
              Become a Fleet Partner
            </motion.button>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div 
          className="w-full h-[1px] bg-black/20 mb-6 md:mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Bottom Bar: Social Icons & Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 md:mb-16"
          variants={fadeUpVariants}
        >
          
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-6 items-center">
            {/* Instagram */}
            <motion.a 
              href="#" 
              className="text-[#1a1a1a] hover:text-[#2F401A] transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <svg viewBox="0 0 448 512" className="w-[18px] h-[18px] md:w-5 md:h-5" fill="currentColor">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </motion.a>
            {/* Facebook */}
            <motion.a 
              href="#" 
              className="text-[#1a1a1a] hover:text-[#2F401A] transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <svg viewBox="0 0 320 512" className="w-[18px] h-[18px] md:w-5 md:h-5" fill="currentColor">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
            </motion.a>
            {/* LinkedIn */}
            <motion.a 
              href="#" 
              className="text-[#1a1a1a] hover:text-[#2F401A] transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <svg viewBox="0 0 448 512" className="w-[18px] h-[18px] md:w-5 md:h-5" fill="currentColor">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
              </svg>
            </motion.a>
            {/* X (Twitter) */}
            <motion.a 
              href="#" 
              className="text-[#1a1a1a] hover:text-[#2F401A] transition-colors font-semibold text-lg leading-none"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <svg viewBox="0 0 512 512" className="w-[18px] h-[18px] md:w-5 md:h-5" fill="currentColor">
               <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L273.6 181.6 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-[#1a1a1a] font-semibold text-xs md:text-sm">
            © 2026 ScooterIT. All Rights Reserved.
          </p>

        </motion.div>
      </motion.div>

      {/* Large Bottom Image Container */}
      <motion.div 
        className="w-full relative h-[180px] md:h-[300px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={footerGraphicVariants}
      >
         {/* Background Layer */}
         <Image 
            src={footerBg} 
            alt="ScooterIT Footer Background Layer" 
            fill 
            className="object-cover object-bottom z-0"
            quality={100}
         />
         {/* Foreground Image */}
         <motion.div 
           className="absolute inset-0 z-10"
           initial={{ y: 20 }}
           whileInView={{ y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
         >
           <Image 
              src={footerGraphic} 
              alt="ScooterIT Footer Graphic" 
              fill 
              className="object-contain object-bottom"
              quality={100}
           />
         </motion.div>
      </motion.div>

    </footer>
  )
}

export default Footer
