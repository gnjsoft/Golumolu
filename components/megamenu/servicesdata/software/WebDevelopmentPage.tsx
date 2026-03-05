import React, { useEffect } from 'react';
import { Layout, Smartphone, Globe, ShoppingCart, Zap, Layers, ArrowRight, Code, Monitor, MousePointer, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const WebDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const capabilities = [
    { 
      icon: Layout, 
      title: "Single Page Apps (SPA)", 
      desc: "Fluid, app-like experiences using React, Vue, and Angular.",
      color: "blue"
    },
    { 
      icon: ShoppingCart, 
      title: "E-Commerce", 
      desc: "Custom storefronts, headless commerce, and payment integrations.",
      color: "purple"
    },
    { 
      icon: Globe, 
      title: "Progressive Web Apps", 
      desc: "Offline-capable web apps that install like native applications.",
      color: "emerald"
    },
    { 
      icon: Layers, 
      title: "SaaS Platforms", 
      desc: "Multi-tenant architecture built for scale and subscription models.",
      color: "indigo"
    },
    { 
      icon: Code, 
      title: "Custom CMS", 
      desc: "Tailored content management solutions specifically for your workflow.",
      color: "amber"
    },
    { 
      icon: MousePointer, 
      title: "Interactive Portals", 
      desc: "Customer and partner portals with complex data visualization.",
      color: "rose"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      
      {/* Abstract Gradient Hero */}
      <div className="relative bg-white overflow-hidden pt-16 pb-24 lg:pt-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-8 shadow-sm">
                <Globe size={16} />
                <span>Next-Gen Web Experiences</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Perform.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
                We craft pixel-perfect, responsive, and high-performance web applications using the latest frameworks to ensure your digital presence is second to none.
            </p>

            {/* Browser Mockup Visual */}
            <div className="relative w-full max-w-5xl mx-auto mt-8">
                <div className="bg-slate-900 rounded-t-2xl p-3 flex items-center gap-2 shadow-2xl">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center">
                        <div className="inline-block px-3 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">
                            gnjworldwide.com/web-solutions
                        </div>
                    </div>
                </div>
                <div className="bg-white border-x border-b border-slate-200 rounded-b-2xl shadow-2xl overflow-hidden h-[300px] md:h-[500px] relative">
                     {/* Abstract UI Representation */}
                     <div className="grid grid-cols-12 gap-4 p-8 h-full bg-slate-50">
                        <div className="col-span-12 md:col-span-3 space-y-4">
                            <div className="h-8 w-24 bg-blue-200 rounded animate-pulse"></div>
                            <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
                            <div className="h-4 w-2/3 bg-slate-200 rounded animate-pulse"></div>
                            <div className="h-32 w-full bg-slate-200 rounded-xl mt-8"></div>
                        </div>
                        <div className="col-span-12 md:col-span-9 space-y-6">
                            <div className="flex justify-between items-center mb-8">
                                <div className="h-12 w-1/3 bg-slate-200 rounded-lg"></div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-100"></div>
                                    <div className="h-12 w-32 rounded-lg bg-blue-600 shadow-lg shadow-blue-200"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-40 bg-white rounded-xl shadow-sm border border-slate-100 p-4"><div className="h-8 w-8 bg-purple-100 rounded-full mb-4"></div></div>
                                <div className="h-40 bg-white rounded-xl shadow-sm border border-slate-100 p-4"><div className="h-8 w-8 bg-green-100 rounded-full mb-4"></div></div>
                                <div className="h-40 bg-white rounded-xl shadow-sm border border-slate-100 p-4"><div className="h-8 w-8 bg-orange-100 rounded-full mb-4"></div></div>
                            </div>
                            <div className="h-64 bg-slate-900 rounded-xl shadow-xl p-6 flex items-center justify-center">
                                <span className="text-slate-500 font-mono">{'<Code />'}</span>
                            </div>
                        </div>
                     </div>
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -left-4 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="bg-green-100 p-2 rounded-lg"><Zap className="text-green-600" size={20} /></div>
                    <div>
                        <div className="text-xs text-slate-500">Performance</div>
                        <div className="font-bold text-slate-900">99/100</div>
                    </div>
                </div>
                <div className="absolute -right-4 top-1/3 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="bg-purple-100 p-2 rounded-lg"><Monitor className="text-purple-600" size={20} /></div>
                    <div>
                        <div className="text-xs text-slate-500">Responsive</div>
                        <div className="font-bold text-slate-900">All Devices</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-24 relative overflow-hidden">
         {/* Decorative background elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                  Our Capabilities
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-600 text-lg"
                >
                  From complex enterprise platforms to simple, elegant landing pages, we cover the full spectrum of web development with precision and passion.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((item, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className={`w-16 h-16 bg-slate-50 border border-slate-100 text-slate-900 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                <item.icon size={32} />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-8 text-base">{item.desc}</p>
                            
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                    <div className="h-1.5 w-8 bg-blue-600 rounded-full"></div>
                                    <div className="h-1.5 w-2 bg-slate-200 group-hover:bg-blue-300 transition-colors rounded-full"></div>
                                    <div className="h-1.5 w-2 bg-slate-200 group-hover:bg-blue-200 transition-colors rounded-full"></div>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                                        Learn More <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative corner element */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"></div>
                    </motion.div>
                ))}
            </div>
         </div>
      </div>

      {/* Marquee Tech Stack */}
      <div className="py-20 bg-slate-900 overflow-hidden border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Our Core Stack</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="relative flex overflow-x-hidden group">
            <div className="py-12 animate-marquee whitespace-nowrap flex gap-12">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-12 text-slate-400 font-bold text-2xl items-center">
                        <span>React</span>
                        <span>Next.js</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>Tailwind</span>
                        <span>PostgreSQL</span>
                        <span>GraphQL</span>
                        <span>Docker</span>
                        <span>AWS</span>
                        <span>Angular</span>
                        <span>Vue</span>
                    </div>
                ))}
            </div>
          </div>
      </div>

      {/* CTA */}
      <div className="relative py-24 bg-blue-600 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to build something amazing?</h2>
            <p className="text-blue-100 mb-10 text-lg">
                Let's discuss your project requirements and how we can help you achieve your digital goals.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
         </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;