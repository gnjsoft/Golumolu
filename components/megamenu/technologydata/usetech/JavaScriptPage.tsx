import React, { useEffect, useState } from 'react';
import { Code2, Monitor, Smartphone, Globe, ArrowRight, Zap, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const JavaScriptPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#F7DF1E] text-black py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          
          <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-20 h-20 bg-black text-[#F7DF1E] rounded-xl flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-xl">
                  JS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">JavaScript Everywhere</h1>
              <p className="text-xl text-black/80 max-w-2xl mx-auto mb-10 font-medium">
                  The language of the web. Frontend, backend, mobile, and desktop. We master the ecosystem to build modern digital experiences.
              </p>
              <Link to="/contact" className="bg-black text-[#F7DF1E] font-bold py-3 px-8 rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center shadow-lg">
                  Hire JS Experts <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  { icon: Monitor, title: "Frontend", desc: "React, Vue, Angular, Svelte.", color: "text-blue-600" },
                  { icon: Box, title: "Backend", desc: "Node.js, Express, NestJS.", color: "text-green-600" },
                  { icon: Smartphone, title: "Mobile", desc: "React Native, Ionic.", color: "text-purple-600" },
                  { icon: Globe, title: "Desktop", desc: "Electron, Tauri.", color: "text-slate-600" }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all text-center">
                      <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>

          <div className="mt-20 bg-black text-white p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Modern ES6+ Standards</h2>
                  <p className="text-gray-400 text-lg">
                      We write clean, modular, and maintainable code using the latest ECMAScript standards and TypeScript for type safety.
                  </p>
              </div>
              <div className="flex-1 w-full bg-[#1e1e1e] p-6 rounded-xl font-mono text-sm shadow-inner border border-gray-800">
                  <div className="text-blue-400">const <span className="text-yellow-300">innovate</span> = <span className="text-purple-400">async</span> () ={`>`} {`{`}</div>
                  <div className="pl-4 text-white">
                      <span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> <span className="text-green-400">GnJ</span>.build({`{`}
                  </div>
                  <div className="pl-8 text-blue-300">quality: <span className="text-orange-300">"Top Tier"</span>,</div>
                  <div className="pl-8 text-blue-300">speed: <span className="text-orange-300">"Fast"</span></div>
                  <div className="pl-4 text-white">{`}`});</div>
                  <div className="pl-4 text-white">return result;</div>
                  <div className="text-white">{`}`}</div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default JavaScriptPage;