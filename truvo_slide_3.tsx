import React from 'react';
import { Globe, Database, Phone, Search, Target, Mail, Eye, TrendingUp, BarChart3 } from 'lucide-react';

const TruvoSlide3 = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-12">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Truvo System</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Not random services. A complete growth engine that works together to turn strangers into customers.
          </p>
        </div>

        {/* Three-Tier System */}
        <div className="space-y-6">
          
          {/* Tier 1: Foundation */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold text-lg">01</div>
              <h3 className="text-2xl font-bold text-white">Your Business Foundation</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 ml-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Globe className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">High-Converting Website</h4>
                <p className="text-gray-400 text-sm">Professional design that turns visitors into leads</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Database className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Custom CRM Setup</h4>
                <p className="text-gray-400 text-sm">Track every lead, never miss a follow-up</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Phone className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">24/7 AI Receptionist</h4>
                <p className="text-gray-400 text-sm">Never miss a call, even at 2am</p>
              </div>
            </div>
          </div>

          {/* Tier 2: Growth Engine */}
          <div className="bg-gradient-to-r from-cyan-900/40 to-cyan-800/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-500 text-white rounded-lg px-4 py-2 font-bold text-lg">02</div>
              <h3 className="text-2xl font-bold text-white">Your Growth Engine</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 ml-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Search className="w-8 h-8 text-cyan-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">SEO & Content</h4>
                <p className="text-gray-400 text-sm">Be found when customers search</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Target className="w-8 h-8 text-cyan-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Facebook & Social Ads</h4>
                <p className="text-gray-400 text-sm">Targeted reach to ideal customers</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Mail className="w-8 h-8 text-cyan-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Multi-Channel Outreach</h4>
                <p className="text-gray-400 text-sm">Email, phone, SMS campaigns</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Eye className="w-8 h-8 text-cyan-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">IP Tracking</h4>
                <p className="text-gray-400 text-sm">Know who's visiting your site</p>
              </div>
            </div>
          </div>

          {/* Tier 3: Optimization */}
          <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 text-white rounded-lg px-4 py-2 font-bold text-lg">03</div>
              <h3 className="text-2xl font-bold text-white">Continuous Optimization</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 ml-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <BarChart3 className="w-8 h-8 text-purple-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Weekly Performance Reviews</h4>
                <p className="text-gray-400 text-sm">Clear metrics on what's working and what's not</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <TrendingUp className="w-8 h-8 text-purple-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Data-Driven Adjustments</h4>
                <p className="text-gray-400 text-sm">We test, learn, and improve every single week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-xl text-gray-300 font-medium">
            Every piece works together. That's how you get <span className="text-cyan-400 font-bold">real, compounding growth</span>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TruvoSlide3;