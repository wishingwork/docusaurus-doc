import React from 'react';
import HeroSectionGraph from '../../assets/images/weather-forecasters-comparing-their-forecasts.webp';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#116CB5] to-[#67C0DA] text-white text-center py-24" id="home">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold mb-6">Transform Your Business with Weather Intelligence</h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">Harness the power of advanced weather insights to optimize operational workflows across industries. Make data-driven decisions that boost efficiency, reduce costs, and maximize performance.</p>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto flex items-center justify-center">
              <img
                  src={HeroSectionGraph}
                  alt="Calendar View Screenshot"
                  className="rounded-lg"
              />   
        </div>
      </div>
    </section>
  );
}