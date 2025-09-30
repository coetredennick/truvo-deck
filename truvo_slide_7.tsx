import React from 'react';
import { Calendar, MessageCircle, Phone, Mail, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const TruvoSlide7 = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-12">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Growth Plan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No sales pitch. No pressure. Just an honest conversation about your goals and how we can help.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Here's What Happens Next</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">30-Minute Discovery Call</h4>
              <p className="text-gray-300 text-sm">
                We ask about your business, goals, budget, and current challenges. You ask us anything.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Custom Proposal</h4>
              <p className="text-gray-300 text-sm">
                We build a tailored plan with specific deliverables, timeline, and pricing for YOUR situation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">You Decide</h4>
              <p className="text-gray-300 text-sm">
                If it makes sense, we move forward. If not, no hard feelings—you'll still get value from the conversation.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          
          {/* Primary CTA - Schedule Call */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-8 shadow-xl transform hover:scale-105 transition-transform">
            <Calendar className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Book Your Discovery Call</h3>
            <p className="text-blue-100 mb-6">Pick a time that works for you—usually available within 24-48 hours</p>
            <div className="bg-white rounded-lg px-6 py-3 text-center">
              <a href="https://gettruvo.com" className="text-xl font-bold text-blue-600 hover:text-blue-700 flex items-center justify-center gap-2">
                Schedule Now <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-blue-200 mt-3 text-center">
              <Clock className="w-4 h-4 inline mr-1" />
              Most convenient option • No commitment required
            </p>
          </div>

          {/* Secondary - Contact Direct */}
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-8">
            <MessageCircle className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Prefer to Reach Out?</h3>
            <p className="text-gray-300 mb-6">Send us a message and we'll get back to you within a few hours</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:contact@gettruvo.com" className="hover:text-cyan-400 transition-colors">
                  contact@gettruvo.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:7138555422" className="hover:text-cyan-400 transition-colors">
                  (713) 855-5422
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Builders */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="text-white">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm">No long-term contracts</p>
          </div>
          <div className="text-white">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm">Month-to-month flexibility</p>
          </div>
          <div className="text-white">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm">See results in 60 days or less</p>
          </div>
        </div>

        {/* Final Tagline */}
        <div className="text-center mt-12">
          <p className="text-2xl text-white font-semibold mb-2">
            Stop guessing. Start growing.
          </p>
          <p className="text-gray-400">
            gettruvo.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default TruvoSlide7;