import React from 'react';

const TruvoSlide1 = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-12 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Hook - The Problem */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            You're Spending $2K+/Month<br />
            on Marketing That <span className="text-red-400">Doesn't Work</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Inconsistent leads. Wasted ad spend. No clear ROI.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-16"></div>

        {/* Solution - Brief */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Truvo
            </span> Fixes That
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're entrepreneurs who build marketing systems that actually grow your business—
            not just pretty campaigns that go nowhere.
          </p>
        </div>

        {/* Value props - quick hits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-white font-semibold text-lg">Clear Metrics</div>
            <div className="text-gray-400 text-sm mt-1">Know exactly what's working</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-2">🤖</div>
            <div className="text-white font-semibold text-lg">AI-Powered</div>
            <div className="text-gray-400 text-sm mt-1">Premium results, fair prices</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-2">🤝</div>
            <div className="text-white font-semibold text-lg">True Partnership</div>
            <div className="text-gray-400 text-sm mt-1">Weekly calls, real results</div>
          </div>
        </div>
      </div>

      {/* Logo/branding in corner */}
      <div className="absolute top-8 left-8">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          TRUVO
        </div>
        <div className="text-xs text-gray-500 tracking-wider">DIGITAL</div>
      </div>
    </div>
  );
};

export default TruvoSlide1;
