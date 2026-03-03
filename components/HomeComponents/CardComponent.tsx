
import React from "react";
import Image from "next/image";
import Step1Img from "@/public/Images/HowItWorksImages/cardOne.png";
import Step1ImgSub from "@/public/Images/HowItWorksImages/SubCardOne.png";

const CardComponent = () => {
  return (
    <div className="relative z-10 h-screen bg-black flex items-center justify-center  ">
      <div className=" w-[28vh] h-[35vh]  rounded-2xl  flex flex-col  relative">
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30">
          <div className="bg-[#C2F865] text-[#2F401A] px-10 py-3 rounded-xl font-medium text-base shadow-md whitespace-nowrap">Step 1</div>
        </div>

        <div className=" relative  w-full h-3/5 bg-white pl-0.5 pr-0.5 pt-0.5 rounded-t-2xl ">
          <div className="relative bg-black w-full h-full rounded-t-2xl ">
            <div className="absolute bottom-0 w-full h-[27vh]  z-30 ">
              <div className="absolute bottom-0  w-full h-[95%] z-10">
                <Image src={Step1Img} alt="Step1Img" fill className="object-contain object-bottom" />
              </div>
              {/* Sub Image (Offset UI) */}
              <div className="absolute left-[60%] top-1/2 w-[85%] z-20">
                <Image src={Step1ImgSub} alt="Detail UI" width={100} height={100} quality={100} className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2/5 bg-white rounded-b-2xl p-6 pb-14 grow text-left relative flex flex-col justify-start">
          <h3 className="text-[22px] font-bold text-[#2F401A] mb-3 leading-[1.2]">Find Nearby</h3>
          <p className="text-[#2F401A]/80 text-[15px] font-medium leading-normal">Open the app and view scooters from multiple providers around you.</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
