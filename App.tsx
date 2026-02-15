import React from 'react';
import { Header } from './components/Header';
import { RepresentationHub } from './components/RepresentationHub';
import { WhatWeDo, SolutionAreas, Locations, Process, Contact } from './components/Sections';
import { ManufacturerLocations } from './components/ManufacturerLocations';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#3BA7FF] selection:text-white">
      <Header />
      <main>
        {/* The Hub serves as the Hero Section */}
        <RepresentationHub />
        <WhatWeDo />
        <SolutionAreas />
        <ManufacturerLocations />
        <Locations />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
