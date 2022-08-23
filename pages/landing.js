import React from "react";
import SectionStart from '../components/Sections/SectionStart';
import SectionGetAssistance from '../components/Sections/SectionGetAssistance';
import SectionPricing from '../components/Sections/SectionPricing';
import SectionClients from '../components/Sections/SectionClients';
import SectionDownloadApp from '../components/Sections/SectionDownloadApp';
import SectionTestimonials from '../components/Sections/SectionTestimonials';
import SectionFeatures from '../components/Sections/SectionFeatures';
import SectionContact from '../components/Sections/SectionContact';
import FooterBig from '../components/Footers/FooterBig';

// components
import Navbar from "../components/Navbars/NavBar";

export default function Landing({ config }) {
  return (
    <div className="flex w-full h-full flex-col">
      <Navbar
        menu={config?.data.menu}
        showLogin={config?.data.flags?.allowLogin}
        showRegister={config?.data.flags?.allowRegister}
      />
      <main>
        <SectionStart />
        <SectionFeatures />
        <SectionGetAssistance />
        <SectionPricing />
        <SectionClients />
        <SectionDownloadApp />
        <SectionTestimonials />
        <SectionContact />
      </main>
      <FooterBig data={config?.data?.footer} />
      {/* <Footer /> */}
    </div>
  )
}

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_LANDING_SERVICE_API_URL || 'http://localhost:4001'
  const res = await fetch(url)
  const config = await res.json()

  return {
    props: {
      config
    }
  }
}
