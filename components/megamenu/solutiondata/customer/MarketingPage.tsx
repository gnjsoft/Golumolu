import React, { useEffect, useState } from 'react';
import { 
  Megaphone, Target, BarChart3, Mail, PenTool, Share2, 
  ArrowRight, Zap, TrendingUp, Tv, Heart, Database, 
  MousePointer2, Layout, PieChart, LineChart, CheckCircle2,
  Globe, Smartphone, Users, Search, Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const solutions = [
    {
      icon: TrendingUp,
      title: "Trade Promotion Management",
      desc: "Achieve brand growth through planned promotion campaigns, sales forecasting, and retail commitment control.",
      points: [
        "Planning promotion campaigns and forecasting sales volume",
        "Controlling commitment execution to retailers",
        "Reviewing campaign results and promotion costs",
        "Analyzing sales based on consumer research data"
      ]
    },
    {
      icon: Tv,
      title: "Advertising Planning",
      desc: "Analyze and plan ad campaigns across multiple media channels such as TV, Internet, radio, and print.",
      points: [
        "Multi-channel media strategy (TV, Digital, Radio, OOH)",
        "Optimal advertising strategy tailoring",
        "Comprehensive visualized reporting",
        "Sophisticated mathematical modeling"
      ]
    },
    {
      icon: Share2,
      title: "Social Marketing Solutions",
      desc: "Turn social networks into a powerful customer acquisition tool with custom-built applications.",
      points: [
        "Social marketing applications",
        "Social analytics to track user activity",
        "Analytical reporting and insights",
        "Campaign applications integrated with social networks"
      ]
    },
    {
      icon: Heart,
      title: "Loyalty Software",
      desc: "Ensure more loyal relationships by tracking and analyzing customer satisfaction and behavior.",
      points: [
        "Customer account management & personalized offers",
        "Mobile loyalty applications for in-store and home",
        "Analytics and reporting on loyalty program ROI",
        "Customer behavior trend tracking and forecasting"
      ]
    },
    {
      icon: Database,
      title: "Marketing Data Analysis",
      desc: "Make smarter marketing decisions with consumer survey analysis and performance monitoring.",
      points: [
        "Consumer survey analysis for behavior drivers",
        "Marketing campaign analysis & performance tracking",
        "Sales analysis and growth potential estimation",
        "DWH implementation & Predictive analytics"
      ]
    },
    {
      icon: MousePointer2,
      title: "Real-Time Bidding (RTB)",
      desc: "Leverage cost-efficient and optimized ad campaigns with the help of advanced RTB systems.",
      points: [
        "Demand-side platforms (DSPs)",
        "Supply-side platforms (SSPs)",
        "Data management platforms (DMPs)",
        "Real-time analytics and optimization"
      ]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-purple-500 selection:text-white">
      
      {/* Hero Section */}
      <div className="relative py-24 px-4 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] animate-blob"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
                      <Megaphone size={14} /> Custom Marketing Software Development
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
                      Software That <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Drives Markets</span>
                  </h1>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                      GnJ Worldwide provides custom marketing software development services for companies aiming to enhance their marketing initiatives through data-driven precision and automated excellence.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                      <Link to="/contact" className="bg-white text-slate-950 font-bold py-4 px-10 rounded-full hover:bg-purple-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 flex items-center">
                          Start Your Project <ArrowRight className="ml-2" />
                      </Link>
                      <Link to="/contact" className="bg-slate-900 text-white border border-white/10 font-bold py-4 px-10 rounded-full hover:bg-slate-800 transition-all flex items-center">
                          View Case Studies
                      </Link>
                  </div>
              </div>
          </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Marketing Software Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">We build specialized tools that empower marketing teams to analyze, plan, and execute high-impact campaigns.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-slate-900/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/50 hover:bg-slate-900 transition-all duration-500 group flex flex-col ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                      <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner">
                          <item.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{item.desc}</p>
                      <ul className="space-y-3 mb-8">
                          {item.points.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-300">
                                  <CheckCircle2 size={16} className="text-purple-500 mt-1 shrink-0" />
                                  <span>{point}</span>
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                          Learn More <ArrowRight size={18} />
                      </Link>
                  </div>
              ))}
          </div>
      </div>

      {/* Data Analysis Section */}
      <div className="bg-slate-900/30 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold mb-8">Marketing Data Analysis from A to Z</h2>
                      <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                          Make smarter marketing decisions with our comprehensive data analysis services. We cover the entire process to uncover real drivers of consumer behavior.
                      </p>
                      <div className="space-y-6">
                          {[
                              { title: "DWH Implementation", desc: "Robust data warehouse setup for centralized marketing data." },
                              { title: "OLAP & Visualization", desc: "Sophisticated reporting and visualized analytical cubes." },
                              { title: "Predictive Analytics", desc: "Forecast trends and customer behavior with AI models." }
                          ].map((item, i) => (
                              <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                  <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                                      <Zap size={24} />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                      <p className="text-sm text-slate-400">{item.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"></div>
                      <div className="relative bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-2xl">
                          <div className="space-y-6">
                              <div className="flex justify-between items-end">
                                  <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Campaign ROI</div>
                                  <div className="text-2xl font-bold text-green-400">+340%</div>
                              </div>
                              <div className="h-48 flex items-end gap-2">
                                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                                      <div 
                                        key={i} 
                                        className="flex-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-t-lg transition-all duration-1000"
                                        style={{ height: active ? `${h}%` : '0%' }}
                                      ></div>
                                  ))}
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="p-4 bg-white/5 rounded-xl text-center">
                                      <div className="text-xs text-slate-400 mb-1">Conversion Rate</div>
                                      <div className="text-xl font-bold">12.4%</div>
                                  </div>
                                  <div className="p-4 bg-white/5 rounded-xl text-center">
                                      <div className="text-xs text-slate-400 mb-1">CPA</div>
                                      <div className="text-xl font-bold">₹420</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Tech Stack */}
      <div className="py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-400 mb-12 uppercase tracking-[0.2em]">Integrate Your Marketing Stack</h2>
              <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {["HubSpot", "Marketo", "Salesforce", "Google Ads", "Facebook Pixel", "Mailchimp", "Segment", "Mixpanel"].map((tool, i) => (
                      <span key={i} className="text-2xl font-bold text-white hover:text-purple-400 transition-colors cursor-default">{tool}</span>
                  ))}
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="pb-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to drive your market?</h2>
                  <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to build custom marketing software that delivers measurable results and competitive advantage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-purple-900 text-white border border-purple-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MarketingPage;
