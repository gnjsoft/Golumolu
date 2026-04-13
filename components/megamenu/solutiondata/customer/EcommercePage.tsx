import React, { useEffect, useState } from 'react';
import { 
  ShoppingBag, CreditCard, Truck, Smartphone, ArrowRight, Zap, 
  Globe, Package, TrendingUp, Code, Search, Palette, Megaphone, 
  Mail, Share2, FileText, BarChart3, Calendar, Map, CheckCircle2,
  Layout, Layers, Monitor, Utensils, Shirt, Sparkles, Home, 
  Settings, Gem, Stethoscope, Store, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommercePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const services = [
    {
      title: "Ecommerce Development",
      icon: Code,
      desc: "Obtain a clean-coded and high-performing ecommerce solution tailored to your business goals.",
      link: "/contact"
    },
    {
      title: "Ecommerce Consulting",
      icon: Search,
      desc: "Secure the best ROI for implemented technology solutions with our strategic expert guidance.",
      link: "/contact"
    },
    {
      title: "UX and UI Web Design",
      icon: Palette,
      desc: "Communicate your brand's unique personality through intuitive and conversion-focused website design.",
      link: "/contact"
    }
  ];

  const marketingServices = [
    { icon: Mail, label: "Email Marketing" },
    { icon: Share2, label: "Social Media Marketing" },
    { icon: FileText, label: "Content Marketing" },
    { icon: Search, label: "SEO Marketing" },
    { icon: Layout, label: "Landing Page Design" },
    { icon: Calendar, label: "Event Management" },
    { icon: Map, label: "Automated Journey Builder" },
    { icon: BarChart3, label: "Marketing Analytics" }
  ];

  const implementationModels = [
    { title: "Online Marketplace", icon: Store, desc: "Build multi-vendor platforms like Amazon or Etsy." },
    { title: "Ecommerce Multistore", icon: Layers, desc: "Manage multiple brands or regions from a single backend." },
    { title: "Headless Commerce", icon: Zap, desc: "Decouple frontend from backend for ultimate flexibility." },
    { title: "PWA", icon: Smartphone, desc: "Deliver app-like experiences directly in the browser." }
  ];

  const productLines = [
    { icon: Utensils, label: "Food & Beverage" },
    { icon: Truck, label: "Food Delivery" },
    { icon: Shirt, label: "Apparel & Footwear" },
    { icon: Sparkles, label: "Beauty & Personal Care" },
    { icon: Home, label: "Furniture & Household" },
    { icon: Settings, label: "Auto Parts & Accessories" },
    { icon: Gem, label: "Jewelry" },
    { icon: Stethoscope, label: "Healthcare & Medicine" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full blur-[150px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-200">
                      <ShoppingBag size={14} /> Enterprise Ecommerce
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                      Enterprise Ecommerce <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Solutions & Consulting</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                      GnJ Worldwide has been building ecommerce software to help our clients provide seamless customer experience and have agile business operations.
                  </p>
                  <div className="flex gap-4">
                      <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 flex items-center">
                          Start Your Project <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>

              <div className={`relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
                      <div className="absolute inset-0 bg-slate-100">
                          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover mix-blend-multiply" alt="Shoe" />
                      </div>
                      <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">New Arrival</span>
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                              <TrendingUp size={20} className="text-slate-900" />
                          </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6 border-t border-slate-100">
                          <div className="flex justify-between items-end mb-4">
                              <div>
                                  <h3 className="text-xl font-bold text-slate-900">Nike Air Max</h3>
                                  <p className="text-slate-500 text-sm">Running Collection</p>
                              </div>
                              <div className="text-2xl font-bold text-slate-900">₹10,770</div>
                          </div>
                          <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                              Add to Cart
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Our Ecommerce Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Ecommerce Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive solutions to drive your digital commerce success.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <service.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                      <Link to={service.link} className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                          Explore the service <ArrowRight size={18} />
                      </Link>
                  </div>
              ))}
          </div>
      </div>

      {/* Digital Marketing Automation */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold mb-6">Digital Marketing Automation</h2>
                      <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                          We help to implement proper marketing automation tools and organize effectively omnichannel customer communication.
                      </p>
                      <div className="grid grid-cols-2 gap-6 mb-10">
                          {marketingServices.map((item, i) => (
                              <div key={i} className="flex items-center gap-3">
                                  <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                                      <item.icon size={18} />
                                  </div>
                                  <span className="text-slate-300 font-medium">{item.label}</span>
                              </div>
                          ))}
                      </div>
                      <Link to="/contact" className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                          Talk to the team <ArrowRight className="ml-2" />
                      </Link>
                  </div>
                  <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"></div>
                      <div className="relative grid grid-cols-2 gap-4">
                          <div className="space-y-4 pt-12">
                              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                  <BarChart3 className="text-orange-400 mb-4" />
                                  <div className="text-2xl font-bold">85%</div>
                                  <div className="text-xs text-slate-400 uppercase">Automation Rate</div>
                              </div>
                              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                  <Users className="text-blue-400 mb-4" />
                                  <div className="text-2xl font-bold">12k+</div>
                                  <div className="text-xs text-slate-400 uppercase">Active Journeys</div>
                              </div>
                          </div>
                          <div className="space-y-4">
                              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                  <Zap className="text-yellow-400 mb-4" />
                                  <div className="text-2xl font-bold">3.2s</div>
                                  <div className="text-xs text-slate-400 uppercase">Avg Response</div>
                              </div>
                              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                  <TrendingUp className="text-green-400 mb-4" />
                                  <div className="text-2xl font-bold">24%</div>
                                  <div className="text-xs text-slate-400 uppercase">ROI Increase</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Ecommerce Demos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Ecommerce Demos</h2>
              <p className="text-slate-600">Experience our solutions firsthand across different business models.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  { title: "B2C Ecommerce", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" },
                  { title: "B2B Ecommerce", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
                  { title: "Online Marketplace", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600" },
                  { title: "Food Ecommerce", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" }
              ].map((demo, i) => (
                  <div key={i} className="group relative h-64 rounded-3xl overflow-hidden shadow-lg">
                      <img src={demo.img} alt={demo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                          <h3 className="text-white font-bold text-lg mb-2">{demo.title}</h3>
                          <Link to="/contact" className="text-orange-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                              View Demo <ArrowRight size={14} />
                          </Link>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Implementation Models */}
      <div className="bg-orange-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore Diverse Implementation Models</h2>
                  <p className="text-slate-600">Flexible architectures to match your business scale and complexity.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {implementationModels.map((model, i) => (
                      <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                              <model.icon size={24} />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{model.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{model.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Product Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore Diverse Product Lines</h2>
              <p className="text-slate-600">Industry-specific solutions for every retail category.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productLines.map((line, i) => (
                  <div key={i} className="flex flex-col items-center p-8 bg-white rounded-3xl border border-slate-100 hover:border-orange-500 transition-all group">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-all mb-4">
                          <line.icon size={32} />
                      </div>
                      <span className="font-bold text-slate-700 text-center">{line.label}</span>
                  </div>
              ))}
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-orange-500 to-pink-600 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to scale your ecommerce?</h2>
                  <p className="text-xl text-orange-50 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to build a high-performing commerce ecosystem that drives growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-orange-900 text-white border border-orange-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default EcommercePage;
