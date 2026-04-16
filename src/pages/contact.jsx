import { usePopup } from "../hooks/usePopup";
import ContactBanner from "../sections/contact_banner";

export default function Contact() {
    const page = "Contact Page";
    const { popup, openPopup, closePopup } = usePopup();
    return (  
      <>  
        <ContactBanner page={page} openPopup={openPopup}/>
      </>
    );
  }