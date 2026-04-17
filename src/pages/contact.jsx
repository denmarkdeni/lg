import { usePopup } from "../hooks/usePopup";
import Branches from "../sections/branches";
import ContactBanner from "../sections/contact_banner";
import Hero from "../sections/hero";

export default function Contact() {
    const page = "Contact Page";
    const { popup, openPopup, closePopup } = usePopup();
    return (  
      <>    
        <Hero page={page} openPopup={openPopup}/> 
        <Branches />
        <ContactBanner page={page} openPopup={openPopup}/>
      </>
    );
  }