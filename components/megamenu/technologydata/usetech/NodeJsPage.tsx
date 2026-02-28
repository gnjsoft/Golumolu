import React, { useEffect, useState } from 'react';
import { Hexagon, Zap, Globe, Share2, ArrowRight, Layers, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const NodeJsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-[#333333] min-h-screen pt-20 font-sans text-white">
      <div className="relative py-24 px-4 overflow-hidden border-b border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#68A063] rounded-full blur-[150px] opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                      Node.js <span className="text-[#68A063]">Development</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      Build fast, scalable, network applications. The event-driven runtime that unified frontend and backend development.
                  </p>
                  <Link to="/contact" className="bg-[#68A063] hover:bg-[#5a8e56] text-white px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center">
                      Scale Your Backend <ArrowRight className="ml-2" />
                  </Link>
              </div>
              
              <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="relative w-64 h-64">
                      <Hexagon size={256} className="text-[#333333] fill-[#68A063]" strokeWidth={1} />
                      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">JS</div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Zap, title: "Real-Time Apps", desc: "Chat, collaboration tools, and live dashboards using WebSockets." },
                  { icon: Layers, title: "Full Stack JS", desc: "MERN/MEAN stack solutions for unified development speed." },
                  { icon: Share2, title: "API Gateways", desc: "Handling concurrent connections efficiently for microservices." },
                  { icon: Box, title: "Serverless", desc: "AWS Lambda and Google Cloud Functions deployment." },
                  { icon: Globe, title: "Scalability", desc: "Non-blocking I/O model perfect for data-intensive apps." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-[#444444] p-8 rounded-2xl hover:bg-[#555555] transition-colors border border-gray-600 group">
                      <item.icon className="w-10 h-10 text-[#68A063] mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default NodeJsPage;