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

export default function DataAnalytics() {
  return (  
    <>  
      <Hero />
      <PainPoints /> 
      <WhyLogin /> 
      <DACurriculam />
      <PlacementSupport />
      <Stats />
      <Pricing />
      <BatchDetails />
      <FAQ /> 
      <ContactBanner />
      <Footer />
      <WhatsappFloat />
    </>
  );
}