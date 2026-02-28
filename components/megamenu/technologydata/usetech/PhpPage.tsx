import React, { useEffect } from 'react';
import { Server, Code, Globe, Database, ArrowRight, Layout, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhpPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#4F5B93] text-white py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">PHP Development</h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
                  Powering 78% of the web. Reliable, flexible, and fast backend solutions for dynamic websites and applications.
              </p>
              <Link to="/contact" className="bg-white text-[#4F5B93] font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition-colors inline-flex items-center">
                  Start Project <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-12">
              <div className="col-span-2 grid gap-8">
                  <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#4F5B93]">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Framework Expertise</h3>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-[#F05340] rounded-full"></div> 
                              <span className="font-semibold">Laravel</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-[#000000] rounded-full"></div> 
                              <span className="font-semibold">Symfony</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-[#D92B38] rounded-full"></div> 
                              <span className="font-semibold">CodeIgniter</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-[#8892BF] rounded-full"></div> 
                              <span className="font-semibold">Yii</span>
                          </div>
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                      {[
                          { title: "CMS Development", icon: Layout, desc: "Custom WordPress, Drupal, and Joomla solutions." },
                          { title: "E-Commerce", icon: Globe, desc: "Robust Magento and WooCommerce stores." },
                          { title: "API Integrations", icon: Zap, desc: "RESTful and SOAP services connecting your systems." },
                          { title: "Legacy Migration", icon: Database, desc: "Upgrading older PHP versions to 8.x for speed and security." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                              <item.icon className="text-[#4F5B93] mb-3" size={24} />
                              <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                              <p className="text-slate-600 text-sm">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Why PHP?</h3>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <Code className="shrink-0 text-[#4F5B93]" />
                          <span className="text-slate-300 text-sm">Cost-effective development with a massive talent pool.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Server className="shrink-0 text-[#4F5B93]" />
                          <span className="text-slate-300 text-sm">Excellent compatibility with all major servers and databases.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Zap className="shrink-0 text-[#4F5B93]" />
                          <span className="text-slate-300 text-sm">Fast execution with PHP 8+ JIT compiler.</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  );
};

export default PhpPage;