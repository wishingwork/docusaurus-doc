import React from 'react';

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-slate-50" id="operations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Elevate Your Operations with Meteosync</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-[#116CB5] to-[#67C0DA] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">1</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Data Integration</h3>
            <p className="text-gray-600 leading-relaxed">Effortlessly link your existing systems to the Meteosync API for immediate access to critical weather data tailored to your operational needs.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-[#116CB5] to-[#67C0DA] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">2</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Custom Analysis</h3>
            <p className="text-gray-600 leading-relaxed">Our advanced algorithms analyze weather patterns specific to your industry and geographical operations to identify optimization opportunities.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-[#116CB5] to-[#67C0DA] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">3</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Workflow Optimization</h3>
            <p className="text-gray-600 leading-relaxed">Implement weather-aware workflows that automatically adjust operations based on current and forecasted conditions.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-[#116CB5] to-[#67C0DA] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">4</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Performance Monitoring</h3>
            <p className="text-gray-600 leading-relaxed">Track the impact of weather-informed decisions with comprehensive analytics and continuous improvement recommendations.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-[#116CB5] to-[#67C0DA] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">5</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ongoing Support</h3>
            <p className="text-gray-600 leading-relaxed">Our expert team provides continuous support and system refinement to ensure maximum value from your weather intelligence investment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}