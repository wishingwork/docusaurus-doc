import React from 'react';
import TestimonialGraph from '../../assets/images/weather-application.webp';

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Unlock Unparalleled Insights with Meteosync</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <img
            src={TestimonialGraph}
            alt="Calendar View Screenshot"
            className="rounded-lg shadow-2xl"
          />

          <div className="pl-8">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Our weather intelligence platform delivers unprecedented visibility into how atmospheric conditions impact your operations. From supply chain optimization to energy management, our insights drive measurable improvements in efficiency and profitability.</p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Experience the power of weather-aware planning with our comprehensive suite of tools designed for modern businesses.</p>

            <a href="https://www.meteosync.com/trip-planner" className="inline-block bg-gradient-to-r from-[#116CB5] to-[#67C0DA] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1  mb-8">User Case: WeatherGo Plan</a>

            <a href="https://www.meteosync.com/calendar" className="inline-block bg-gradient-to-r from-[#116CB5] to-[#67C0DA] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">User Case: Weather Calendar</a>

          </div>
        </div>
      </div>
    </section>
  );
}