import React from 'react';
import { Smartphone, Code, Zap, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <Smartphone className="h-16 w-16 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Code Anywhere,
            <span className="text-blue-600 block">Anytime</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            MobileCoder transforms your mobile device into a powerful coding environment. 
            Write, test, and deploy code while you're on the go with our intuitive mobile-first IDE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg font-semibold">
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </button>
            {/* <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center text-lg font-semibold">
              <Download className="h-5 w-5 mr-2" />
              Download for Android
            </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Code className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Language Support</h3>
              <p className="text-gray-600">Python, JavaScript, Java, C++, and more</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Zap className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Execution</h3>
              <p className="text-gray-600">Run and test your code instantly</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Smartphone className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
              <p className="text-gray-600">Designed specifically for mobile devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;