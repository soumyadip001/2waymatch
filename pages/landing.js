import React from "react";
import SectionStart from '../components/Sections/SectionStart';
import SectionGetAssistance from '../components/Sections/SectionGetAssistance';
import SectionPricing from '../components/Sections/SectionPricing';
import SectionClients from '../components/Sections/SectionClients';
import SectionTestimonials from '../components/Sections/SectionTestimonials';
import SectionFeatures from '../components/Sections/SectionFeatures';
import SectionContact from '../components/Sections/SectionContact';
import FooterBig from '../components/Footers/FooterBig';

// components
import Navbar from "../components/Navbars/Navbar";

export default function Landing() {
  return (
    <div className="flex w-full h-full flex-col">
      <Navbar />
      <main>
        <SectionStart />
        <SectionFeatures />
        <SectionGetAssistance />
        <SectionPricing />
        <SectionClients />
        <SectionTestimonials />
        <SectionContact />
      </main>
      <FooterBig />
      {/* <Footer /> */}
    </div>
  )
}