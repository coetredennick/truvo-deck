import React from 'react';
import { ThumbsUp } from 'lucide-react';

const TruvoSlide5 = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-12">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Real Clients. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Real Results.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just talk strategy—we deliver measurable growth
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">VH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Dominic</h3>
                <p className="text-gray-600">Vibrant Homes</p>
                <div className="flex gap-1 mt-1">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
            </div>
            
            <blockquote className="text-gray-700 text-lg mb-6 italic">
              "Reliable leads, a site that converts, and instant follow-ups. Truvo made our marketing run like a business, not a gamble."
            </blockquote>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="text-sm font-semibold text-gray-500 mb-3">WHAT WE DID:</div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Built a beautiful, high-converting website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Filled his calendar with quality leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Set up a custom CRM that runs on autopilot</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">RE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Ashton</h3>
                <p className="text-gray-600">Rowe Environmental</p>
                <div className="flex gap-1 mt-1">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
            </div>
            
            <blockquote className="text-gray-700 text-lg mb-6 italic">
              "They listened, built a plan around our goals, and executed fast—website, ads, and a CRM that our team actually uses. Weekly calls keep us focused, and we're seeing steadier inbound from the right clients."
            </blockquote>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="text-sm font-semibold text-gray-500 mb-3">WHAT WE DID:</div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Evolved from word-of-mouth to professional marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Boosted profit margins significantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Built a loyal client base that keeps coming back</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Mini Case Study Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-8 text-white shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ThumbsUp className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Why Our Clients Stay</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-blue-100 text-sm">Client retention rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">Weekly</div>
                <div className="text-blue-100 text-sm">Performance reviews with clear next steps</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-blue-100 text-sm">Transparent—you see every metric</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-10">
          <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
            "Most agencies make promises. Truvo shows receipts."
          </p>
        </div>

      </div>
    </div>
  );
};

export default TruvoSlide5;