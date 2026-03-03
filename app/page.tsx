import Image from "next/image";
import Herosection from "@/components/HomeComponents/Herosection";
import TrustedPartners from "@/components/HomeComponents/TrustedPartners";
import HowItWorks from "@/components/HomeComponents/HowItWorks";
import BuiltForFleet from "@/components/HomeComponents/BuiltForFleet";
import ReadyToExperience from "@/components/HomeComponents/ReadyToExperience";
// import CardComponent from "@/components/HomeComponents/CardComponent";
export default function Home() {
  return (
   <>
   <Herosection/>
   <TrustedPartners/>
   <HowItWorks/>
   {/* <CardComponent/> */}
   <BuiltForFleet/>
   <ReadyToExperience/>
   </>
  );
}
