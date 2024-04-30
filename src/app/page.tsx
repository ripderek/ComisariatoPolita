// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import Docu from "./DocumentosElectronicos"
import Corre from "./CorreoElectronico"
import { IconButton } from "@material-tailwind/react";

//componente principal
export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Docu/>
      <Corre/>
{/* 
      <MobileConvenience />
      <Testimonials />
    
      <Faqs />
        */}
      
      <Footer />
      
    </>
  );
}
