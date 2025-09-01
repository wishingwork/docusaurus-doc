import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">WeatherSync</h3>
            <p className="text-gray-400">Transforming businesses through intelligent weather insights and operational optimization solutions.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">Services</h3>
            <p><a href="#operations" className="text-gray-400 hover:text-white transition-colors">Weather Intelligence</a></p>
            <p><a href="#operations" className="text-gray-400 hover:text-white transition-colors">Operational Optimization</a></p>
            <p><a href="#insights" className="text-gray-400 hover:text-white transition-colors">Custom Solutions</a></p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">Industries</h3>
            <p className="text-gray-400">Logistics & Transportation</p>
            <p className="text-gray-400">Energy & Utilities</p>
            <p className="text-gray-400">Agriculture</p>
            <p className="text-gray-400">Fishery</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">Contact</h3>
            <p className="text-gray-400">Email: info@meteosync.com</p>
            {/* <p>Phone: +1 (555) 123-4567</p> */}
            {/* <p>Address: 123 Innovation Drive<br/>Tech City, TC 12345</p> */}
          </div>
        </div>
        
        {/* <div className={styles.footerBottom}>
          <p>&copy; 2025 WeatherSync. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div> */}
      </div>
    </footer>
  );
}