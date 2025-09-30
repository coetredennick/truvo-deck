import React from 'react';
import { Check, X } from 'lucide-react';

const TruvoSlide2 = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center p-12">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Truvo?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not another marketing agency. We're entrepreneurs who've built real businesses and know what actually moves the needle.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Traditional Agencies Column */}
          <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Traditional Agencies</h3>
              <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Hand you a strategy deck and disappear</p>
              </div>
              
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">One-size-fits-all packages</p>
              </div>
              
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Junior teams learning on your dime</p>
              </div>
              
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Monthly reports you don't understand</p>
              </div>
              
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Vanity metrics, unclear ROI</p>
              </div>
            </div>
          </div>

          {/* Truvo Column */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-blue-400 shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">
              THE TRUVO DIFFERENCE
            </div>
            
            <div className="text-center mb-6 mt-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Truvo</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-medium">We architect, implement, and optimize in the trenches with you</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-medium">Custom-built systems for YOUR goals and budget</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-medium">Ex-entrepreneurs from cybersecurity, wealth mgmt, & real estate</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-medium">Weekly calls with clear data & next steps</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-medium">Focus on what matters: revenue, trust, and time saved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center">
          <p className="text-2xl font-semibold text-slate-700">
            We treat your business like we're still running our own.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TruvoSlide2;