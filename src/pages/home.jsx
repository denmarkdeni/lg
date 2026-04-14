import React from 'react'; 
import logo from "../assets/logo.png"
import Hero from '../sections/hero.jsx';
import Navbar from '../components/navbar.jsx';
import WhatsappFloat from '../components/whatsapp_float.jsx';
import Footer from '../sections/footer.jsx'; 
import PainPoints from '../sections/pain_points.jsx';
import WhyLogin from '../sections/why_login.jsx';
import DACurriculam from '../courses/da_curriculam.jsx';
import PlacementSupport from '../sections/support.jsx';
import Stats from '../sections/stats.jsx';
import Pricing from '../courses/pricing.jsx';
import BatchDetails from '../courses/batch_detail.jsx';
import FAQ from '../courses/faq.jsx';
import ContactBanner from '../sections/contact_banner.jsx';
import HeroVideo from '../sections/hero_video.jsx';
import Placements from '../sections/placements.jsx';
import Feedback from '../sections/feedback.jsx';
import Classrooms from '../sections/classrooms.jsx';
import Projects from '../sections/projects.jsx';
import Branches from '../sections/branches.jsx';
import { usePopup } from '../hooks/usePopup.js';
import LeadForm from "../components/lead_form"; 

export default function HomePage() {
  const page = "Home Page";
  const { popup, openPopup, closePopup } = usePopup();
  return (  
    <>    
      <HeroVideo />
      <Stats page={page} openPopup={openPopup}/>
      <Placements /> 
      <WhyLogin /> 
      <Feedback  />
      <PlacementSupport />
      <Classrooms />
      <Pricing page={page} openPopup={openPopup}/>
      <Projects page={page} openPopup={openPopup}/>
      <BatchDetails />
      <FAQ /> 
      <Branches /> 
      <ContactBanner page={page} openPopup={openPopup}/>
      <Footer />
      <WhatsappFloat />
      
      {popup && (
        <LeadForm isPopup={true} config={popup} onClose={closePopup} />
      )}
      
    </>
  );
}