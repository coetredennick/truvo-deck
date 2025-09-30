import React from 'react';
import { Shield, TrendingUp, Handshake, Settings, Target, Users, Brain, CheckCircle } from 'lucide-react';

const TruvoSlide6 = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-12">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Entrepreneurs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not career marketers. We're operators who've scaled real businesses and know what actually works.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Nate */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Nate Wolf</h3>
                <p className="text-blue-600 font-semibold">Tech & Automation</p>
                <p className="text-sm text-gray-600">ex-Cybersecurity Engineer</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Built enterprise security systems protecting billions in assets. Now builds marketing automation that actually works—no bloat, just results.
            </p>
            <div className="bg-blue-100 rounded-lg px-4 py-3">
              <p className="text-sm text-blue-900 font-medium">
                <Brain className="w-4 h-4 inline mr-2" />
                His superpower: Making complex AI tools simple and profitable for small businesses
              </p>
            </div>
          </div>

          {/* Coe */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border-2 border-green-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Coe Tredennick</h3>
                <p className="text-green-600 font-semibold">Client Success</p>
                <p className="text-sm text-gray-600">ex-Wealth Management</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Managed $50M+ in client portfolios where every decision had to show ROI. Brings the same investment mindset to your marketing budget.
            </p>
            <div className="bg-green-100 rounded-lg px-4 py-3">
              <p className="text-sm text-green-900 font-medium">
                <Target className="w-4 h-4 inline mr-2" />
                His superpower: Translating data into actionable strategy you actually understand
              </p>
            </div>
          </div>

          {/* AJ */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 border-2 border-purple-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">AJ Checkoff</h3>
                <p className="text-purple-600 font-semibold">Growth Strategy</p>
                <p className="text-sm text-gray-600">ex-Real Estate Broker</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Closed $10M+ in real estate deals where every lead counts. Knows exactly how to turn traffic into revenue, not just clicks.
            </p>
            <div className="bg-purple-100 rounded-lg px-4 py-3">
              <p className="text-sm text-purple-900 font-medium">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                His superpower: Conversion optimization—turning browsers into buyers
              </p>
            </div>
          </div>

          {/* Alec */}
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-8 border-2 border-cyan-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Alec Boyd</h3>
                <p className="text-cyan-600 font-semibold">Operations & Systems</p>
                <p className="text-sm text-gray-600">Founded & Scaled Vestra</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Built and scaled multiple companies from zero to six figures. Masters the unglamorous work that makes everything else possible.
            </p>
            <div className="bg-cyan-100 rounded-lg px-4 py-3">
              <p className="text-sm text-cyan-900 font-medium">
                <Users className="w-4 h-4 inline mr-2" />
                His superpower: Process design that scales without breaking
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Why This Team Matters</h3>
            <p className="text-lg text-gray-300 mb-6">
              We've been in your shoes. We've spent our own money on marketing that didn't work. 
              We've dealt with agencies that disappeared after the proposal.
            </p>
            <p className="text-xl font-semibold text-white">
              That's why we built Truvo—the agency we wish we had when we were growing our businesses.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TruvoSlide6;