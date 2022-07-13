import React from "react";
import SectionStart from '../components/Sections/SectionStart';
import SectionGetAssistance from '../components/Sections/SectionGetAssistance';
import SectionPricing from '../components/Sections/SectionPricing';
import SectionClients from '../components/Sections/SectionClients';
import SectionTestimonials from '../components/Sections/SectionTestimonials';
import FooterBig from '../components/Footers/FooterBig';

// components
import Navbar from "components/Navbars/Navbar.js";

export default function Landing() {
  return (
    <div className="flex w-full h-full flex-col">
      <Navbar transparent />
      <main>
        <SectionStart />
        <SectionGetAssistance />
        <SectionPricing />
        <SectionClients />
        <SectionTestimonials />
        {/* <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
        </div> */}
      </main>
      <FooterBig />
      {/* <Footer /> */}
    </div>
  )
}