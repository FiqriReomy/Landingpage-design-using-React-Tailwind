import React from "react";
import { Navbar, Banner, WhatIsGpt, OpenAI, CaseStudies, About, Footer } from "../components";

const LandingPage = () => {
  return (
    <div className="base-2 min-h-[200vh] overflow-hidden">
      <Navbar />
      <Banner />
      <WhatIsGpt />
      <OpenAI />
      <CaseStudies />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
