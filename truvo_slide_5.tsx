import React from 'react';
import { TrendingUp, DollarSign, Clock, ThumbsUp } from 'lucide-react';

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

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
            <div className="text-3xl font-bold text-blue-600">3x</div>
            <div className="text-sm text-gray-600 mt-1">Avg. Lead Increase</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-600">$87K+</div>
            <div className="text-sm text-gray-600 mt-1">Avg. Revenue Impact</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-600">60 Days</div>
            <div className="text-sm text-gray-600 mt-1">To First Results</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-200">
            <div className="text-3xl font-bold text-cyan-600">10+ hrs</div>
            <div className="text-sm text-gray-600 mt-1">Time Saved/Week</div>
          </div>
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
              <div className="text-sm font-semibold text-gray-500 mb-3">RESULTS IN 60 DAYS:</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-green-600 font-bold text-xl">
                    <TrendingUp className="w-5 h-5" />
                    +215%
                  </div>
                  <div className="text-sm text-gray-600">Lead Volume</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
                    <DollarSign className="w-5 h-5" />
                    -43%
                  </div>
                  <div className="text-sm text-gray-600">Cost Per Lead</div>
                </div>
              </div>
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
              <div className="text-sm font-semibold text-gray-500 mb-3">RESULTS IN 4 MONTHS:</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-green-600 font-bold text-xl">
                    <DollarSign className="w-5 h-5" />
                    +$87K
                  </div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-purple-600 font-bold text-xl">
                    <Clock className="w-5 h-5" />
                    10 hrs/wk
                  </div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
              </div>
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