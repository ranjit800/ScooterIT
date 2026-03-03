// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <nav className="fixed top-7 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50">
//       <div className="glass-nav rounded-2xl pl-2 pr-1  flex items-center justify-between shadow-lg">
//         {/* Logo and Brand */}
//         <div className="flex items-center gap-2">
//           <div className=" p-3 rounded-lg">
//             <Image 
//               src="/Images/logo.png" 
//               alt="ScooterIT Logo" 
//              width={100}
//              height={100}
//               className="object-contain"
//             />
//           </div>
         
//         </div>
// <div className='flex items-center gap-16'>
//   {/* Navigation Links */}
//         <div className="hidden md:flex items-center gap-8">
//           <Link href="#about" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">About</Link>
//           <Link href="#partners" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">Partners</Link>
//           <Link href="#contact" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">Contact</Link>
//         </div>

//         {/* Action Button */}
//         <button className="bg-[#2F401A] text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md group border border-[#FFFFFF33]">
//           <span>Login</span>
//           <Image 
//             src="/Images/Icons/loginIcon.png" 
//             alt="Login Icon" 
//             width={20} 
//             height={20} 
//             className="group-hover:translate-x-1 transition-transform"
//           />
//         </button>
// </div>
      

//       </div>
//     </nav>
//   )
// }

// export default Navbar


"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-7 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50">
      <div className="glass-nav rounded-2xl md:rounded-2xl pl-2 pr-5 md:pr-1 flex items-center justify-between shadow-lg">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 my-1 md:my-2">
          <div className=" p-1.5 md:p-2 rounded-lg md:rounded-lg bg-[#c0ff72] ml-1">
            <Image 
              src="/Images/Logogif.gif" 
              alt="ScooterIT Logo" 
             width={35}
             height={35}
              className="object-contain"
            />
          </div>
          <h1 className='text-lg  text-[#2F401A] '>Scooter<span className='font-semibold'>IT</span></h1>
         
        </div>
<div className='flex items-center gap-16'>
  {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">About</Link>
          <Link href="#partners" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">Partners</Link>
          <Link href="#contact" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">Contact</Link>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className="bg-[#2F401A] text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md group border border-[#FFFFFF33]">
            <span>Login</span>
            <Image 
              src="/Images/Icons/loginIcon.png" 
              alt="Login Icon" 
              width={20} 
              height={20} 
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="md:hidden flex flex-col items-end justify-center w-6 h-5 gap-[4px] ml-auto relative z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-[2px] bg-[#2F401A] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px] w-6' : ''}`}></span>
          <span className={`h-[2px] bg-[#2F401A] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 w-full' : 'w-full opacity-100'}`}></span>
          <span className={`w-4 h-[2px] bg-[#2F401A] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px] w-6' : ''}`}></span>
        </button>
</div>
      

      </div>

      {/* Mobile Menu Overlay - Slides from Left */}
      <div 
        className={`fixed inset-0 bg-[#F8F8F8] z-40 md:hidden flex flex-col items-center justify-center p-8 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ height: '100vh', width: '100vw', top: '-28px', left: '-50vw', transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', marginLeft: '50vw' }}
      >
        <div className="flex flex-col items-center gap-10 text-center w-full max-w-sm">
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-[#2F401A] text-2xl font-semibold hover:opacity-70 transition-opacity">About</Link>
          <Link href="#partners" onClick={() => setIsOpen(false)} className="text-[#2F401A] text-2xl font-semibold hover:opacity-70 transition-opacity">Partners</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-[#2F401A] text-2xl font-semibold hover:opacity-70 transition-opacity">Contact</Link>
          
          <button className="bg-[#2F401A] mt-6 w-full text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-md group">
            <span>Login</span>
            <Image 
              src="/Images/Icons/loginIcon.png" 
              alt="Login Icon" 
              width={24} 
              height={24} 
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar