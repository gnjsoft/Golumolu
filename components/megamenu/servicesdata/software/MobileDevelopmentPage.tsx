import React, { useEffect } from 'react';
import { Smartphone, Tablet, Watch, Layers, Cpu, ArrowRight, Battery, Wifi, Check, Apple, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-black min-h-screen pt-20 text-white selection:bg-purple-500 selection:text-white font-sans">
      
      {/* Dark Hero Section */}
      <div className="relative pt-12 pb-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-purple-300 text-sm font-bold mb-8 backdrop-blur-md">
                        <Smartphone size={16} />
                        <span>Mobile-First Innovation</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Apps that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Inspire & Engage.</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0">
                        We design and develop premium iOS and Android applications that deliver seamless user experiences and drive retention.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                            <Apple size={20} /> App Store
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-transparent border border-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                            <Play size={20} /> Play Store
                        </button>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="lg:w-1/2 flex justify-center relative">
                    <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden z-10">
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>
                        
                        {/* Screen Content */}
                        <div className="h-full w-full bg-slate-950 pt-12 p-6 flex flex-col justify-between">
                            {/* App Header */}
                            <div className="flex justify-between items-center text-slate-400 mb-8">
                                <div className="text-lg font-bold text-white">My App</div>
                                <div className="flex gap-2">
                                    <Wifi size={16} />
                                    <Battery size={16} />
                                </div>
                            </div>
                            
                            {/* App Widgets */}
                            <div className="space-y-4">
                                <div className="h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                                    <div className="text-2xl font-bold mb-2">Hello, User</div>
                                    <div className="text-purple-100">Welcome back</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-32 bg-slate-800 rounded-2xl p-4 flex flex-col justify-between">
                                        <div className="p-2 bg-green-500/20 w-fit rounded-lg text-green-400"><Smartphone size={20} /></div>
                                        <div className="text-slate-300 font-medium">Native</div>
                                    </div>
                                    <div className="h-32 bg-slate-800 rounded-2xl p-4 flex flex-col justify-between">
                                        <div className="p-2 bg-orange-500/20 w-fit rounded-lg text-orange-400"><Layers size={20} /></div>
                                        <div className="text-slate-300 font-medium">Hybrid</div>
                                    </div>
                                </div>
                                <div className="h-24 bg-slate-800 rounded-2xl p-4 flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-slate-700 animate-pulse"></div>
                                    <div className="space-y-2 flex-1">
                                        <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                                        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Nav */}
                            <div className="h-16 bg-slate-900/50 backdrop-blur-md rounded-2xl mt-8 flex items-center justify-around text-slate-500">
                                <div className="text-purple-400"><Layers /></div>
                                <div><Cpu /></div>
                                <div><Watch /></div>
                            </div>
                        </div>
                    </div>

                    {/* Background Decorative Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-800 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-800/50 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Bento Grid Features */}
      <div className="bg-slate-950 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Development Capabilities</h2>
                <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                {/* iOS Card */}
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-purple-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold"><Apple size={24} fill="currentColor" /></div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">iOS Development</h3>
                        <p className="text-slate-400">Swift & SwiftUI experts building for the Apple ecosystem.</p>
                    </div>
                </div>

                {/* Android Card */}
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-green-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold"><Smartphone size={24} /></div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Android Development</h3>
                        <p className="text-slate-400">Kotlin-first approach for modern Android experiences.</p>
                    </div>
                </div>

                {/* Cross Platform Card - Spans 1 col */}
                <div className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-3xl p-8 border border-purple-500/20 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Layers size={100} /></div>
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold"><Cpu size={24} /></div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Cross-Platform</h3>
                        <p className="text-purple-200">React Native & Flutter solutions for maximum reach.</p>
                    </div>
                </div>

                {/* Wide Card */}
                <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-row items-center justify-between hover:border-blue-500/50 transition-colors">
                    <div className="max-w-md">
                        <div className="inline-block p-2 bg-blue-500/20 text-blue-400 rounded-lg mb-4"><Watch size={20} /></div>
                        <h3 className="text-2xl font-bold mb-4">Beyond the Phone</h3>
                        <p className="text-slate-400 mb-6">We extend your reach to Wearables, TV, and IoT devices, creating a cohesive ecosystem for your users.</p>
                        <div className="flex gap-4 text-sm font-semibold text-slate-300">
                            <span className="flex items-center gap-1"><Check size={14} className="text-green-500"/> WatchOS</span>
                            <span className="flex items-center gap-1"><Check size={14} className="text-green-500"/> WearOS</span>
                            <span className="flex items-center gap-1"><Check size={14} className="text-green-500"/> tvOS</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Watch size={120} className="text-slate-800" strokeWidth={1} />
                    </div>
                </div>

                {/* Stats Card */}
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col items-center justify-center text-center">
                    <div className="text-5xl font-bold text-white mb-2">4.8</div>
                    <div className="flex text-yellow-500 mb-4 gap-1">
                        {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-yellow-500"></div>)}
                    </div>
                    <p className="text-slate-400 text-sm">Average App Store Rating across our client portfolio</p>
                </div>
            </div>
         </div>
      </div>

      {/* CTA */}
      <div className="py-24 border-t border-slate-900 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to launch?</h2>
            <Link to="/contact" className="inline-flex items-center bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-purple-400 transition-all transform hover:scale-105">
                Start Your App Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
      </div>
    </div>
  );
};

export default MobileDevelopmentPage;