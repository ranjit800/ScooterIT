import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <section className="sticky top-0 h-[calc(100vh-1vh)] z-0 bg-black pl-3 pr-3 pt-3 pb-3  ">
      <div className="relative w-full h-full   flex items-center justify-center overflow-hidden rounded-4xl">
        {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Images/HeroImg.gif" 
          alt="Hero Background" 
          fill 
          priority
          className="object-cover"
        />
      </div>

      {/* Upper Layer Image/Overlay */}
      <div className="absolute inset-0 z-10">
        <Image 
          src="/Images/HeroImgUpperLayer.png" 
          alt="Hero Overlay" 
          fill 
          className="object-cover opacity-60"
        />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-brand-lime/20 to-transparent z-15"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl pt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight mb-6 drop-shadow-sm">
          One Platform. Every Scooter. <br className="hidden md:block" /> Across the City.
        </h1>
        
        <p className="text-lg md:text-xl text-brand-dark/90 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
          Access multiple scooter providers in one seamless mobility experience – built for users, operators, and smart cities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-brand-lime text-brand-dark px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-lg w-full sm:w-auto">
            <Image 
              src="/Images/Icons/downlodeAppIcon.png" 
              alt="Download App Icon" 
              width={24} 
              height={24} 
            />
            <span>Download the App</span>
          </button>

          <button className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-lg w-full sm:w-auto">
            <Image 
              src="/Images/Icons/becomAIcon.png" 
              alt="Become Partner Icon" 
              width={24} 
              height={24} 
            />
            <span>Become a Fleet Partner</span>
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Herosection