import React from 'react';
import { Check, Star } from 'lucide-react';

const TruvoSlide4 = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Options</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose what fits your goals and budget. We customize every package.
          </p>
        </div>

        {/* Website-Only Option - Separate Box */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[250px]">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional Website Only</h3>
                <p className="text-gray-600">Perfect if you just need a great website without ongoing marketing</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-slate-900">$1,500</div>
                <div className="text-gray-600 text-lg">one-time</div>
                <div className="text-sm text-gray-500 mt-1">+ $50/month hosting & maintenance</div>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Custom design</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Mobile optimized</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Up to 7 pages</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Basic SEO setup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 text-gray-400 text-sm font-semibold">
            <div className="h-px w-24 bg-gray-300"></div>
            <span>OR</span>
            <div className="h-px w-24 bg-gray-300"></div>
          </div>
        </div>

        {/* Monthly Growth Partnerships */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">Monthly Growth Partnerships</h2>
          <p className="text-center text-gray-600 mb-8">Full-service marketing with weekly optimization</p>
        </div>

        {/* Three Package Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Starter Package */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">$500</div>
              <div className="text-gray-500 text-sm">per month</div>
              <div className="text-gray-400 text-xs mt-1">+ $500 one-time setup</div>
            </div>
            
            <div className="mb-6">
              <div className="bg-blue-50 rounded-lg px-3 py-2 text-center">
                <p className="text-sm font-semibold text-blue-900">Best for: New businesses</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Website optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Google Business Profile setup</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Basic CRM setup</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">1 ad campaign test</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Monthly performance review</span>
              </div>
            </div>
          </div>

          {/* Growth Package - Featured */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-500 rounded-xl p-6 shadow-lg relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Star className="w-4 h-4" />
              MOST POPULAR
            </div>
            
            <div className="text-center mb-6 mt-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">$750-$1K</div>
              <div className="text-gray-600 text-sm">per month</div>
              <div className="text-gray-400 text-xs mt-1">+ $500 one-time setup</div>
            </div>
            
            <div className="mb-6">
              <div className="bg-blue-100 rounded-lg px-3 py-2 text-center">
                <p className="text-sm font-semibold text-blue-900">Best for: Established businesses</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-900 font-medium">Everything in Starter</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-900 font-medium">Multi-channel ads (Facebook, Google)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-900 font-medium">SEO & content strategy</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-900 font-medium">Email & SMS campaigns</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-900 font-medium">Weekly calls & optimization</span>
              </div>
            </div>
          </div>

          {/* Scale Package */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Scale</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">$1.5K-$5K</div>
              <div className="text-gray-500 text-sm">per month</div>
              <div className="text-gray-400 text-xs mt-1">+ $500 one-time setup</div>
            </div>
            
            <div className="mb-6">
              <div className="bg-purple-50 rounded-lg px-3 py-2 text-center">
                <p className="text-sm font-semibold text-purple-900">Best for: Scaling businesses</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Everything in Growth</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">24/7 AI receptionist</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Advanced CRM automations</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">IP tracking & retargeting</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Cross-channel expansion</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600">
            Every package is customized to your goals and budget. <span className="font-semibold text-slate-900">Let's build what YOU need.</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default TruvoSlide4;